const fs = require('fs');
const jsonFile = {"name": "Employee 1 Name", "salary": 2000}

// writes into employee.json file
fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2), 'utf8', (error, data) => {
    if (error === true) {
        console.log(`write to file failed: ${error}`);
    }
    console.log('write to file complete');
});

