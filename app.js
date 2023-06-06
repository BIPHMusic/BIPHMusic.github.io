var vocab;

var cumulative = [
        {"Chinese":"五线谱","English":"Staff","Definition":"the five lines you write music on"},
        {"Chinese":"加线","English":"Ledger Lines","Definition":"short lines written above and below the staff"},
        {"Chinese":"高音谱号","English":"Treble Clef","Definition":"G clef, the symbol representing the upper register"},
        {"Chinese":"低音谱号","English":"Bass Clef","Definition":"F clef, the symbol representing the lower register"},
        {"Chinese":"变音记号","English":"Accidental","Definition":"markings in the music that alter the pitch of a note"},
        {"Chinese":"升号 (#)","English":"Sharp","Definition":"Raises a natural pitch by one half step"},
        {"Chinese":"降号 (♭)","English":"Flat","Definition":"Lowers a natural pitch by one half step"},
        {"Chinese":"重升号 (x)","English":"Double Sharp","Definition":"Raises a natural pitch by two half steps"},
        {"Chinese":"重降号 (𝄫)","English":"Double Flat","Definition":"Lowers a natural pitch by two half steps"},
        {"Chinese":"还原号(♮)","English":"Natural","Definition":"Returns a note to it’s natural state, canceling any accidentals"},
        {"Chinese":"异名同音的","English":"Enharmonic","Definition":"An alternate spelling of a note (i.e. C#/Db)"},
        {"Chinese":"调","English":"Key","Definition":"The scale used in a piece of music"},
        {"Chinese":"调号","English":"Key Signature","Definition":"The set of sharps and flats which determine the key"},
        {"Chinese":"唱名法","English":"Solfege","Definition":"Do, Re, Mi, etc."},
        {"Chinese":"音阶","English":"Scale","Definition":"8 notes, ascending and descending"},
        {"Chinese":"大调","English":"Major Scale","Definition":"1, 2, 3, 4, 5, 6, 7, 8"},
        {"Chinese":"自然小调","English":"Natural Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♭7, 8"},
        {"Chinese":"和声小调","English":"Harmonic Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♮7, 8"},
        {"Chinese":"旋律小调","English":"Melodic Minor Scale","Definition":"1, 2,♭3, 4, 5,♮6,♮7, 8 ↗︎ ♭7,♭6, 5, 4,♭3, 2, 1 ↘︎"},
        {"Chinese":"节奏","English":"Rhythm","Definition":"The way of organizing notes by length"},
        {"Chinese":"小节","English":"Measure","Definition":"The space between two vertical bar lines"},
        {"Chinese":"拍子记号","English":"Time Signature","Definition":"A marking that describes the number of beats in a measure and how they are subdivided"},
        {"Chinese":"拍号","English":"Meter","Definition":"Another way to say Time Signature"},
        {"Chinese":"单拍子","English":"Simple Meter","Definition":"Beat is divisible by groups of two"},
        {"Chinese":"复拍子","English":"Compound Meter","Definition":"Beat is divisible by groups of three"},
        {"Chinese":"复杂拍子","English":"Complex Meter","Definition":"Some beats are divisible by two, some by three"},
        {"Chinese":"二拍子","English":"Duple Pulse","Definition":"Time signature with two main beats"},
        {"Chinese":"三拍子","English":"Triple Pulse","Definition":"Time signature with three main beats"},
        {"Chinese":"四拍子","English":"Quadruple Pulse","Definition":"Time signature with four main beats"},
        {"Chinese":"拍子","English":"Downbeat","Definition":"The beginning/strongest part of the beat"},
        {"Chinese":"切分","English":"Upbeat","Definition":"The weaker subdivision(s) between the beats"},
        {"Chinese":"速度","English":"Tempo","Definition":"the speed of music"},
        {"Chinese":"速度测量","English":"BPM","Definition":"The number of beats per minute"},
        {"Chinese":"<20","English":"Larghissimo","Definition":"The slowest tempo marking <20 BPM"},
        {"Chinese":"20-40","English":"Grave","Definition":"Very, very slow, 20-40 BPM"},
        {"Chinese":"40-60","English":"Largo/Lento","Definition":"Very slow, 40-60 BPM"},
        {"Chinese":"60-75","English":"Adagio","Definition":"Slowly, with expression, 60-75 BPM"},
        {"Chinese":"75-90","English":"Andante","Definition":"Walking tempo, 75-90 BPM"},
        {"Chinese":"100-120","English":"Moderato","Definition":"At a moderate speed, 100-120 BPM"},
        {"Chinese":"120-140","English":"Allegro","Definition":"Fast, 120-140 BPM"},
        {"Chinese":"150-175","English":"Vivace","Definition":"Lively and fast, 150-175 BPM"},
        {"Chinese":"140-200","English":"Presto","Definition":"Very fast, 140-200 BPM"},
        {"Chinese":">200 ","English":"Prestissimo","Definition":"Very, very fast! >200 BPM"},
        {"Chinese":"主","English":"Tonic","Definition":"I (一级)"},
        {"Chinese":"上主","English":"Supertonic","Definition":"II (二级)"},
        {"Chinese":"中音","English":"Mediant","Definition":"III (三级)"},
        {"Chinese":"下属","English":"Subdominant","Definition":"IV (四级)"},
        {"Chinese":"属","English":"Dominant","Definition":"V (五级)"},
        {"Chinese":"下中","English":"Submediant","Definition":"VI (六级)"},
        {"Chinese":"导音","English":"Leading Tone","Definition":"VII (七级)"},
        {"Chinese":"调内音","English":"Diatonic","Definition":"Chords or notes that fall within the scale"},
        {"Chinese":"音程","English":"Interval","Definition":"The distance between two notes"},
        {"Chinese":"八度","English":"Octave","Definition":"the space of 8 notes"},
        {"Chinese":"原音","English":"Unison","Definition":"Two notes at the same pitch level"},
        {"Chinese":"腔调","English":"Intonation","Definition":"The act of being in tune"},
        {"Chinese":"不协和","English":"Dissonant","Definition":"A sound of clashing produced by conflicting notes"},
        {"Chinese":"协和","English":"Consonant","Definition":"The opposite of dissonance, pleasant sounds"},
        {"Chinese":"弱起音","English":"Anacrusis","Definition":"A pickup note that starts before the beginning of a phrase"},
        {"Chinese":"切分音","English":"Syncopation","Definition":"The practice of accenting the upbeats of a phrase"},
        {"Chinese":"循环","English":"Ostinato","Definition":"A repeated musical phrase"},
        {"Chinese":"力度标记","English":"Dynamics","Definition":"Markings in music which determine how loudly/softly it is to be played"},
        {"Chinese":"弱 (p)","English":"Piano","Definition":"quiet"},
        {"Chinese":"强 (f)","English":"Forte","Definition":"loud"},
        {"Chinese":"中弱 (mp)","English":"Mezzo Piano","Definition":"moderately quiet"},
        {"Chinese":"中强 (mf)","English":"Mezzo Forte","Definition":"moderately loud"},
        {"Chinese":"很弱 (pp)","English":"Pianissimo","Definition":"very quiet"},
        {"Chinese":"很强 (ff)","English":"Fortissimo","Definition":"very loud"},
        {"Chinese":"最弱 (ppp)","English":"Piano Pianissimo","Definition":"The quietest marking you’ll see"},
        {"Chinese":"最强 (fff)","English":"Forte Fortissimo","Definition":"The loudest marking you’ll see"},
        {"Chinese":"渐强","English":"Crescendo","Definition":"Gradually growing in strength"},
        {"Chinese":"渐弱","English":"Decrescendo","Definition":"Gradually decreasing in strength"},
        {"Chinese":"渐弱+渐慢","English":"Diminuendo","Definition":"Fading out slowly, also decreasing in speed"},
        {"Chinese":"强后突弱 (fp)","English":"Forte Piano","Definition":"a dynamic starting strong and immediately going to quiet"},
        {"Chinese":"运音法","English":"Articulation","Definition":"The way a note is played (i.e. smoothly, sharply, lightly, etc.)"},
        {"Chinese":"跳音 (•)","English":"Staccato","Definition":"To be played short and separated, lightly"},
        {"Chinese":"连奏","English":"Legato","Definition":"To be played smoothly and flowingly, no breaks or articulations"},
        {"Chinese":"重音 (>)","English":"Accent / Bell Tone","Definition":"A marking placed above or below a note head to indicate a loud start"},
        {"Chinese":"着重地,清晰地","English":"Marcato ","Definition":"To be played short and separated, but with emphasis"},
        {"Chinese":"保持","English":"Tenuto","Definition":"To be played at the full length of the full value of the note, stressed"},
        {"Chinese":"突强 (sf/sfz)","English":"Sforzando","Definition":"To articulate a note with a strong beginning and immediately drop to quiet"},
        {"Chinese":"隆重地,庄严地","English":"Maestoso","Definition":"To be played majestically, by accenting every note"},
        {"Chinese":"连奏线","English":"Slur","Definition":"A curved line between two different pitches, indicating that they should be played legato"},
        {"Chinese":"延音线","English":"Tie","Definition":"A curved line between two notes of the same pitch, adding their lengths together"},
        {"Chinese":"刮奏 (gliss)","English":"Glissando","Definition":"To quickly slide from a low note to a high note, or vice versa"},
        {"Chinese":"自由速度","English":"Rubato","Definition":"To be played with free tempo"},
        {"Chinese":"渐慢 (Rit)","English":"Ritardano","Definition":"To gradually decrease in speed"},
        {"Chinese":"加速 (Accel)","English":"Accelerando","Definition":"To gradually increase in speed"},
        {"Chinese":"回原速","English":"A Tempo","Definition":"To return to the original tempo (after rit/accel)"},
        {"Chinese":"调外(复属)","English":"Chromatic","Definition":"Moving by half steps (leaving the key)"},
        {"Chinese":"合声","English":"Harmony","Definition":"the way notes sound together"},
        {"Chinese":"和弦","English":"Chord","Definition":"multiple notes sounded simultaneously"},
        {"Chinese":"琶音","English":"Arpeggio","Definition":"Playing a chord one note at a time instead of all at once"},
        {"Chinese":"功能","English":"Function","Definition":"The specific role (job) that a chord plays "},
        {"Chinese":"上升","English":"Ascend","Definition":"To go up"},
        {"Chinese":"下降","English":"Descend","Definition":"To go down"},
        {"Chinese":"动机","English":"Motive","Definition":"A short melody but important to the song as a whole"},
        {"Chinese":"半音阶","English":"Chromatic Scale","Definition":"A scale utilizing all 12 notes"},
        {"Chinese":"全音阶","English":"Whole Tone Scale","Definition":"A scale comprised only of whole steps"},
        {"Chinese":"五声音阶","English":"Pentatonic Scale","Definition":"A scale only using 5 notes, major or minor"},
        {"Chinese":"八声音阶","English":"Octatonic Scale","Definition":"A scale using 8 notes, diminished scales"},
        {"Chinese":"关系小调","English":"Relative Minor","Definition":"A minor scale that uses the same key signature as the major (C major, A minor)"},
        {"Chinese":"同主音调","English":"Parallel Minor","Definition":"a minor scale that shares the same tonic as the major (C major, C minor)"},
        {"Chinese":"赫米奥拉","English":"Hemiola","Definition":"A temporary rhythmic juxtaposition of 3 and 2"},
        {"Chinese":"交叉节奏","English":"Cross Rhythm","Definition":"A consistent overlapping of different rhythms / meters"},
        {"Chinese":"独奏","English":"Solo","Definition":"A performance by a single musician"},
        {"Chinese":"二重奏","English":"Duet","Definition":"Two musicians performing together"},
        {"Chinese":"三重奏","English":"Trio","Definition":"Three Musicians performing together"},
        {"Chinese":"三和弦","English":"Triad","Definition":"a three note chord: 1,3,5"},
        {"Chinese":"大三","English":"Major Triad","Definition":"1 M3 P5"},
        {"Chinese":"小三","English":"Minor Triad","Definition":"1 m3 P5"},
        {"Chinese":"减三","English":"Diminished Triad","Definition":"1 m3 d5"},
        {"Chinese":"增三","English":"Augmented Triad","Definition":"1 M3 A5"},
        {"Chinese":"根音","English":"Root","Definition":"The tonic (1) of a given chord"},
        {"Chinese":"原位","English":"Root Position","Definition":"The root of the chord is on the bottom"},
        {"Chinese":"转位","English":"Inversion","Definition":"A voicing of a chord where the root is not on bottom"},
        {"Chinese":"第一转位","English":"First Inversion","Definition":"A chord with the 3rd on the bottom, abbr. 6"},
        {"Chinese":"第二转位","English":"Second Inversion","Definition":"A chord with the 5th on the bottom, abbr. 64"},
        {"Chinese":"七和弦","English":"Seventh Chord","Definition":"a four note chord: 1,3,5,7"},
        {"Chinese":"大七","English":"Major 7","Definition":"1 M3 P5 M7"},
        {"Chinese":"小七","English":"Minor 7","Definition":"1 m3 P5 m7"},
        {"Chinese":"属七","English":"Dominant 7","Definition":"1 M3 P5 m7"},
        {"Chinese":"半减七","English":"Half-Diminished 7","Definition":"1 m3 d5 m7"},
        {"Chinese":"减七","English":"Diminished 7","Definition":"1 m3 d5 d7"},
        {"Chinese":"明音","English":"Open Voicing","Definition":"A voicing in which there are unused notes"},
        {"Chinese":"近声","English":"Close Voicing","Definition":"A voicing in which neighboring voices use the next available chord tone"},
        {"Chinese":"键盘发声","English":"Keyboard Voicing","Definition":"Only one note is used in the bass, and the treble clef uses close voicing"},
        {"Chinese":"复合音程","English":"Compound Interval","Definition":"An interval that is larger than an octave, (reduce it by subtracting 7)"},
        {"Chinese":"女高","English":"Soprano","Definition":"The upper female voice"},
        {"Chinese":"女低","English":"Alto","Definition":"The lower female voice"},
        {"Chinese":"男高","English":"Tenor","Definition":"The upper male voice"},
        {"Chinese":"男低","English":"Bass","Definition":"The lower male voice"},
        {"Chinese":"序列","English":"Sequence","Definition":"A repetition of a musical phrase at a higher or lower pitch point"},
        {"Chinese":"真实序列","English":"Real Sequence","Definition":"A sequence that keeps the exact intervalic relationships in tact, usually outside of the key"},
        {"Chinese":"调内序列","English":"Tonal Sequence","Definition":"A sequence that stays in the same key, a diatonic sequence"},
        {"Chinese":"终止式","English":"Cadence","Definition":"A resting point at the end of a musical phrase"},
        {"Chinese":"完全 AC","English":"Authentic Cadence","Definition":"A cadence from the dominant (V) to tonic (I or i)"},
        {"Chinese":"P完全 PAC","English":"Perfect Authentic Cadence","Definition":"An authentic cadence w/ both chords in root position, soprano ends on tonic"},
        {"Chinese":"I完全 IAC","English":"Imperfect Authentic Cadence","Definition":"An Authentic cadence w/ inversions or non-tonic in the soprano voice"},
        {"Chinese":"教会/变格 PC","English":"Plagal Cadence","Definition":"A cadence from the subdominant (IV) to tonic (I)"},
        {"Chinese":"阻碍  DC","English":"Deceptive Cadence","Definition":"A cadence from V to vi (major) or V to VI (minor)"},
        {"Chinese":"不完全  HC","English":"Half Cadence","Definition":"A cadence that ends on the dominant"},
        {"Chinese":"弗里吉亚半终止","English":"Phrygian Half Cadence","Definition":"A half cadence that descends from a iv6 to a V"},
        {"Chinese":"小调变格终止","English":"Minor Plagal Cadence","Definition":"Cadence from iv to I "},
        {"Chinese":"琶音64","English":"Arpeggiating 64","Definition":"Harmony stays the same, but the bass changes"},
        {"Chinese":"终止式64","English":"Cadential 64","Definition":"I64, V, I"},
        {"Chinese":"经过64","English":"Passing 64","Definition":"A 64 that is passed through to another harmony"},
        {"Chinese":"踏板64","English":"Pedal 64","Definition":"A 64 that results from using a pedal point (pedal tone)"},
        {"Chinese":"弦内音 CT","English":"Chord Tone","Definition":"A note that belongs to the current harmony"},
        {"Chinese":"弦外音 NCT","English":"Non-Chord Tone","Definition":"a tone in a particular harmony that does not belong to that chord"},
        {"Chinese":"经过音","English":"Passing Tone","Definition":"an NCT that bridges two notes of differing harmony"},
        {"Chinese":"辅助音","English":"Neighbor Tone","Definition":"an NCT that goes immediately next to a CT and returns"},
        {"Chinese":"ET","English":"Escape Tone","Definition":"an NCT that steps in the opposite direction of its destination note, and then skips to it"},
        {"Chinese":"倚音","English":"Appoggiatura","Definition":"an NCT that skips above its intended destination note, and then steps down to it"},
        {"Chinese":"先现音","English":"Anticipation","Definition":"an NCT that belongs to the second harmony rather than that of the first"},
        {"Chinese":"延留音","English":"Suspension","Definition":"an NCT that holds over from a previous harmony and then resolves down"},
        {"Chinese":"Ret","English":"Retardation","Definition":"an NCT that holds over from a previous harmony and then resolves up"},
        {"Chinese":"PP","English":"Pedal Point","Definition":"an NCT that holds underneath or above several different harmonies"},
        {"Chinese":"Syn","English":"Syncope","Definition":"A systematic rhythmic anticipation of the following harmony"},
        {"Chinese":"Camb","English":"Changing Tones","Definition":"Also called “neighbor group” or “cambiata” two notes on either side of the following CT"},
        {"Chinese":"皮卡迪三度","English":"Picardy Third","Definition":"A resolution at the end of a minor song that finishes on a major I"},
        {"Chinese":"阿尔贝蒂低音","English":"Alberti Bass","Definition":"The practice of arpeggiating the chords under the main melody"},
        {"Chinese":"织体","English":"Texture","Definition":"The way in which musical content is presented"},
        {"Chinese":"主调","English":"Monophonic","Definition":"A musical texture consisting of a single melody, if multiple voices, sung in unison"},
        {"Chinese":"","English":"Homophonic","Definition":"A musical texture consisting of a main melody and harmony of lesser importance"},
        {"Chinese":"复调","English":"Polyphonic","Definition":"A musical texture using multiple melodies, each with semi-equal importance"},
        {"Chinese":"支声复调","English":"Heterophonic","Definition":"A musical texture of a melody that is doubled but with slight variations"},
        {"Chinese":"复调旋律","English":"Countermelody","Definition":"A secondary melody that accompanies the main one"},
        {"Chinese":"卡农","English":"Canon","Definition":"A polyphonic texture created by playing/singing the same melody at different times"},
        {"Chinese":"","English":"Walking Bass","Definition":"A bassline that ascends and descends, scalularly"},
        {"Chinese":"次属","English":"Secondary Dominant","Definition":"A five (V) of some diatonic chord, leads to new keys"},
        {"Chinese":"次导音","English":"Secondary Leading Tone","Definition":"A seven (vii) of some diatonic chord, leads to new keys"},
        {"Chinese":"花腔","English":"Melismatic","Definition":"To sing one syllable with many notes"},
        {"Chinese":"音节的","English":"Syllabic","Definition":"To sing one note per syllable"},
        {"Chinese":"","English":"Motion","Definition":"The movement of notes in relation to each other"},
        {"Chinese":"","English":"Similar Motion","Definition":"The two voices move in the same direction, but not by the same intervals"},
        {"Chinese":"","English":"Contrary Motion","Definition":"The two voices move in the opposite direction of one another"},
        {"Chinese":"","English":"Parallel Motion","Definition":"The two voices move in the same direction by the same interval"},
        {"Chinese":"","English":"Oblique Motion","Definition":"One voice remains the same and the other moves, in either direction"},
        {"Chinese":"","English":"Static Motion","Definition":"Both voices repeat their same note, no movement"},
        {"Chinese":"","English":"Conjunct Motion","Definition":"Smooth voice leading, usually by step"},
        {"Chinese":"","English":"Disjunct Motion","Definition":"Voice leading characterized by large leaps"},
        {"Chinese":"","English":"Part Writing","Definition":"Realizing a melody / harmony in four voices"},
        {"Chinese":"平行5/8度","English":"Parallel 5ths/8ves","Definition":"When two voices, an octave or 5th apart move in the same direction by the same interval"},
        {"Chinese":"隐伏5/8度","English":"Direct/Hidden 5ths","Definition":"When the soprano skips up/down and the bass moves in similar motion to a 5th or 8ve"},
        {"Chinese":"声部交叉","English":"Crossed Voices","Definition":"When any lower voice has a note higher than the upper voice, or vice versa"},
        {"Chinese":"声部超越","English":"Overlapping Voices","Definition":"When any lower voice has a note higher than the previously sung note of the upper voice, “ ”"},
        {"Chinese":"","English":"Voice Leading","Definition":"The concept that some chord tones need to resolve in specific ways"},
        {"Chinese":"","English":"Active / Tendency Tones","Definition":"Notes that tend to pull in a specific direction"},
        {"Chinese":"","English":"Resolution","Definition":"The specific direction that active tones should move, how they resolve"},
        {"Chinese":"调式","English":"Modes","Definition":"Scales that start from degrees other than Do (Re to Re, Mi to Mi, etc.)"},
        {"Chinese":"1级音阶","English":"Ionian","Definition":"Major Scale"},
        {"Chinese":"2级音阶","English":"Dorian","Definition":"Minor Scale w/ Natural 6"},
        {"Chinese":"3级音阶","English":"Phrygian","Definition":"Minor Scale w/ Flat 2"},
        {"Chinese":"4级音阶","English":"Lydian","Definition":"Major Scale w/ Sharp 4"},
        {"Chinese":"5级音阶","English":"Mixolydian","Definition":"Major Scale w/ Flat 7"},
        {"Chinese":"6级音阶","English":"Aeolian","Definition":"Natural Minor Scale"},
        {"Chinese":"7级音阶","English":"Locrian","Definition":"Minor Scale w/ Flat 2 & 5"},
        {"Chinese":"低高声部","English":"Outer Voices","Definition":"Bass and Soprano voices"},
        {"Chinese":"中声部","English":"Inner Voices","Definition":"Alto and Tenor voices"},
        {"Chinese":"增6和弦","English":"Augmented 6 chord","Definition":"A chord that precedes the V chord by half steps from the inside"},
        {"Chinese":"意大利增6和弦","English":"Italian Aug 6","Definition":"An Augmented 6 chord with degrees 1,3, and 7"},
        {"Chinese":"德国增6和弦","English":"German Aug 6","Definition":"An Augmented 6 chord with degrees 1,3,5, and 7"},
        {"Chinese":"法国增6和弦","English":"French Aug 6","Definition":"An Augmented 6 chord with degrees 1,3,#4, and 7"},
        {"Chinese":"那波利6和弦","English":"Neapolitan 6 Chord","Definition":"A major chord built off of the flat 2, usually in first inversion"},
        {"Chinese":"转调","English":"Key Change","Definition":"When the root key of a particular piece shifts to another center"},
        {"Chinese":"主音化","English":"Tonicize","Definition":"To temporarily use a new key center in a musical passage"},
        {"Chinese":"移调","English":"Transpose","Definition":"To move all the notes of a song up or down"},
        {"Chinese":"转调","English":"Modulate","Definition":"To slowly change from one key to another, the process of changing keys"},
        {"Chinese":"","English":"Direct Modulation","Definition":"To move immediately from one key into another with no transition"},
        {"Chinese":"","English":"Parallel Modulation","Definition":"To keep the same tonic but change from major to minor, or vice versa"},
        {"Chinese":"","English":"Rhythmic Diminution","Definition":"Shortening the lengths of all notes in a phrase (doubling the speed)"},
        {"Chinese":"","English":"Rhythmic Augmentation","Definition":"Lengthening the lengths of all notes in a phrase (slows the speed x2)"},
        {"Chinese":"","English":"Harmonic Rhythm","Definition":"How fast chords change in a piece"},
        {"Chinese":"装饰音","English":"Ornaments","Definition":"Notes added to give more interest to a melody (to make it fancier)"},
        {"Chinese":"功能","English":"Function","Definition":"How a chord works in the context of others, how it resolves, etc."},
        {"Chinese":"","English":"Period","Definition":"A set of two phrases, one ending in a HC and the second ending in a AC"},
        {"Chinese":"","English":"Parallel Period","Definition":"A period in which both phrases start with the same material"},
        {"Chinese":"","English":"Contrasting Period","Definition":"A period in which both phrases start with different material"},
        {"Chinese":"","English":"Motive/Motif","Definition":"A musical idea, a short piece of a theme"},
        {"Chinese":"","English":"Leitmotif","Definition":"The practice of assigning themes and melodies to specific characters"},
        {"Chinese":"","English":"Melodic Inversion","Definition":"To flip a melody vertically, to play it upside down"},
        {"Chinese":"","English":"Melodic Retrograde","Definition":"To flip a melody horizontally, to play it backwards"},
        {"Chinese":"","English":"Fragmentation","Definition":"Taking small pieces of a melody and using it to write others"},
        {"Chinese":"","English":"Imitation","Definition":"The act of mimicking melodies in the same composition"},
        {"Chinese":"前奏","English":"Introduction","Definition":"The section of music at the beginning of a song"},
        {"Chinese":"段落/主歌","English":"Verse","Definition":"A section of music where the melody is the same but the words change"},
        {"Chinese":"副歌","English":"Refrain","Definition":"A repeated section, with the same words"},
        {"Chinese":"桥段","English":"Bridge","Definition":"This section usually only happens once, and contains different musical material"},
        {"Chinese":"间奏","English":"Interlude","Definition":"An instrumental section between verses or sections of music"},
        {"Chinese":"结尾","English":"Coda","Definition":"The section of music at the very end of a song, usually summarizes melodies heard"},
        {"Chinese":"","English":"Chorale","Definition":"A hymn style texture, homophonic"},
        {"Chinese":"","English":"Hymn","Definition":"A strophic song, typically sung in a church"},
        {"Chinese":"","English":"Strophic","Definition":"Repeated music with different words; verses. (e.g. hymn)"},
        {"Chinese":"","English":"Sonata Allegro","Definition":"A 3-part form popularized in the Classical era: exposition, development, recapitulation"},
        {"Chinese":"","English":"Rondo","Definition":"A song form that returns to the A section many times"},
        {"Chinese":"","English":"Tonal","Definition":"Describing a melody or piece of music that has a specific tonal center or key"},
        {"Chinese":"","English":"Atonal","Definition":"Describing a melody or piece of music that does not have a specific tonal center or key"},
        {"Chinese":"","English":"Serialism","Definition":"The art of composing music with numbers"},
        {"Chinese":"","English":"Tone Row","Definition":"A single row of a 12-tone melody in which no note is repeated twice"},
        {"Chinese":"","English":"12-tone Matrix","Definition":"A square system of organizing tone rows"},
        {"Chinese":"","English":"Fugue","Definition":"A complex form of music, popularized in the 1700s that uses imitative counterpoint"},
        {"Chinese":"","English":"Figured Bass","Definition":"The practice of only writing the bass note and inversion symbols "},
        {"Chinese":"","English":"Basso Continuo","Definition":"During the Baroque era, the group of musicians providing harmony"},
        {"Chinese":"","English":"Chord Tones","Definition":"1根音, 3音, 5音, 7音"},
        {"Chinese":"","English":"Color Tones","Definition":"9音, 11音, 13音"},
        {"Chinese":"","English":"Upper Structure","Definition":"Dealing with the color tones of chords"},
        {"Chinese":"","English":"Tertian Theory","Definition":"The idea that chords can be expanded by adding thirds"},
        {"Chinese":"","English":"Rootless Voicings","Definition":"A voicing of a chord without the root"},
        {"Chinese":"","English":"Chord Alterations","Definition":"The addition of sharps and flats to a chord’s color tones"},
        {"Chinese":"变化属和弦","English":"Altered 7th Chords","Definition":""},
        {"Chinese":"摘录","English":"Transcribe/Transcription","Definition":"To write down a melody or passage as it was performed, to dicatate"}
];


    function getVocab() {
        let vocabSelect = document.querySelector('select');
        if (vocabSelect.value == 'HSK1') {
            vocab = HSK1;
            getRandomWord()
        } else if (vocabSelect.value == 'HSK2') {
            vocab = HSK2;
            getRandomWord()
        } else if (vocabSelect.value == 'HSK3') {
            vocab = HSK3;
            getRandomWord()
        } else if (vocabSelect.value == 'HSK4') {
            vocab = HSK4;
            getRandomWord()
        } else if (vocabSelect.value == 'HSK5') {
            vocab = HSK5;
            getRandomWord()
        } else if (vocabSelect.value == 'HSK6') {
            vocab = HSK6;
            getRandomWord()
        } else if (vocabSelect.value == 'HSK789') {
            vocab = HSK789;
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
    term.innerHTML = `<h3>${vocab[theword].English}</h3>`;
    pinyin.innerHTML = `<h3>${vocab[theword].Chinese}</h3>`;
    english.innerHTML = `<h3>${vocab[theword].Definition}</h3>`;
    term.style.visibility='hidden';
    pinyin.style.visibility='hidden';
    pinyinButton.style.display = 'block'; 
    definitionButton.style.display='none';
    nextButton.style.display='none';
}

pinyinButton.addEventListener('click', () => {
    pinyin.style.visibility = 'visible';
    pinyinButton.style.display='none'
    definitionButton.style.display='block';
})
 
definitionButton.addEventListener('click', () => {
    term.style.visibility = 'visible';
    definitionButton.style.display='none'
    nextButton.style.display='block';
})

nextButton.addEventListener('click', () => {
    pinyin.style.visibility = 'hidden';
    english.style.visibility = 'hidden';
    nextButton.style.display='none';
    pinyinButton.style.display = 'block';  
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