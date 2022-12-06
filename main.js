

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
const carta = document.querySelector('#content');
const x = 'x';

botao.addEventListener('click', (e) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
    .then(response => {response.json()
        .then( data => carta.innerHTML = `<img  src="${data.cards[0].image}">; `)
            .then(r => {const botao_pegar = document.querySelector('#btn_pegar');
            const carta1 = document.querySelector('#carta1');
            const carta2 = document.querySelector('#carta2');
            const carta3 = document.querySelector('#carta3');
        
        
            function pegar_carta () {
            // carta1.innerHTML = `<img style="width: 20%" src="${data.cards[0].image}">`;
            console.log(x)
            }
        
            botao_pegar.addEventListener('click', pegar_carta());
            })
            
    })
    .catch(err => console.log('Deu erro:'+err.message));


    
})

    


