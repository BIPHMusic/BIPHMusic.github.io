var vocab;

var cumulative = [
    {"Term":"Dictation","Definition":"To write down a given melody or harmony"},
    {"Term":"Interval","Definition":"The distance between two notes"},
    {"Term":"Transcribe/Transcription","Definition":"To write down a melody or passage as it was performed, to dicatate"},
    {"Term":"Octave","Definition":"The space of 8 notes"},
    {"Term":"Unison","Definition":"Two notes at the same pitch level"},
    {"Term":"Diatonic","Definition":"Chords or notes that fall within the scale"},
    {"Term":"Tonic","Definition":"I, do-mi-sol"},
    {"Term":"Supertonic","Definition":"ii, re-fa-la"},
    {"Term":"Mediant","Definition":"iii, mi-sol-xi"},
    {"Term":"Subdominant","Definition":"IV, fa-la-do"},
    {"Term":"Dominant","Definition":"V, sol-xi-re"},
    {"Term":"Submediant","Definition":"vi, la-do-mi"},
    {"Term":"Leading Tone","Definition":"viiº, xi-re-fa"},
    {"Term":"Perfect Unison","Definition":"No distance between the pitches; the same note"},
    {"Term":"Minor 2","Definition":"One half step between the pitches, “Jaws”"},
    {"Term":"Major 2","Definition":"Two half steps between the pitches, “Do-re”"},
    {"Term":"Minor 3","Definition":"Three half steps between the pitches, “Clair de Lune,” “Funeral March”"},
    {"Term":"Major 3","Definition":"Four half steps between the pitches, “Mario”"},
    {"Term":"Perfect 4","Definition":"Five half steps between the pitches"},
    {"Term":"Tritone","Definition":"Six half steps between the pitches"},
    {"Term":"Perfect 5","Definition":"Seven half steps between the pitches"},
    {"Term":"Minor 6","Definition":"Eight half steps between the pitches"},
    {"Term":"Major 6","Definition":"Nine half steps between the pitches"},
    {"Term":"Minor 7","Definition":"Ten half steps between the pitches"},
    {"Term":"Major 7","Definition":"Eleven half steps between the pitches"},
    {"Term":"Perfect Octave","Definition":"Twelve half steps between the pitches"},
];

var intervals = [
    {"Term":"Perfect Unison","Definition":"No distance between the pitches; the same note"},
    {"Term":"Minor 2","Definition":"One half step between the pitches, “Jaws”"},
    {"Term":"Major 2","Definition":"Two half steps between the pitches, “Do-re”"},
    {"Term":"Minor 3","Definition":"Three half steps between the pitches, “Clair de Lune,” “Funeral March”"},
    {"Term":"Major 3","Definition":"Four half steps between the pitches, “Mario”"},
    {"Term":"Perfect 4","Definition":"Five half steps between the pitches"},
    {"Term":"Tritone","Definition":"Six half steps between the pitches"},
    {"Term":"Perfect 5","Definition":"Seven half steps between the pitches"},
    {"Term":"Minor 6","Definition":"Eight half steps between the pitches"},
    {"Term":"Major 6","Definition":"Nine half steps between the pitches"},
    {"Term":"Minor 7","Definition":"Ten half steps between the pitches"},
    {"Term":"Major 7","Definition":"Eleven half steps between the pitches"},
    {"Term":"Perfect Octave","Definition":"Twelve half steps between the pitches"},
];
var DiatonicChordTerms = [
    {"Term":"Tonic","Definition":"I, do-mi-sol"},
    {"Term":"Supertonic","Definition":"ii, re-fa-la"},
    {"Term":"Mediant","Definition":"iii, mi-sol-xi"},
    {"Term":"Subdominant","Definition":"IV, fa-la-do"},
    {"Term":"Dominant","Definition":"V, sol-xi-re"},
    {"Term":"Submediant","Definition":"vi, la-do-mi"},
    {"Term":"Leading Tone","Definition":"viiº, xi-re-fa"},
];

    function getVocab() {
        let vocabSelect = document.querySelector('select');
        if (vocabSelect.value == 'Intervals') {
            vocab = intervals;
            getRandomWord()
        } else if (vocabSelect.value == 'Diatonic Chord Terms') {
            vocab = DiatonicChordTerms;
            getRandomWord()
        } else if (vocabSelect.value == 'Cumulative') {
            vocab = cumulative;
        }
    }

getVocab()

let listlength = Object.keys(vocab).length;
let theword = Math.floor(Math.random() * listlength);


const term = document.querySelector('.term');
const pinyin = document.querySelector('.pinyin');
const english = document.querySelector('.english');
const pinyinButton = document.querySelector('.button-container .pinyinbutton');
const definitionButton = document.querySelector('.button-container .definitionButton');
const nextButton = document.querySelector('.button-container .nextButton');

function getRandomWord() {
    listlength = Object.keys(vocab).length;
    theword = Math.floor(Math.random() * listlength);
    term.innerHTML = `<h3>${vocab[theword].Term}</h3>`;
    english.innerHTML = `<h3>${vocab[theword].Definition}</h3>`;
    term.style.visibility='hidden';
    pinyin.style.visibility='hidden';
    pinyinButton.style.display = 'none'; 
    definitionButton.style.display='block';
    nextButton.style.display='none';
}

 
definitionButton.addEventListener('click', () => {
    term.style.visibility = 'visible';
    definitionButton.style.display='none'
    nextButton.style.display='block';
})

nextButton.addEventListener('click', () => {
    pinyin.style.visibility = 'hidden';
    english.style.visibility = 'hidden';
    nextButton.style.display='none';
    definitionButton.style.display = 'block';  
    english.style.visibility = 'visible';
    getRandomWord();
});


document.addEventListener('keydown', (e) => {
        if (e.keyCode == 32) { 
            e.preventDefault(); 
            autoProgress = !autoProgress;
            progressSpeedSlider.style.display = autoProgress ? 'block' : 'none';
            if (autoProgress) {
                autoProgressInterval = setInterval(() => {
                    if (pinyinButton.style.display == 'block') {
                        pinyinButton.click();
                    } else if (definitionButton.style.display == 'block') {
                        definitionButton.click();
                    } else if (nextButton.style.display == 'block') {
                        nextButton.click();
                    }
                }, progressSpeedSlider.value);
                autoProgressButton.textContent = "Stop";
            } else {
                clearInterval(autoProgressInterval);
                autoProgressButton.textContent = "Auto-progress";
            }
        } else if (e.key == 'Enter') { 
            if (pinyinButton.style.display == 'block') {
                pinyinButton.click();
            } else if (definitionButton.style.display == 'block') {
                definitionButton.click();
            } else if (nextButton.style.display == 'block') {
                nextButton.click();
            }
        } else if (e.keyCode == 39) { // check for left arrow key
                e.preventDefault(); 
                progressSpeedSlider.value = Math.max(500, parseInt(progressSpeedSlider.value) - 250); // decrease speed by 250
                if (autoProgress) { // restart auto-progress interval with new speed
                    clearInterval(autoProgressInterval);
                    autoProgressInterval = setInterval(() => {
                        if (pinyinButton.style.display == 'block') {
                            pinyinButton.click();
                        } else if (definitionButton.style.display == 'block') {
                            definitionButton.click();
                        } else if (nextButton.style.display == 'block') {
                            nextButton.click();
                        }
                    }, progressSpeedSlider.value);
                }
            } else if (e.keyCode == 37) { // check for right arrow key
                e.preventDefault(); 
                progressSpeedSlider.value = Math.min(3000, parseInt(progressSpeedSlider.value) + 250); // increase speed by 250
                if (autoProgress) { // restart auto-progress interval with new speed
                    clearInterval(autoProgressInterval);
                    autoProgressInterval = setInterval(() => {
                        if (pinyinButton.style.display == 'block') {
                            pinyinButton.click();
                        } else if (definitionButton.style.display == 'block') {
                            definitionButton.click();
                        } else if (nextButton.style.display == 'block') {
                            nextButton.click();
                        }
                    }, progressSpeedSlider.value);
                }
            }
        });


const autoProgressButton = document.querySelector('.autoProgressButton');
const progressSpeedSlider = document.getElementById('progressSpeed');
let autoProgress = false;
let autoProgressInterval;

autoProgressButton.addEventListener('click', () => {
        autoProgress = !autoProgress;
        progressSpeedSlider.style.display = autoProgress ? 'block' : 'none';
        if (autoProgress) {
            autoProgressInterval = setInterval(() => {
                if (pinyinButton.style.display == 'block') {
                    pinyinButton.click();
                } else if (definitionButton.style.display == 'block') {
                    definitionButton.click();
                } else if (nextButton.style.display == 'block') {
                    nextButton.click();
                }
            }, progressSpeedSlider.value);
            autoProgressButton.textContent = "Stop";
        } else {
            clearInterval(autoProgressInterval);
            autoProgressButton.textContent = "Auto-progress";
        }
    });

progressSpeedSlider.addEventListener('input', () => {
    if (autoProgress) {
        clearInterval(autoProgressInterval);
        autoProgressInterval = setInterval(() => {
            if (pinyinButton.style.display == 'block') {
                pinyinButton.click();
            } else if (definitionButton.style.display == 'block') {
                definitionButton.click();
            } else if (nextButton.style.display == 'block') {
                nextButton.click();
            }
        }, progressSpeedSlider.value);
    }
});
 
getRandomWord();