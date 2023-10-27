var vocab;

var cumulative = [
    {"Term":"Dictation","Definition":"To write down a given melody or harmony"},
    {"Term":"Interval","Definition":"The distance between two notes"},
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
    {"Term":"Minor 3","Definition":"Three half steps between the pitches, “Funeral March”"},
    {"Term":"Major 3","Definition":"Four half steps between the pitches, “Mario”"},
    {"Term":"Perfect 4","Definition":"Five half steps between the pitches, “Here comes the bride,” “起来”"},
    {"Term":"Tritone","Definition":"Six half steps between the pitches, “The Simpsons”"},
    {"Term":"Perfect 5","Definition":"Seven half steps between the pitches, “Star Wars”"},
    {"Term":"Minor 6","Definition":"Eight half steps between the pitches, “Romance,” “Bad Romance”"},
    {"Term":"Major 6","Definition":"Nine half steps between the pitches, “NBC,” “Not At All”"},
    {"Term":"Minor 7","Definition":"Ten half steps between the pitches, “Winnie the Pooh”"},
    {"Term":"Major 7","Definition":"Eleven half steps between the pitches, “Pure Imagination”"},
    {"Term":"Perfect Octave","Definition":"Twelve half steps between the pitches, space of 8 notes"},
    {"Term":"Harmony","Definition":"The general concept that describes the way notes sound together"},
    {"Term":"Intonation","Definition":"The act of being in tune"},
    {"Term":"Dissonant","Definition":"A sound of clashing produced by conflicting notes"},
    {"Term":"Consonant","Definition":"The opposite of dissonance, pleasant sounds"},
    {"Term":"Chord","Definition":"Multiple notes sounded simultaneously, triads, etc."},
    {"Term":"Staff","Definition":"The five lines you write music on"},
{"Term":"Ledger Lines","Definition":"Short lines written above and below the staff"},
{"Term":"Treble Clef","Definition":"G clef, the symbol representing the upper register"},
{"Term":"Bass Clef","Definition":"F clef, the symbol representing the lower register"},
{"Term":"Accidental","Definition":"markings in the music that alter the pitch of a note"},
{"Term":"Improvisation","Definition":"Come up with new melodies, solos, etc. on the spot"},
{"Term":"Chromatic Scale","Definition":"A scale utilizing all 12 notes"},
{"Term":"Whole Tone Scale","Definition":"A scale comprised only of whole steps"},
{"Term":"Pentatonic Scale","Definition":"A scale only using 5 notes, major or minor"},
{"Term":"Octatonic Scale","Definition":"A scale using 8 notes, diminished scales"},
{"Term":"Sharp","Definition":"Raises a natural pitch by one half step"},
{"Term":"Flat","Definition":"Lowers a natural pitch by one half step"},
{"Term":"Double Sharp","Definition":"Raises a natural pitch by two half steps"},
{"Term":"Double Flat","Definition":"Lowers a natural pitch by two half steps"},
{"Term":"Natural","Definition":"Returns a note to it’s natural state, canceling any accidentals"},
{"Term":"Enharmonic","Definition":"An alternate spelling of a note (i.e. C#/Db)"},
{"Term":"Key","Definition":"The scale used in a piece of music"},
{"Term":"Key Signature","Definition":"The set of sharps and flats which determine the key"},
{"Term":"Solfege","Definition":"Do, Re, Mi, etc."},
{"Term":"Scale","Definition":"The notes of a given key, ascending and descending"},
{"Term":"Major Scale","Definition":"1, 2, 3, 4, 5, 6, 7, 8"},
{"Term":"Natural Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♭7, 8"},
{"Term":"Harmonic Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♮7, 8"},
{"Term":"Melodic Minor Scale","Definition":"1, 2,♭3, 4, 5,♮6,♮7, 8 ↗︎ ♭7,♭6, 5, 4,♭3, 2, 1 ↘︎"},
{"Term":"Relative Minor","Definition":"A minor scale that uses the same key signature as the major (C major, A minor)"},
{"Term":"Parallel Minor","Definition":"A minor scale that shares the same tonic as the major (C major, C minor)"},
{"Term":"Rhythm","Definition":"The way of organizing notes by length"},
{"Term":"Measure","Definition":"The space between two vertical bar lines"},
{"Term":"Time Signature","Definition":"A marking that describes the number of beats in a measure and how they are subdivided"},
{"Term":"Meter","Definition":"Another way to say Time Signature"},
{"Term":"Simple Meter","Definition":"Beat is divisible by groups of two"},
{"Term":"Compound Meter","Definition":"Beat is divisible by groups of three"},
{"Term":"Complex Meter","Definition":"Some beats are divisible by two, some by three"},
{"Term":"Duple Pulse","Definition":"Time signature with two main beats"},
{"Term":"Triple Pulse","Definition":"Time signature with three main beats"},
{"Term":"Quadruple Pulse","Definition":"Time signature with four main beats"},
{"Term":"Downbeat","Definition":"The beginning/strongest part of the beat"},
{"Term":"Upbeat","Definition":"The weaker subdivision(s) between the beats"},
{"Term":"Tempo","Definition":"the speed of music"},
{"Term":"BPM","Definition":"The number of beats per minute"},
{"Term":"Larghissimo","Definition":"The slowest tempo marking <20 BPM"},
{"Term":"Grave","Definition":"Very, very slow, 20-40 BPM"},
{"Term":"Largo/Lento","Definition":"Very slow, 40-60 BPM"},
{"Term":"Adagio","Definition":"Slowly, with expression, 60-75 BPM"},
{"Term":"Andante","Definition":"Walking tempo, 75-90 BPM"},
{"Term":"Moderato","Definition":"At a moderate speed, 100-120 BPM"},
{"Term":"Allegro","Definition":"Fast, 120-140 BPM"},
{"Term":"Vivace","Definition":"Lively and fast, 150-175 BPM"},
{"Term":"Presto","Definition":"Very fast, 140-200 BPM"},
{"Term":"Prestissimo","Definition":"Very, very fast! >200 BPM"},
{"Term":"Anacrusis","Definition":"A pickup note that starts before the beginning of a phrase"},
{"Term":"Syncopation","Definition":"The practice of accenting the upbeats of a phrase"},
{"Term":"Ostinato","Definition":"A repeated musical phrase"},
{"Term":"Dynamics","Definition":"Markings in music which determine how loudly/softly it is to be played"},
{"Term":"Piano","Definition":"quiet"},
{"Term":"Forte","Definition":"loud"},
{"Term":"Mezzo Piano","Definition":"moderately quiet"},
{"Term":"Mezzo Forte","Definition":"moderately loud"},
{"Term":"Pianissimo","Definition":"very quiet"},
{"Term":"Fortissimo","Definition":"very loud"},
{"Term":"Piano Pianissimo","Definition":"The quietest marking you’ll see"},
{"Term":"Forte Fortissimo","Definition":"The loudest marking you’ll see"},
{"Term":"Crescendo","Definition":"Gradually growing in strength"},
{"Term":"Decrescendo","Definition":"Gradually decreasing in strength"},
{"Term":"Diminuendo","Definition":"Fading out slowly, also decreasing in speed"},
{"Term":"Forte Piano","Definition":"a dynamic starting strong and immediately going to quiet"},
{"Term":"Triad","Definition":"a three note chord: 1,3,5"},
{"Term":"Major Triad","Definition":"1 M3 P5,   (1    3    5)"},
{"Term":"Minor Triad","Definition":"1 m3 P5,   (1 ♭3    5)"},
{"Term":"Diminished Triad","Definition":"1 m3 d5,   (1 ♭3 ♭5)"},
{"Term":"Augmented Triad","Definition":"1 M3 A5,  (1    3   #5)"},
{"Term":"Root","Definition":"The tonic (1) of a given chord"},
{"Term":"Root Position","Definition":"The root of the chord is on the bottom"},
{"Term":"Inversion","Definition":"A voicing of a chord where the root is not on bottom"},
];

var unit1 = [
    {"Term":"Dictation","Definition":"To write down a given melody or harmony"},
    {"Term":"Interval","Definition":"The distance between two notes"},
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
    {"Term":"Minor 3","Definition":"Three half steps between the pitches, “Funeral March”"},
    {"Term":"Major 3","Definition":"Four half steps between the pitches, “Mario”"},
    {"Term":"Perfect 4","Definition":"Five half steps between the pitches, “Here comes the bride,” “起来”"},
    {"Term":"Tritone","Definition":"Six half steps between the pitches, “The Simpsons”"},
    {"Term":"Perfect 5","Definition":"Seven half steps between the pitches, “Star Wars”"},
    {"Term":"Minor 6","Definition":"Eight half steps between the pitches, “Romance,” “Bad Romance”"},
    {"Term":"Major 6","Definition":"Nine half steps between the pitches, “NBC,” “Not At All”"},
    {"Term":"Minor 7","Definition":"Ten half steps between the pitches, “Winnie the Pooh”"},
    {"Term":"Major 7","Definition":"Eleven half steps between the pitches, “Pure Imagination”"},
    {"Term":"Perfect Octave","Definition":"Twelve half steps between the pitches, space of 8 notes"},
    {"Term":"Harmony","Definition":"The general concept that describes the way notes sound together"},
    {"Term":"Intonation","Definition":"The act of being in tune"},
    {"Term":"Dissonant","Definition":"A sound of clashing produced by conflicting notes"},
    {"Term":"Consonant","Definition":"The opposite of dissonance, pleasant sounds"},
    {"Term":"Chord","Definition":"Multiple notes sounded simultaneously, triads, etc."},
];
var unit2 = [
    {"Term":"Staff","Definition":"The five lines you write music on"},
{"Term":"Ledger Lines","Definition":"Short lines written above and below the staff"},
{"Term":"Treble Clef","Definition":"G clef, the symbol representing the upper register"},
{"Term":"Bass Clef","Definition":"F clef, the symbol representing the lower register"},
{"Term":"Accidental","Definition":"markings in the music that alter the pitch of a note"},
{"Term":"Improvisation","Definition":"Come up with new melodies, solos, etc. on the spot"},
{"Term":"Chromatic Scale","Definition":"A scale utilizing all 12 notes"},
{"Term":"Whole Tone Scale","Definition":"A scale comprised only of whole steps"},
{"Term":"Pentatonic Scale","Definition":"A scale only using 5 notes, major or minor"},
{"Term":"Octatonic Scale","Definition":"A scale using 8 notes, diminished scales"},
{"Term":"Sharp","Definition":"Raises a natural pitch by one half step"},
{"Term":"Flat","Definition":"Lowers a natural pitch by one half step"},
{"Term":"Double Sharp","Definition":"Raises a natural pitch by two half steps"},
{"Term":"Double Flat","Definition":"Lowers a natural pitch by two half steps"},
{"Term":"Natural","Definition":"Returns a note to it’s natural state, canceling any accidentals"},
{"Term":"Enharmonic","Definition":"An alternate spelling of a note (i.e. C#/Db)"},
{"Term":"Key","Definition":"The scale used in a piece of music"},
{"Term":"Key Signature","Definition":"The set of sharps and flats which determine the key"},
{"Term":"Solfege","Definition":"Do, Re, Mi, etc."},
{"Term":"Scale","Definition":"The notes of a given key, ascending and descending"},
{"Term":"Major Scale","Definition":"1, 2, 3, 4, 5, 6, 7, 8"},
{"Term":"Natural Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♭7, 8"},
{"Term":"Harmonic Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♮7, 8"},
{"Term":"Melodic Minor Scale","Definition":"1, 2,♭3, 4, 5,♮6,♮7, 8 ↗︎ ♭7,♭6, 5, 4,♭3, 2, 1 ↘︎"},
{"Term":"Relative Minor","Definition":"A minor scale that uses the same key signature as the major (C major, A minor)"},
{"Term":"Parallel Minor","Definition":"A minor scale that shares the same tonic as the major (C major, C minor)"},
{"Term":"Rhythm","Definition":"The way of organizing notes by length"},
{"Term":"Measure","Definition":"The space between two vertical bar lines"},
{"Term":"Time Signature","Definition":"A marking that describes the number of beats in a measure and how they are subdivided"},
{"Term":"Meter","Definition":"Another way to say Time Signature"},
{"Term":"Simple Meter","Definition":"Beat is divisible by groups of two"},
{"Term":"Compound Meter","Definition":"Beat is divisible by groups of three"},
{"Term":"Complex Meter","Definition":"Some beats are divisible by two, some by three"},
{"Term":"Duple Pulse","Definition":"Time signature with two main beats"},
{"Term":"Triple Pulse","Definition":"Time signature with three main beats"},
{"Term":"Quadruple Pulse","Definition":"Time signature with four main beats"},
];

var unit3 = [
{"Term":"Downbeat","Definition":"The beginning/strongest part of the beat"},
{"Term":"Upbeat","Definition":"The weaker subdivision(s) between the beats"},
{"Term":"Tempo","Definition":"the speed of music"},
{"Term":"BPM","Definition":"The number of beats per minute"},
{"Term":"Larghissimo","Definition":"The slowest tempo marking <20 BPM"},
{"Term":"Grave","Definition":"Very, very slow, 20-40 BPM"},
{"Term":"Largo/Lento","Definition":"Very slow, 40-60 BPM"},
{"Term":"Adagio","Definition":"Slowly, with expression, 60-75 BPM"},
{"Term":"Andante","Definition":"Walking tempo, 75-90 BPM"},
{"Term":"Moderato","Definition":"At a moderate speed, 100-120 BPM"},
{"Term":"Allegro","Definition":"Fast, 120-140 BPM"},
{"Term":"Vivace","Definition":"Lively and fast, 150-175 BPM"},
{"Term":"Presto","Definition":"Very fast, 140-200 BPM"},
{"Term":"Prestissimo","Definition":"Very, very fast! >200 BPM"},
{"Term":"Anacrusis","Definition":"A pickup note that starts before the beginning of a phrase"},
{"Term":"Syncopation","Definition":"The practice of accenting the upbeats of a phrase"},
{"Term":"Ostinato","Definition":"A repeated musical phrase"},
{"Term":"Dynamics","Definition":"Markings in music which determine how loudly/softly it is to be played"},
{"Term":"Piano","Definition":"quiet"},
{"Term":"Forte","Definition":"loud"},
{"Term":"Mezzo Piano","Definition":"moderately quiet"},
{"Term":"Mezzo Forte","Definition":"moderately loud"},
{"Term":"Pianissimo","Definition":"very quiet"},
{"Term":"Fortissimo","Definition":"very loud"},
{"Term":"Piano Pianissimo","Definition":"The quietest marking you’ll see"},
{"Term":"Forte Fortissimo","Definition":"The loudest marking you’ll see"},
{"Term":"Crescendo","Definition":"Gradually growing in strength"},
{"Term":"Decrescendo","Definition":"Gradually decreasing in strength"},
{"Term":"Diminuendo","Definition":"Fading out slowly, also decreasing in speed"},
{"Term":"Forte Piano","Definition":"a dynamic starting strong and immediately going to quiet"},
{"Term":"Triad","Definition":"a three note chord: 1,3,5"},
{"Term":"Major Triad","Definition":"1 M3 P5,   (1    3    5)"},
{"Term":"Minor Triad","Definition":"1 m3 P5,   (1 ♭3    5)"},
{"Term":"Diminished Triad","Definition":"1 m3 d5,   (1 ♭3 ♭5)"},
{"Term":"Augmented Triad","Definition":"1 M3 A5,  (1    3   #5)"},
{"Term":"Root","Definition":"The tonic (1) of a given chord"},
{"Term":"Root Position","Definition":"The root of the chord is on the bottom"},
{"Term":"Inversion","Definition":"A voicing of a chord where the root is not on bottom"},
]

    function getVocab() {
        let vocabSelect = document.querySelector('select');
        if (vocabSelect.value == 'Unit1') {
            vocab = unit1;
            getRandomWord()
        } else if (vocabSelect.value == 'Unit2') {
            vocab = unit2;
            getRandomWord()
        } else if (vocabSelect.value == 'Unit3') {
            vocab = unit3;
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