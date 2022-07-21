document.body.addEventListener("keydown", (event)=>{

    playSound(event.code.toLocaleLowerCase());

});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArrey = song.split(''); //Transforma a estring em array.
        playComposition(songArrey);
    }
});


function playSound(sound){
    let soundElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key=${sound}]`);

    if (soundElement) {
        soundElement.currentTime = 0; 
        soundElement.play(); //Toca audio da tag audio.
    }

    if (keyElement) {
        keyElement.classList.add('active');
        
        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }
}


function playComposition(songArrey) {
    let wait = 0; //loop com tempo de execução

    for (let songItem of songArrey) {

        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}