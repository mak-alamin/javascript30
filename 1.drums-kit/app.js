let audios = document.querySelectorAll('audio');
let divs = document.querySelectorAll('div');
let currentKey;

window.addEventListener('keydown', function(e){
    
    audios.forEach(function(audio, i){
        currentKey = audio.getAttribute('data-key');
     
        if(currentKey == e.keyCode){
            audio.currentTime = 0;
            audio.play();
        }
    });

    divs.forEach(function(div,i){
        currentKey = div.getAttribute('data-key');

        if( e.keyCode == currentKey ){
            div.classList.add('playing');
            
            setTimeout(function(){
                div.classList.remove('playing');
            }, 50);
        }
    });
});