/**
 * Conversion de unidades entre metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies, pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 * @return
 */
function conversorUnidades(id, valor){
    if(isNaN(valor)) {
        alert("Se ingreso un valor invalido de "+id)
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id=="metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;
    }else if(id=="pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_pie.value = 0.0833333 * valor;
        document.lasUnidades.unid_yarda.value = 0.0277778 * valor;
    }else if(id=="pie") {
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;
    }else if(id=="yarda") {
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
        document.lasUnidades.unid_pulgada.value = 36 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
    }
}
function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
    grad = document.getElementById("grados").value;
    rad = (grad*Math.PI)/180;
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