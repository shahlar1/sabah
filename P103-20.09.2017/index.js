var a=document.getElementById("inputA");
var b=document.getElementById("div1");
a.addEventListener("keypress",function(){
  b.innerText=a.value;
})
