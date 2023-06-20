let customers = [];

document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let newCustomer = {
        name: name,
        email: email
    };

    customers.push(newCustomer);

    updateCustomerTable();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

function updateCustomerTable() {
    let tableBody = document.getElementById('customerTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    for (let i = 0; i < customers.length; i++) {
        let customer = customers[i];

        let row = tableBody.insertRow();

        let nameCell = row.insertCell();
        nameCell.innerHTML = customer.name;

        let emailCell = row.insertCell();
        emailCell.innerHTML = customer.email;

        let actionsCell = row.insertCell();
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteCustomer(i);
        });
        actionsCell.appendChild(deleteButton);
    }
}

function deleteCustomer(index) {
    customers.splice(index, 1);
    updateCustomerTable();
}
