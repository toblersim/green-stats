import { names } from './data/names.js';

const dropdown1 = document.getElementById('nameDropdown');
const dropdown2 = document.getElementById('nameDropdown2');

function populateDropdown(dropdown) {
    names.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        dropdown.appendChild(option);
    });
}

populateDropdown(dropdown1);
populateDropdown(dropdown2);