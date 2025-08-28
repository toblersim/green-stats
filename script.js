const csvFilePath = '../data/names.csv';
const dropdown = document.getElementById('nameDropdown');

fetch(csvFilePath)
    .then(response => response.text())
    .then(data => {
        const names = data.split('\n').filter(name => name.trim() !== '');
        names.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            dropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error loading the CSV file:', error));