const fs = require('fs');

// reads employee.json file
fs.readFile('employees.json', 'utf8', (error, data) => {
    if (error === true) {
        console.log(`File read failed: ${error}`);
    }
    console.log(data);
    console.log('read file complete');
});