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
    let div0 = ("Os numeros informados resultaram em um denominador 0 cujo não é possivel prosseguir com o calculo, por favor reveja os valores informados")
    let base = parseFloat(document.getElementById('baset').value);
    let altura = parseFloat(document.getElementById('alturat').value)
    at = (base*altura) /2
    
    if( base*altura == 0){
        document.getElementById('alertt').innerHTML = div0
    }

    document.getElementById('resultadot').innerHTML = at
}
function hipotenusa(){
    let co = parseFloat(document.getElementById('co').value);
    let ca = parseFloat(document.getElementById('ca').value);
    hip = Math.sqrt(Math.pow(co,2)+ Math.pow(ca,2));
    document.getElementById('resultadoh').innerHTML = hip

}
function bhaskara(){
    let alertb = ("O valor de delta é negativo, reavalie os numeros inseridos")
    let alertr = ("O valor das raizes não resultou em numeros reais, por favor revise os numeros inseridos e tente novamente")
    let a = parseFloat(document.getElementById('valora').value);
    let b = parseFloat(document.getElementById('valorb').value);
    let c = parseFloat(document.getElementById('valorc').value);
    let delta = parseFloat (Math.pow (b,2) -1* (4*a*c))
    if(delta <= 0){
        document.getElementById('alertb').innerHTML = alertb
    }
    console.log(delta)
    x1 = parseFloat ((- b + Math.sqrt(delta)) / (2*a))
    x2 = parseFloat ((- b - Math.sqrt(delta)) / (2*a))
    if( x1,x2 == ("adicionar biblioteca de numeros não reais")){
        document.getElementById('alertr').innerHTML = alertr
    }
    document.getElementById('resultadobas').innerHTML = "x1" + x1 + "x2" + x2
}
function media(){
    let erro1 = ("Os numeros informados resultaram em um denominador 0 cujo não é possivel prosseguir com o calculo, por favor reveja os valores informados")
    let nota1 = parseFloat(document.getElementById('n1').value);
    let nota2 = parseFloat(document.getElementById('n2').value);
    let nota3 = parseFloat(document.getElementById('n3').value);
    med = (nota1+nota2+nota3) /3
    if( med == 0){
        document.getElementById('errom').innerHTML = erro1
    }
    document.getElementById('resultadomedia').innerHTML = med
}
function realind(){
    
    let real = parseFloat(document.getElementById('real').value);
    let dolar = parseFloat(document.getElementById('dolar').value);
    val = real / dolar;
    document.getElementById('resultadord').innerHTML = val

}
function tempcf(){
    let erro = ("O numero valor inserido não condiz com o calculo necessario, caso tenha inserido o denominador zero, tente com outro numero.")
    let celsius = parseFloat(document.getElementById('celsius').value);
    conv = (celsius*1.8) + 32;
    if( celsius == 0){
        document.getElementById('alertdivt').innerHTML = erro
    }
    document.getElementById('resultadocf').innerHTML = conv
}

function vel(){
    let alertvel = ("Os numeros informados resultaram em um denominador 0 cujo não é possivel prosseguir com o calculo, por favor reveja os valores informados")
    let kmh = parseFloat(document.getElementById('kmh').value);
    ms = kmh / 3.6;
    if(kmh == 0){
        document.getElementById('alertvel').innerHTML = alertvel
    }
    document.getElementById('resultadovel').innerHTML = ms
}