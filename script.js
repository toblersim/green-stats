import { names } from './data/names.js';

const dropdown = document.getElementById('nameDropdown');
names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
});