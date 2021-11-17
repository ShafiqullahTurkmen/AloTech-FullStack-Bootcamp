## Ödev 1
#### Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

#### The circle class
```js
class Circle {
    area(radius) { // thid function finds the area of a circle and takes radius as an input
        console.log(Math.PI * Math.pow(radius, 2));
    }
}

// object declaration of the circle class
let myCircle1 = new Circle();

// calls the area function with 9 radius
myCircle1.area(9);
// 254.46900494077323

// calls the area function with 9 radius
myCircle1.area(3);
// 28.274333882308138

// calls the area function with 9 radius
myCircle1.area(5);
// 78.53981633974483

```

#### Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_1_Node.JS_Komut_Satırı_Kullanımı> node
Welcome to Node.js v14.15.4.
Type ".help" for more information.
> class Circle {
...     area(radius) {
.....         console.log(Math.PI * Math.pow(radius, 2));
.....     }
... }
undefined
> let myCircle1 = new Circle();
undefined
> myCircle1.area(9);
254.46900494077323
undefined
> myCircle1.area(3);
28.274333882308138
undefined
> myCircle1.area(5);
78.53981633974483
undefined
>

```
