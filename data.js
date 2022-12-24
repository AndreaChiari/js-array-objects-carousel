console.log('JS OK')
const data = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

/*
1)prendo gli elementi
2)creo una funzione che mi faccio stampare gli elementi che mi servono in pagina
3)creo un event listener che mi permetta di scorrere le immagini in avanti
4)creo un event listener che mi permetta di scorrere le immagini indietro
*/

// prendo gli elememnti dal DOM
const back = document.getElementById('back')
const next = document.getElementById('next')
const gallery = document.getElementById('container')



// creo una funzione che mi permetta di creare elementi in pagina

const createElements = () => {
  let card = ''
  for(let i=0; i < data.length; i++ ){
    const cards = data[i];
    card += `
      <figure class=figure>
        <img class=img src="${cards.image}" alt="${cards.title}" />    
        <figcaption>
          <h1>${cards.title}</h1>
          <p>${cards.text}</p>
        <figcaption>
      </figure>
      `;
  }

  gallery.innerHTML = card
  return card
  
}

createElements()


//recupero le immagini
const allImg = document.querySelectorAll('figure')
console.log(allImg); 


//metto la prima immagine come attiva
let activeIndex = 0
allImg[activeIndex].classList.add('active')



//aggiungo un evento al bottone che vada ad incrementare l'indice delle immagini
next.addEventListener('click', function() {

  //rimuovo l'indice
  allImg[activeIndex].classList.remove('active');

  //aumento l'indice
  activeIndex++;
  allImg[activeIndex].classList.add('active');
  
  //se arrivo alla fine riparto da capo
  if(activeIndex === allImg.length){
    activeIndex = 0;

  }

})

//aggiungo un evento al bottone che vada decrementare l'indice delle immagini
back.addEventListener('click', function() {

  //rimuovo l'indice
  allImg[activeIndex].classList.remove('active');
  
  //decremento l'indice
  activeIndex--;
  allImg[activeIndex].classList.add('active');

  //se arrivo all'inizio riparto dalla fine
  if(activeIndex < 0){
    activeIndex = allImg.length -1;

  }

})