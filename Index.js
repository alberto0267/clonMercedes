
document.addEventListener('DOMContentLoaded', () => {
 
const containerCarrousel = document.getElementById('containerCarrousel');
const carrousel= document.getElementById('slider');
const totalSliders = document.querySelectorAll('.carrouselItem');
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let moves = 0;



nextBtn.addEventListener('click',()=>{
moves++;

if(moves>=totalSliders.length-1){
moves=0;
}


carrousel.style.transform = `translateX(-${moves * 52}%)`;
console.log('entra');

});


prevBtn.addEventListener('click',()=>{
  moves--;
  
  if(moves>=totalSliders.length-1){
  moves=0;
  }
  
  
  carrousel.style.transform = `translateX(-${moves * 50}%)`;
  console.log('entra');
  
  });



  const upText = document.getElementById('upText');

 
  upText.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});
