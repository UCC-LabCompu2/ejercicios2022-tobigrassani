/**
 * Conversion de unidades entre metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies, pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
* @return
 */
function conversorUnidades(id, valor){
    var metro, pulgada, pie, yarda;
    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if(isNaN(valor)) {
        alert("Se ingreso un valor invalido de "+id)
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id==="metro") {
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda= 1.09361 * valor;
    }else if(id==="pulgada") {
        pulgada = valor;
        metro = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yarda = 0.0277778 * valor;
    }else if(id==="pie") {
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }else if(id==="yarda") {
        yarda = valor;
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;

}
function convertirGR(id){
    var grad, rad;
    if(id==="grados"){
    grad = document.getElementById("grados").value;
    rad = (grad*Math.PI)/180;
    document.getElementById("radianes").value = rad;
    }else if(id==="radianes"){
    rad = document.getElementById("radianes").value;
    grad = (rad*180)/Math.PI;
    document.getElementById("grados").value = grad;
} }
function mostrar_ocultar(valorMostrar){
    if(valorMostrar==="val_mostrar"){
        document.getElementById("divMostrar").style.display = 'block';
    }else if(valorMostrar==="val_ocultar"){
        document.getElementById("divMostrar").style.display = 'none';
    }
}
function calcularSuma() {
    var num1, num2;
    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
}
function calcularResta() {
    var num1, num2;
    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
}
function calcularMultiplicacion() {
    var num1, num2;
    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}
function calcularDivision() {
    var num1, num2;
    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
}
function cargarWeb(){
    var cant, unidad, urlComp;
    cant = document.getElementById('distancia').value;
    unidad = document.getElementById('unidades')[0].value;
    urlComp = "segundaWeb.html" + cant + "#" + unidad;
    window.open(urlComp);
}
function cargarResultado(){
    var urlComp, can, un;
    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    document.getElementById("dist").value = can + " " + un;
}
function guardarLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName('unidade')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}
function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = cant + " " + un;
}
function dibujarCirCuadd(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var yMax = canvas.height;
    var xMax = canvas.width;
    ctx.fillStyle = "RED";
    ctx.fillRect( 5,yMax-45, 40,40 );
    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "BLUE";
    ctx.fill();
}
var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera = true;}
    canvas.onmouseup = function () {bandera=false;}
    if(bandera) {
    ctx.fillRect(posX,posY,3,3);
    ctx.fill;
    }
}
function limpiarCanvas(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var yMax = canvas.height;
    var xMax = canvas.width;
    ctx.beginPath();
    for(var i=20;i<yMax;){
        ctx.moveTo(20,i);
        ctx.lineTo(1180,i);
        ctx.strokeStyle = "#234";
        ctx.stroke();
        i+=20;
    }
    ctx.closePath();
    ctx.beginPath();
    for(var i=20;i<xMax;){
        ctx.moveTo(i,20);
        ctx.lineTo(i,980);
        ctx.strokeStyle = "#234";
        ctx.stroke();
        i+=20;
    }
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(0,yMax/2);
    ctx.lineTo(xMax,yMax/2);
    ctx.strokeStyle = "RED";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(xMax/2,0,);
    ctx.lineTo(xMax/2,yMax);
    ctx.strokeStyle = "RED";
    ctx.stroke();
    ctx.closePath();

}