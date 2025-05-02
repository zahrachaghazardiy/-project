let objradius, result;
objradius=document.getElementById("radius");
result=document.getElementById("result");

function area(){
return objradius.value **2 * Math.PI;
}
function showarea(){
result.innerHTML=`the area is <b> ${area()} </b>` ;
}
