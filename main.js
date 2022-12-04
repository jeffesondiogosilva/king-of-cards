// const selecoes = [
//     {
//         nome: 'brasil',
//         escalacao: [ {id: 0, nome: 'alisson', posicao: 'goleiro'}, 
//                      {id: 1, nome: 'daniel alves', posicao: 'lateral'},
//                      {id: 2, nome: 'thiago silva', posicao: 'zagueiro'}
//                    ]  
//     }, 
    
//     {
//         nome: 'frança',
//         escalacao: [ {id: 0, nome: 'lloris', posicao: 'goleiro'}, 
//                      {id: 1, nome: 'pavart', posicao: 'lateral'},
//                      {id: 2, nome: 'varane', posicao: 'zagueiro'}
//                    ]  
//     },
    
// ];

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd031458ad3mshddf104e99843926p150880jsn52a0d2a1cb5c',
// 		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// function fetchApiData(){
//   fetch('https://deckofcardsapi.com/api/deck/3p40paa87x90/draw/?count=2')
//     .then(response =>  response.json())
//     .then(data => { 
//         const list = document.querySelector('#fill-list');

//         data.map((item) => {    //criando o html com JS
//             const li = document.createElement('li');

//             li.setAttribute('id', item.id);
//             li.innerHTML = item.title;
//             list.appendChild(li);

//         })
//     })    
// }

const botao = document.querySelector('#btn-fetch');
const carta = document.querySelector('#content')

botao.addEventListener('click', (e) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
    .then(response => {response.json()
        .then( data => carta.innerHTML = `<img  src="${data.cards[0].image}">` )
            
    })
    .catch(err => console.log('Deu erro:'+err.message));

    ;
    
})


