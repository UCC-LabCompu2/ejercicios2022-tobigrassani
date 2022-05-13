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
    }else if(id=="metro") {
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda= 1.09361 * valor;
    }else if(id=="pulgada") {
        pulgada = valor;
        metro = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yarda = 0.0277778 * valor;
    }else if(id=="pie") {
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }else if(id=="yarda") {
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
    if(id=="grados"){
    grad = document.getElementById("grados").value;
    rad = (grad*Math.PI)/180;
    document.getElementById("radianes").value = rad;
    }else if(id=="radianes"){
    rad = document.getElementById("radianes").value;
    grad = (rad*180)/Math.PI;
    document.getElementById("grados").value = grad;
} }
function mostrar_ocultar(valorMostrar){
    if(valorMostrar=="val_mostrar"){
        document.getElementById("divMostrar").style.display = 'block';
    }else if(valorMostrar=="val_ocultar"){
        document.getElementById("divMostrar").style.display = 'none';
    }
}
function cSuma() {
    var num1, num2;
    num1=number(document.getElementById("sum_num1")[0].value);
    num2=number(document.getElementById("sum_num2")[0].value);
    document.getElementById("sum_total")[0].value = nums1 + nums2;
}
function cResta() {
    var num1, num2;
    num1=number(document.getElementById("res_num1")[0].value);
    num2=number(document.getElementById("res_num2")[0].value);
    document.getElementById("res_total")[0].value = num1 - num2;
}
function cMul() {
    var num1, num2;
    num1=number(document.getElementById("mul_num1")[0].value);
    num2=number(document.getElementById("mul_num2")[0].value);
    document.getElementById("mul_total")[0].value = num1 * num2;
}
function cDiv() {
    var num1, num2;
    num1=number(document.getElementById("div_num1")[0].value);
    num2=number(document.getElementById("div_num2")[0].value);
    document.getElementById("div_total")[0].value = num1 / num2;
}