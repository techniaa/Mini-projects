const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let editId = null;

function saveExpensesToLocal() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function updateTotal() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    totalAmountDisplay.textContent = total;
}

function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach(exp => {
        const li = document.createElement('li');
        li.className = "expense-item";
        li.innerHTML = `
            <span>${exp.name} - ₹${exp.amount}</span>
            <div>
                <button class="btn-edit" onclick="editExpense(${exp.id})">✏️</button>
                <button class="btn-delete" onclick="deleteExpense(${exp.id})">🗑️</button>
            </div>
        `;
        expenseList.appendChild(li);
    });
}

function editExpense(id) {
    const expenseToEdit = expenses.find(exp => exp.id === id);
    if (expenseToEdit) {
        expenseNameInput.value = expenseToEdit.name;
        expenseAmountInput.value = expenseToEdit.amount;
        editId = id;
    }
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    saveExpensesToLocal();
    renderExpenses();
    updateTotal();
}

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseInt(expenseAmountInput.value.trim());


    if (name === "" || isNaN(amount) || amount <= 0) return;

    if (editId === null) {
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        };
        expenses.push(newExpense);
    } else {
        const expenseToUpdate = expenses.find(exp => exp.id === editId);
        if (expenseToUpdate) {
            expenseToUpdate.name = name;
            expenseToUpdate.amount = amount;
        }
        editId = null;
    }

    saveExpensesToLocal();
    renderExpenses();
    updateTotal();

    expenseNameInput.value = "";
    expenseAmountInput.value = "";
});


renderExpenses();
updateTotal();
