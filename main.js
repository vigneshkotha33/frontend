const myForm = document.querySelector('#addEmployee_create');
const FirstnameInput = document.querySelector('#First Name');
const LastnameInput = document.querySelector('#Last Name');
const emailInput = document.querySelector('#email');
const salary = document.querySelector('#salary');
const dob = document.querySelector('#dob');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please enter both fields');
        return;
    }



    const tbody = document.querySelector('#employees');
    tbody.innerHTML += `
        <tr>
            <td>${FirstnameInput.value}</td>
            <td>${LastnameInput.value}</td>
            <td>${emailInput.value}</td>
            <td>${salaryInput.value}</td>

            <td>${dobInput.value}</td>



        </tr>
    `;

    FirstnameInput.value = '';
    LastnameInput.value = '';

    emailInput.value = '';
    SalaryInput.value = '';

    DobInput.value = '';

}
