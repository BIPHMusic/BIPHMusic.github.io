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
{"Term":"Perfect Octave","Definition":"Twelve half steps between the pitches, space of 8 notes"},
{"Term":"Harmony","Definition":"The general concept that describes the way notes sound together"},
{"Term":"Intonation","Definition":"The act of being in tune"},
{"Term":"Dissonance","Definition":"A sound of clashing produced by conflicting notes"},
{"Term":"Consonance","Definition":"The opposite of dissonance, pleasant sounds"},
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
{"Term":"First Inversion","Definition":"A chord with the 3rd on the bottom, abbr. 6"},
{"Term":"Second Inversion","Definition":"A chord with the 5th on the bottom, abbr. 64"},
{"Term":"Seventh Chord","Definition":"a four note chord: 1,3,5,7"},
{"Term":"Major 7","Definition":"1 M3 P5 M7"},
{"Term":"Dominant 7","Definition":"1 M3 P5 m7"},
{"Term":"Minor 7","Definition":"1 m3 P5 m7"},
{"Term":"Half-Diminished 7","Definition":"1 m3 d5 m7"},
{"Term":"Diminished 7","Definition":"1 m3 d5 d7"},
{"Term":"Open Voicing","Definition":"A voicing in which there are unused notes"},
{"Term":"Close Voicing","Definition":"A voicing in which neighboring voices use the next available chord tone"},
{"Term":"Keyboard Voicing","Definition":"Only one note is used in the bass, and the treble clef uses close voicing"},
{"Term":"Compound Interval","Definition":"An interval that is larger than an octave, (reduce it by subtracting 7)"},
{"Term":"Soprano","Definition":"The upper female voice"},
{"Term":"Alto","Definition":"The lower female voice"},
{"Term":"Tenor","Definition":"The upper male voice"},
{"Term":"Bass","Definition":"The lower male voice"},
{"Term":"Articulation","Definition":"The way a note is played (i.e. smoothly, sharply, lightly, etc.)"},
{"Term":"Staccato","Definition":"To be played short and separated, lightly"},
{"Term":"Legato","Definition":"To be played smoothly and flowingly, no breaks or articulations"},
{"Term":"Accent / Bell Tone","Definition":"A marking placed above or below a note head to indicate a loud start"},
{"Term":"Marcato ","Definition":"To be played short and separated, but with emphasis"},
{"Term":"Tenuto","Definition":"To be played at the full length of the full value of the note, stressed"},
{"Term":"Sforzando","Definition":"To articulate a note with a strong beginning and immediately drop to quiet"},
{"Term":"Maestoso","Definition":"To be played majestically, by accenting every note"},
{"Term":"Slur","Definition":"A curved line between two different pitches, indicating that they should be played legato"},
{"Term":"Tie","Definition":"A curved line between two notes of the same pitch, adding their lengths together"},
{"Term":"Glissando","Definition":"To quickly slide from a low note to a high note, or vice versa"},
{"Term":"Rubato","Definition":"To be played with free tempo"},
{"Term":"Ritardano","Definition":"To gradually decrease in speed"},
{"Term":"Accelerando","Definition":"To gradually increase in speed"},
{"Term":"A Tempo","Definition":"To return to the original tempo (after rit/accel)"},
{"Term":"Chromatic","Definition":"Moving by half steps (leaving the key)"},
{"Term":"Arpeggio","Definition":"Playing a chord one note at a time instead of all at once"},
{"Term":"Function","Definition":"The specific role (job) that a chord plays "},
{"Term":"Ascend","Definition":"To go up"},
{"Term":"Descend","Definition":"To go down"},
{"Term":"Motive","Definition":"A short melody but important to the song as a whole"},
{"Term":"Hemiola","Definition":"A temporary rhythmic juxtaposition of 3 and 2"},
{"Term":"Cross Rhythm","Definition":"A consistent overlapping of different rhythms / meters"},
{"Term":"Solo","Definition":"A performance by a single musician"},
{"Term":"Duet","Definition":"Two musicians performing together"},
{"Term":"Trio","Definition":"Three Musicians performing together"},
{"Term":"Sequence","Definition":"A repetition of a musical phrase at a higher or lower pitch point"},
{"Term":"Real Sequence","Definition":"A sequence that keeps the exact intervalic relationships in tact, usually outside of the key"},
{"Term":"Tonal Sequence","Definition":"A sequence that stays in the same key, a diatonic sequence"},
{"Term":"Cadence","Definition":"A resting point at the end of a musical phrase"},
{"Term":"Authentic Cadence","Definition":"A cadence from the dominant (V) to tonic (I or i)"},
{"Term":"Perfect Authentic Cadence","Definition":"An authentic cadence w/ both chords in root position, soprano ends on tonic"},
{"Term":"Imperfect Authentic Cadence","Definition":"An Authentic cadence w/ inversions or non-tonic in the soprano voice"},
{"Term":"Plagal Cadence","Definition":"A cadence from the subdominant (IV) to tonic (I)"},
{"Term":"Deceptive Cadence","Definition":"A cadence from V to vi (major) or V to VI (minor)"},
{"Term":"Half Cadence","Definition":"A cadence that ends on the dominant"},
{"Term":"Phrygian Half Cadence","Definition":"A half cadence that descends from a iv6 to a V"},
{"Term":"Minor Plagal Cadence","Definition":"Cadence from iv to I "},
{"Term":"Arpeggiating 64","Definition":"Harmony stays the same, but the bass changes"},
{"Term":"Cadential 64","Definition":"I64, V, I"},
{"Term":"Passing 64","Definition":"A 64 that is passed through to another harmony"},
{"Term":"Pedal 64","Definition":"A 64 that results from using a pedal point (pedal tone)"},
{"Term":"Chord Tone","Definition":"A note that belongs to the current harmony"},
{"Term":"Non-Chord Tone","Definition":"a tone in a particular harmony that does not belong to that chord"},
{"Term":"Passing Tone","Definition":"an NCT that bridges two notes of differing harmony"},
{"Term":"Neighbor Tone","Definition":"an NCT that goes immediately next to a CT and returns"},
{"Term":"Escape Tone","Definition":"an NCT that steps in the opposite direction of its destination note, and then skips to it"},
{"Term":"Appoggiatura","Definition":"an NCT that skips above its intended destination note, and then steps down to it"},
{"Term":"Anticipation","Definition":"an NCT that belongs to the second harmony rather than that of the first"},
{"Term":"Suspension","Definition":"an NCT that holds over from a previous harmony and then resolves down"},
{"Term":"Retardation","Definition":"an NCT that holds over from a previous harmony and then resolves up"},
{"Term":"Pedal Point","Definition":"an NCT that holds underneath or above several different harmonies"},
{"Term":"Syncope","Definition":"A systematic rhythmic anticipation of the following harmony"},
{"Term":"Changing Tones","Definition":"Also called “neighbor group” or “cambiata” two notes on either side of the following CT"},
{"Term":"Picardy Third","Definition":"A resolution at the end of a minor song that finishes on a major I"},
{"Term":"Alberti Bass","Definition":"The practice of arpeggiating the chords under the main melody"},
{"Term":"Texture","Definition":"The way in which musical content is presented"},
{"Term":"Monophonic","Definition":"A musical texture consisting of a single melody, if multiple voices, sung in unison"},
{"Term":"Homophonic","Definition":"A musical texture consisting of a main melody and harmony of lesser importance"},
{"Term":"Polyphonic","Definition":"A musical texture using multiple melodies, each with semi-equal importance"},
{"Term":"Heterophonic","Definition":"A musical texture of a melody that is doubled but with slight variations"},
{"Term":"Countermelody","Definition":"A secondary melody that accompanies the main one"},
{"Term":"Canon","Definition":"A polyphonic texture created by playing/singing the same melody at different times"},
{"Term":"Walking Bass","Definition":"A bassline that ascends and descends, scalularly"},
{"Term":"Secondary Dominant","Definition":"A five (V) of some diatonic chord, leads to new keys"},
{"Term":"Secondary Leading Tone","Definition":"A seven (vii) of some diatonic chord, leads to new keys"},
{"Term":"Melismatic","Definition":"To sing one syllable with many notes"},
{"Term":"Syllabic","Definition":"To sing one note per syllable"},
{"Term":"Motion","Definition":"The movement of notes in relation to each other"},
{"Term":"Similar Motion","Definition":"The two voices move in the same direction, but not by the same intervals"},
{"Term":"Contrary Motion","Definition":"The two voices move in the opposite direction of one another"},
{"Term":"Parallel Motion","Definition":"The two voices move in the same direction by the same interval"},
{"Term":"Oblique Motion","Definition":"One voice remains the same and the other moves, in either direction"},
{"Term":"Static Motion","Definition":"Both voices repeat their same note, no movement"},
{"Term":"Conjunct Motion","Definition":"Smooth voice leading, usually by step"},
{"Term":"Disjunct Motion","Definition":"Voice leading characterized by large leaps"},
{"Term":"Part Writing","Definition":"Realizing a melody / harmony in four voices"},
{"Term":"Parallel 5ths/8ves","Definition":"When two voices, an octave or 5th apart move in the same direction by the same interval"},
{"Term":"Direct/Hidden 5ths","Definition":"When the soprano skips up/down and the bass moves in similar motion to a 5th or 8ve"},
{"Term":"Crossed Voices","Definition":"When any lower voice has a note higher than the upper voice, or vice versa"},
{"Term":"Overlapping Voices","Definition":"When any lower voice has a note higher than the previously sung note of the upper voice, “ ”"},
{"Term":"Voice Leading","Definition":"The concept that some chord tones need to resolve in specific ways"},
{"Term":"Active / Tendency Tones","Definition":"Notes that tend to pull in a specific direction"},
{"Term":"Resolution","Definition":"The specific direction that active tones should move, how they resolve"},
{"Term":"Modes","Definition":"Scales that start from degrees other than Do (Re to Re, Mi to Mi, etc.)"},
{"Term":"Ionian","Definition":"Major Scale"},
{"Term":"Dorian","Definition":"Minor Scale w/ Natural 6"},
{"Term":"Phrygian","Definition":"Minor Scale w/ Flat 2"},
{"Term":"Lydian","Definition":"Major Scale w/ Sharp 4"},
{"Term":"Mixolydian","Definition":"Major Scale w/ Flat 7"},
{"Term":"Aeolian","Definition":"Natural Minor Scale"},
{"Term":"Locrian","Definition":"Minor Scale w/ Flat 2 & 5"},
{"Term":"Outer Voices","Definition":"Bass and Soprano voices"},
{"Term":"Inner Voices","Definition":"Alto and Tenor voices"},
{"Term":"Augmented 6 chord","Definition":"A chord that precedes the V chord by half steps from the inside"},
{"Term":"Italian Aug 6","Definition":"An Augmented 6 chord with degrees 1,3, and 7"},
{"Term":"German Aug 6","Definition":"An Augmented 6 chord with degrees 1,3,5, and 7"},
{"Term":"French Aug 6","Definition":"An Augmented 6 chord with degrees 1,3,#4, and 7"},
{"Term":"Neapolitan 6 Chord","Definition":"A major chord built off of the flat 2, usually in first inversion"},
{"Term":"Key Change","Definition":"When the root key of a particular piece shifts to another center"},
{"Term":"Tonicize","Definition":"To temporarily use a new key center in a musical passage"},
{"Term":"Transpose","Definition":"To move all the notes of a song up or down"},
{"Term":"Modulate","Definition":"To slowly change from one key to another, the process of changing keys"},
{"Term":"Direct Modulation","Definition":"To move immediately from one key into another with no transition"},
{"Term":"Parallel Modulation","Definition":"To keep the same tonic but change from major to minor, or vice versa"},
{"Term":"Rhythmic Diminution","Definition":"Shortening the lengths of all notes in a phrase (doubling the speed)"},
{"Term":"Rhythmic Augmentation","Definition":"Lengthening the lengths of all notes in a phrase (slows the speed x2)"},
{"Term":"Harmonic Rhythm","Definition":"How fast chords change in a piece"},
{"Term":"Ornaments","Definition":"Notes added to give more interest to a melody (to make it fancier)"},
{"Term":"Function","Definition":"How a chord works in the context of others, how it resolves, etc."},
{"Term":"Period","Definition":"A set of two phrases, one ending in a HC and the second ending in a AC"},
{"Term":"Parallel Period","Definition":"A period in which both phrases start with the same material"},
{"Term":"Contrasting Period","Definition":"A period in which both phrases start with different material"},
{"Term":"Motive/Motif","Definition":"A musical idea, a short piece of a theme"},
{"Term":"Leitmotif","Definition":"The practice of assigning themes and melodies to specific characters"},
{"Term":"Melodic Inversion","Definition":"To flip a melody vertically, to play it upside down"},
{"Term":"Melodic Retrograde","Definition":"To flip a melody horizontally, to play it backwards"},
{"Term":"Fragmentation","Definition":"Taking small pieces of a melody and using it to write others"},
{"Term":"Imitation","Definition":"The act of mimicking melodies in the same composition"},
{"Term":"Introduction","Definition":"The section of music at the beginning of a song"},
{"Term":"Verse","Definition":"A section of music where the melody is the same but the words change"},
{"Term":"Refrain","Definition":"A repeated section, with the same words"},
{"Term":"Bridge","Definition":"This section usually only happens once, and contains different musical material"},
{"Term":"Interlude","Definition":"An instrumental section between verses or sections of music"},
{"Term":"Coda","Definition":"The section of music at the very end of a song, usually summarizes melodies heard"},
{"Term":"Chorale","Definition":"A hymn style texture, homophonic"},
{"Term":"Hymn","Definition":"A strophic song, typically sung in a church"},
{"Term":"Strophic","Definition":"Repeated music with different words; verses. (e.g. hymn)"},
{"Term":"Sonata Allegro","Definition":"A 3-part form popularized in the Classical era: exposition, development, recapitulation"},
{"Term":"Rondo","Definition":"A song form that returns to the A section many times"},
{"Term":"Tonal","Definition":"Describing a melody or piece of music that has a specific tonal center or key"},
{"Term":"Atonal","Definition":"Describing a melody or piece of music that does not have a specific tonal center or key"},
{"Term":"Serialism","Definition":"The art of composing music with numbers"},
{"Term":"Tone Row","Definition":"A single row of a 12-tone melody in which no note is repeated twice"},
{"Term":"12-tone Matrix","Definition":"A square system of organizing tone rows"},
{"Term":"Fugue","Definition":"A complex form of music, popularized in the 1700s that uses imitative counterpoint"},
{"Term":"Figured Bass","Definition":"The practice of only writing the bass note and inversion symbols "},
{"Term":"Basso Continuo","Definition":"During the Baroque era, the group of musicians providing harmony"},
{"Term":"Chord Tones","Definition":"1根音, 3音, 5音, 7音"},
{"Term":"Color Tones","Definition":"9音, 11音, 13音"},
{"Term":"Upper Structure","Definition":"Dealing with the color tones of chords"},
{"Term":"Tertian Theory","Definition":"The idea that chords can be expanded by adding thirds"},
{"Term":"Rootless Voicings","Definition":"A voicing of a chord without the root"},
{"Term":"Chord Alterations","Definition":"The addition of sharps and flats to a chord’s color tones"},
{"Term":"Altered 7th Chords","Definition":"Dominant 7th chords with changes made to the chord’s extensions / color tones"},
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
{"Term":"First Inversion","Definition":"A chord with the 3rd on the bottom, abbr. 6"},
{"Term":"Second Inversion","Definition":"A chord with the 5th on the bottom, abbr. 64"},
{"Term":"Seventh Chord","Definition":"a four note chord: 1,3,5,7"},
{"Term":"Major 7","Definition":"1 M3 P5 M7"},
{"Term":"Dominant 7","Definition":"1 M3 P5 m7"},
{"Term":"Minor 7","Definition":"1 m3 P5 m7"},
{"Term":"Half-Diminished 7","Definition":"1 m3 d5 m7"},
{"Term":"Diminished 7","Definition":"1 m3 d5 d7"},
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