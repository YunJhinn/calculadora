function raioc(){
    const pi = 3.14
    let raio = parseFloat(document.getElementById('raioc').value);
    let area = pi * Math.pow(raio,2);
    document.getElementById('resultadoc').innerHTML = area
}
function arear(){
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    area= base* altura;
    document.getElementById('resultadoar').innerHTML = area
}
function areat(){
    let base = parseFloat(document.getElementById('baset').value);
    let altura = parseFloat(document.getElementById('alturat').value)
    at = (base*altura) /3
    document.getElementById('resultadot').innerHTML = at
}
function hipotenusa(){
    let co = parseFloat(document.getElementById('co').value);
    let ca = parseFloat(document.getElementById('ca').value);
    hip = Math.sqrt(Math.pow(co,2)* Math.pow(ca,2));
    document.getElementById('resultadoh').innerHTML = hip

}
function bhaskara(){
    let a = parseFloat(document.getElementById('valora').value);
    let b = parseFloat(document.getElementById('valorb').value);
    let c = parseFloat(document.getElementById('valorc').value);
    let delta = parseFloat (Math.pow (b,2) -1* (4*a*c))
    console.log(delta)
    x1 = parseFloat ((- b + Math.sqrt(delta)) / (2*a))
    x2 = parseFloat ((- b - Math.sqrt(delta)) / (2*a))
    document.getElementById('resultadobas').innerHTML = "x1" + x1 + "x2" + x2
}
function media(){
    let nota1 = parseFloat(document.getElementById('n1').value);
    let nota2 = parseFloat(document.getElementById('n2').value);
    let nota3 = parseFloat(document.getElementById('n3').value);
    med = (nota1+nota2+nota3) /3
    document.getElementById('resultadomedia').innerHTML = med
}
function realind(){
    
    let real = parseFloat(document.getElementById('real').value);
    let dolar = parseFloat(document.getElementById('dolar').value);
    val = real * dolar;
    document.getElementById('resultadord').innerHTML = val

}
function tempcf(){
    let celsius = parseFloat(document.getElementById('celsius').value);
    conv = (celsius*1.8) + 32;
    document.getElementById('resultadocf').innerHTML = conv
}

function vel(){
    let kmh = parseFloat(document.getElementById('kmh').value);
    ms = kmh / 3.6;
    document.getElementById('resultadovel').innerHTML = ms
}