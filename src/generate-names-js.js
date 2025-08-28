const fs = require('fs');
const csvPath = './data/names.csv';
const jsPath = './script.js';

const csv = fs.readFileSync(csvPath, 'utf8');
const names = csv.split('\n').map(name => name.trim()).filter(name => name);

const jsContent = `
const names = ${JSON.stringify(names)};
const dropdown = document.getElementById('nameDropdown');
names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
});
`;

fs.writeFileSync(jsPath, jsContent);