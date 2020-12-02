function nombre(){
    return Math.random() * 100;
}

document.getElementById('p1').innerHTML = nombre();
document.getElementById('p2').innerHTML = nombre();
document.getElementById('p3').innerHTML = nombre();
document.getElementById('p4').innerHTML = nombre();
document.getElementById('p5').innerHTML = nombre();
document.getElementById('p6').innerHTML = nombre();
document.getElementById('p7').innerHTML = nombre();
document.getElementById('p8').innerHTML = nombre();
document.getElementById('p9').innerHTML = nombre();
document.getElementById('p10').innerHTML = nombre();

console.log(nombre());