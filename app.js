document.addEventListener('DOMContentLoaded', ()=> {

var greet=document.getElementById("btn");
var hello=document.getElementsByTagName("h1")[0];
var opac=0;

greet.addEventListener('click',()=>{

greet.style.display="none";
var t=setInterval(Present,100);

function Present(){
   opac+=0.1;
   if( opac==1){
    
    clearInterval(t);
       
}else{
     hello.style.opacity=opac;
   }

}

});










});