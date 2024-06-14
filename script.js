// script.js

document.addEventListener('DOMContentLoaded', () => {
    const balanceDisplay = document.getElementById('balance-display');
    const buyButton = document.getElementById('buy-button');
    const sellButton = document.getElementById('sell-button');
    const transactionTableBody = document.querySelector('#transaction-table tbody');

    let balance = 0.00;
    let transactions = [];

    function updateBalance() {
        balanceDisplay.textContent = `$${balance.toFixed(2)}`;
    }

    function addTransaction(type, crypto, amount, value) {
        const date = new Date().toLocaleString();
        transactions.push({ date, type, crypto, amount, value });
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${date}</td>
            <td>${type}</td>
            <td>${crypto}</td>
            <td>${amount}</td>
            <td>$${value.toFixed(2)}</td>
        `;
        transactionTableBody.appendChild(row);
    }

    buyButton.addEventListener('click', () => {
        const cryptoType = document.getElementById('crypto-type').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const value = amount * 50000; // Example rate: $50,000 per unit of crypto

        if (amount > 0) {
            balance -= value;
            addTransaction('Buy', cryptoType, amount, value);
            updateBalance();
        }
    });

    sellButton.addEventListener('click', () => {
        const cryptoType = document.getElementById('crypto-type').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const value = amount * 50000; // Example rate: $50,000 per unit of crypto

        if (amount > 0) {
            balance += value;
            addTransaction('Sell', cryptoType, amount, value);
            updateBalance();
        }
    });

    // Initial balance update
    updateBalance();
});
