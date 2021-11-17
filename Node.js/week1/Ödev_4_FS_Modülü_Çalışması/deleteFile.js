const fs = require('fs');

// this function deletes a file
fs.unlink('employees.json', (error) => {
    if (error === true) {
        console.log(`file deletion failed: ${error}`);
    }
    console.log("file deletion complete");
});