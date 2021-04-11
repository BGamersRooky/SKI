var forma = document.getElementsByClassName("matrica");
var glavna = [[],[],[]];
var jednako = [];

var matricax = [...glavna];
var matricay = [...glavna];
var matricaz = [...glavna];


function izracunaj(){

var r = 0;
var n = 0;
var m = 0;

for(var i = 0; i < forma.length; i++){
  if(i == 3 || i == 7 || i == 11){
    jednako[r] = forma[i];
    //console.log("Resenje " + r + ": " + jednako[r].value); 
    r+=1;   
  }else{
    glavna[n][m] = forma[i];
    //console.log("Matrica " + m + n + ": " + matrica[n][m].value);
    n++;
    if(n>2){
      m++;
      n=0;
    }
  }
}

var delta = proracun(glavna);
console.log(delta);

proracunx(matricax, jednako, delta);
proracuny(matricay, jednako, delta);
proracunz(matricaz, jednako, delta);
}

function proracun(pomocna){
var skok1 = 1;
var skok2 = 2;

var sum = 0;
var sub = 0;

for(var i = 0; i < pomocna[0].length; i++){
  var pokazivac1 = (i + skok1) % pomocna[0].length;
  var pokazivac2 = (i + skok2) % pomocna[0].length;
  sum += (pomocna[i][0].value * pomocna[pokazivac1][1].value * pomocna[pokazivac2][2].value);
  //console.log(sum);  
}
for(var i = 0; i < pomocna[0].length; i++){
  var pokazivac1 = (i + skok1) % pomocna[0].length;
  var pokazivac2 = (i + skok2) % pomocna[0].length;
  sub += (pomocna[i][2].value * pomocna[pokazivac1][1].value * pomocna[pokazivac2][0].value);
  //console.log(sub);  
}
var rez = sum - sub;
return rez;
}

function proracunx(matricax, jednako, delta){

  let pomocnax = matricax;

  pomocnax[0] = jednako;
  var deltax = proracun(pomocnax);
  var resx = deltax / delta;
  document.getElementById("x").innerHTML = resx;

}
function proracuny(matricay, jednako, delta){

  let pomocnay = matricay;

  pomocnay[1] = jednako;
  var deltay = proracun(pomocnay);
  var resy = deltay / delta;
  document.getElementById("y").innerHTML = resy;

}
function proracunz(matricaz, jednako, delta){

  let pomocnaz = matricaz;

  pomocnaz[2] = jednako;
  var deltaz = proracun(pomocnaz);
  var resz = deltaz / delta;
  document.getElementById("z").innerHTML = resz;

}