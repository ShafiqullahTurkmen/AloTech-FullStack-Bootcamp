# Ödev 3
## Daire Modüler Dosyası

Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.

### circleModule.js
```js
// Daire alan : circleArea function
const circleArea = (r) => {
    let area = Math.PI * (r * r);
    console.log(`Yarıçapı ${r} olan dairenin alanı ortalama ${Math.round(area)} oluyor.`);
}

// daire çevre : circleCircumference function
const circleCircumference = (r) => {
    let circleCircumference = r * Math.PI * 2;
    console.log(`Yarıçapı ${r} olan dairenin çevresi ortalama ${Math.round(circleCircumference)} oluyor.`);
}

// exports both functions
module.exports = {
    circleArea,
    circleCircumference
}
```

### index.js
```js
const circle = require('./circleModule.js'); // imports circleModule

// calls circleArea and circleCircumference methods from circleModule
circle.circleArea(5);
circle.circleCircumference(5);
```

### Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_3_Daire_Modülü> node .\index.js
Yarıçapı 5 olan dairenin alanı ortalama 79 oluyor.
Yarıçapı 5 olan dairenin çevresi ortalama 31 oluyor.
```