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