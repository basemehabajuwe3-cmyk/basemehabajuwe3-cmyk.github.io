document.getElementById('year').textContent = new Date().getFullYear();
varbtn1=document.getElementById("btn1");
const text1= document.getElementById("text1");

var btn2=document.getElementById('btn2');
const text2= document.getElementById('text2');
var btn3= document.getElementById("btn3");
const text3= document.getElementById("text3");


const Plus= "Lire Plus...";
const Moin="Lire Moin";

var textState=true;

function toggleText(btn,text){
    btn.textContent=Plus;

    btn.addEventListener("click", ()=>{
        textState= !textState
        if(textState==true){
            text.style.display="none"
            btn.textContent= Plus;
        }else{
            text.style.display="block"
            btn.textContent=  Moin
        }
    })
}
toggleText(btn1, text1);
toggleText(btn2, text2);
toggleText(btn3, text3);
