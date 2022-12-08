

function tocar_musica() {
    const song = new Audio('01MrRoboto.mp3');
    song.play();

}






const botao = document.querySelector('#btn-fetch');
const carta = document.querySelector('#content');

botao.addEventListener('click', (e) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, options)
    .then(response => {response.json()
        .then( data => carta.innerHTML = `<img  src="${data.cards[0].image}">; `)
            
            
    })
    .catch(err => console.log('Deu erro:'+err.message));

    const audio = new Audio('ES_Pen Click In - SFX Producer.mp3');
    audio.play();
    window.location.href = '#carta1';
    
})
    var c1 = null;
    var c2 = null;
    var c3 = null;

    function pegar_carta(){
        
        if(c1 == null) {
            const carta1 = document.querySelector('#carta1');
            carta1.innerHTML = `<p style="width: 5%">${carta.innerHTML}</p>`;
            console.log('c1'+carta1.innerHTML);
            c1 = carta1.innerHTML;
            const audio = new Audio('flipcard-91468.mp3');
            audio.play();
            window.location.href = '#carta1';

        } else if (c1 != null && c2 == null)  {

            const carta2 = document.querySelector('#carta2');
            carta2.innerHTML = `<p style="width: 5%">${carta.innerHTML}</p>`;
            console.log('c2'+carta2.innerHTML);
            c2 = carta2.innerHTML;
            const audio = new Audio('flipcard-91468.mp3');
            audio.play();
            window.location.href = '#carta2';


        } else if (c2 != null && c3 == null)  {

            const carta3 = document.querySelector('#carta3');
            carta3.innerHTML = `<div style="width: 5%">${carta.innerHTML}</div>`;
            console.log('c3'+carta3.innerHTML);
            c3 = carta3.innerHTML;
            const audio = new Audio('flipcard-91468.mp3');
            audio.play();
            const song = new Audio('idea-34284.mp3');
            song.play();

            const msgm = document.querySelector('#msgm');
            msgm.innerHTML =  '<p id="parabens"> PARABÉNS!!! </p>'
            window.location.href = '#parabens';


        }
    }
    


