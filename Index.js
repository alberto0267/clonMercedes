const carrousel = document.getElementById("section5Container");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");


document.addEventListener('DOMContentLoaded',() =>{

const upText= document.getElementById('upText');

upText.addEventListener('click',() =>{

  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })
});

})

let moves = 0;

const totalItems = document.querySelectorAll(".carrousel");




nextBtn.addEventListener("click", () => {
  moves++;
console.log('entra en next');

  if (moves >= totalItems.length) {
    moves = 0;
  }

  carrousel.style.transform = `translateX(-${moves * 50}%)`;
});

prevBtn.addEventListener("click", () => {
    moves--;
    console.log('entra en prev');
    
      if (moves<0) {
        moves = totalItems.length-1
      }
    
      carrousel.style.transform=`translateX(-${moves*50}%)`;
});
