function esValido(palabra){
    var out =true;
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyz ';//Caracteres validos
    if(palabra.length<1){
        out = false;
    }else{
        for (var i=0; i<palabra.length; i++)
            if (filtro.indexOf(palabra.charAt(i)) != -1 ) 
                out = true;
            else{
                out =false;
            }
    }
    return out;
}

function encriptar(palabra){
    let nPalabra = ""
    for(i=0;i<palabra.length;i++){
        if(palabra[i]=="a"){
            nPalabra=nPalabra+"ai";

        }
        if(palabra[i]=="e"){
            nPalabra=nPalabra+"enter";
        }
        if(palabra[i]=="i"){
            nPalabra=nPalabra+"imes";
        }
        if(palabra[i]=="o"){
            nPalabra=nPalabra+"ober";
        }
        if(palabra[i]=="u"){
            nPalabra=nPalabra+"ufat";
        }
        if(palabra[i]!="a" & palabra[i]!="e"&palabra[i]!="i" &palabra[i]!="o"&palabra[i]!="u" ){
            nPalabra+=palabra[i];
        }
    }
    return nPalabra;
}

function desencriptar(frase){
lFrase=frase.split(" ");
var verificar = ["ai","enter","imes","ober","ufat"];
var vocales = ["a","e","i","o","u"];
var fCambiada=[];

for(var i = 0 ; i<lFrase.length ; i++){
    palabra=lFrase[i];
    for(var j=0; j<verificar.length; j++){

        if(palabra.indexOf(verificar[j])!= -1){
            palabra=palabra.replaceAll(verificar[j],vocales[j]);	
        }	
    }
    fCambiada.push(palabra);	
}
return fCambiada.join(" ");
}

function copiar(){
    let aCopiar=document.querySelector("#myp1");
    aCopiar.select();
    document.execCommand("copy");

}

function myFunction() {
    let aEncriptar = document.getElementById("entrada").value;
    if(!esValido(aEncriptar)){
        alert("solo letras minusculas");

    }else{
    
        let e =encriptar(aEncriptar);
        document.getElementById('myp1').style.backgroundImage="none"
        document.getElementById('myp1').innerHTML=e;
    
    }
} 

function myFunction2(){

    let aDesecnriptar = document.getElementById("entrada").value;
    if(!esValido(aDesecnriptar)){
        alert("Solo letras minusculas")
    }else{
        let e =desencriptar(aDesecnriptar);
        document.getElementById('myp1').style.backgroundImage="none"

        document.getElementById('myp1').innerHTML=e;
    }
    
}   

document.querySelector("#copiar").addEventListener("click",copiar);