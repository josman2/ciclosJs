//ciclos while
//paso 1 -> inicio
/*var x =1;
//paso 2 -> fin condicion
while ( x <- 30) {
//instruccion o codigo que se Repite    
    document.write( x +"<br>");
}
//paso 3 -> intervalos
x = x + 1;
x +-1;
x++;
*/

/*let inicio = parseInt(prompt("digite inicio de ciclo"));
let final = parseInt(prompt("digite final de ciclo"));
let intervalos = parseInt(prompt("digite intervalos de ciclo"));
//inicio final intervalos 
for(inicio; inicio >= final; inicio-=intervalos){
    //INSTRUCCION QUE SE REPITA
    document.write( x+"<br>");

}
*/
/*
let num = Number(prompt("digite numero de multiplicar"));
let final = Number(prompt("digite hasta donde quiere multiplicar"));
for( let x = 1; x <= final; x++){
    document.write(x + "x" + num + "="+ (x*num)+"<br>")
}*/

/*let num = Number(prompt("digite cantidad de numeros"));
let acumularNum = 0;
let contarNum = 0;
let concaNum = "";
for(let x=1; x <= num; x++){
    let numero = Number(prompt("digite un numero"));
    acumularNum += numero;
    concaNum += numero + ", ";
    contarNum++;
}
document.write("total de numeros: "+ contarNum+"<br>");
document.write("suma de los numeros: "+ acumularNum+"<br>");
document.write("los numeros fueron: "+concaNum);
*/
/*
let num = prompt("deseas digitar un numero? si/no");
let acumularNum = 0;
let contarNum = 0;
let concaNum = "";
for(let x=1; num != "no"; x++){
    let numero = Number(prompt("digite un numero"));
    acumularNum += numero;
    concaNum += numero + ", ";
    contarNum++;
    num = Number(prompt("deseas digitar otro numero? si/no"));
}
document.write("total de numeros: "+ contarNum+"<br>");
document.write("suma de los numeros: "+ acumularNum+"<br>");
document.write("los numeros fueron: "+concaNum)*/

//ciclos anidados
/*let temporadas = Number(prompt("digite numero de temporadas"));
let capitulos = Number(prompt("digite numero de capitulos"));
for ( let x = 1; x <= temporadas; x++){
    document.write("inicio temporada"+ x + "<br>");
    for( let y = 1; y <= capitulos; y++){
        document.write("capitulos: "+x+"<br>");
    }

    document.write("final temporada: "+ x + "<br>");

}
*/

//realizar un ejercicio que pida al usuario numero de productos a comprar y el precio de cada producto, le calcule el valor a pagar 
//y al final diga cuantas compars hizo un cliente total del dia

let compra = prompt("¿desea registar una compra? si/no");
let cliente = 0;
let ventaTotal = 0;
for(let x = 1; compra != "no" ;x++){
    let productos = Number(prompt("digite cantidad de productos a comprar"));
    document.write("cliente #"+x+"<br>");
    document.write("No. de prouctos: "+productos+"<br>");
    let totalCompra = 0;
    for(let y = 1; y <= productos; y++){
        let precioPro = Number(prompt("digite precio del producto"+y));
        document.write("producto #"+y+" valor: "+precioPro+"<br>");
       
        totalCompra += precioPro;

    }
    document.write("---------------- <br>");
    document.write("total de compra: "+totalCompra+"<br>");
    ventaTotal += totalCompra;
    cliente++;
    compra = prompt("¿desea registar otra compra? si/no");
}
document.write("total venta del dia: "+ventaTotal+"<br>");
document.write("total cliente del dia: "+cliente+"<br>");


