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
      <h1>${cards.title}</h1>
      <p>${cards.text}</p>
      <img src="${cards.image}" alt="${cards.title}" />
      `;
  }

  gallery.append(card)
  console.log(card)
  return card
  
}

createElements()
    


    
