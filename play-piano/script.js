const pianoKeys = document.querySelectorAll('.piano-keys .key');
const valumeSide = document.querySelector('.Volume-slider input');
const hideKey = document.querySelector('.key-check');

let allKey = [],
 audio = new Audio('tunes/a.wav'); //default audio src is a tune;

const playTune = (key) => {
    audio.src =`tunes/${key}.wav`; // passing audio src on key based
    audio.play(); // playing audio
    console.log(allKey);
    

    const clickedKey = document.querySelector(`[data-key = "${key}"]`); // getting clicked by elements
    clickedKey.classList.add('active'); // click key add acctive class
    setTimeout(() => {
    clickedKey.classList.remove('active'); // 150ms remove active class
        
    }, 150);
}

pianoKeys.forEach( (key) => {
    allKey.push(key.dataset.key) // adding data key value to the allkeys arrey
    // caling play tune function with data-key
    key.addEventListener('click', () => playTune(key.dataset.key))    
})


const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKey = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (e) => {
    //if the pressed key is allkeys arrey only call playtune functions
    if(allKey.includes(e.key)) 
        playTune(e.key)
    
}


valumeSide.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);
hideKey.addEventListener('click', showHideKey)




