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