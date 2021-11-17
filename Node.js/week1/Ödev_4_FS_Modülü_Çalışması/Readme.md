## Ödev 4
### FS File System Modülü
#### Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
1. employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
2. Bu veriyi okuyalım. (READ)
3. Bu veriyi güncelleyelim.
4. Dosyayı silelim.

#### 1. Create an employees.json file with writeFile.js
```js
const fs = require('fs');
const jsonFile = {"name": "Employee 1 Name", "salary": 2000}

// writes into employee.json file
fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2), 'utf8', (error, data) => {
    if (error === true) {
        console.log(`write to file failed: ${error}`);
    }
    console.log('write to file complete');
});
```

#### Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_4_FS_Modülü_Çalışması> node writeFile.js
write to file complete
```

#### 2. Read employees.json file with readFile.js
```js
const fs = require('fs');

// reads employee.json file
fs.readFile('employees.json', 'utf8', (error, data) => {
    if (error === true) {
        console.log(`File read failed: ${error}`);
    }
    console.log(data);
    console.log('read file complete');
});
```

#### Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_4_FS_Modülü_Çalışması> node readFile.js
{
  "name": "Employee 1 Name",
  "salary": 2000
}
read file complete
```

#### 3. Update employees.json file with updateFile.js
```js
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
```

#### Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_4_FS_Modülü_Çalışması> node updateFile.js
update completed
```

#### Let's read the file again to check it
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_4_FS_Modülü_Çalışması> node readFile.js
{
  "name": "shafiqullah",
  "salary": 500
}
read file complete
```

#### 4. Delete employee.json file with deleteFile.js
```js
const fs = require('fs');

// this function deletes a file
fs.unlink('employees.json', (error) => {
    if (error === true) {
        console.log(`file deletion failed: ${error}`);
    }
    console.log("file deletion complete");
});
```

#### Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_4_FS_Modülü_Çalışması> node deleteFile.js
file deletion complete
```
