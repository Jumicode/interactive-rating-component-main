//Selectores
const sumit = document.querySelector(".Sumit");
const container = document.querySelector(".Container");
const Cal = document.querySelector(".Calificacion");
let Button = document.querySelector("ul").getElementsByTagName("Button");
let n = document.querySelector(".number");



//Recorre las ul donde se ubican los botones que el usuario pulsa

[].forEach.call(Button, btn => {
    btn.addEventListener('click', () => {
      
     n.innerHTML = btn.innerHTML;
  
    });
  });


//Muestra y oculta el contenido de la pagina 

sumit.addEventListener("click",() =>{
    
container.style.display = "none";
 Cal.style.display = "block";
});



       
    







