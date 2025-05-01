let num1 , num2 , result;
num1=document.getElementById("num1");
num2=document.getElementById("num2");
result=document.getElementById("result");
function sum(){
    result.innerText= Number(num1.value) + Number(num2.value);
}
function minus(){
    result.innerText=num1.value-num2.value;
}
function multi(){
    result.innerText=num1.value*num2.value;
}
function division(){
    result.innerText=num1.value/num2.value;
}