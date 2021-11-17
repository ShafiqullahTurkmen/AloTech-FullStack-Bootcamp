const fs = require('fs');
const jsonFile = require('./employees.json');

jsonFile.name = 'shafiqullah';
jsonFile.salary = 500;

// updates the file
fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2) , (error) => {
    if (error === true) {
        console.log(`File to write failed: ${error}`);
    }
    console.log('update completed');
});
