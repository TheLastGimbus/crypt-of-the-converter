const {Midi} = require('@tonejs/midi')
const url = require('url');
const fs = require('fs');

const println = (s) => console.log(s);

async function main() {
    let filename = process.argv[2];

    const midi = new Midi(fs.readFileSync(filename));
    const multiplier = 1000;

    midi.tracks.forEach((track, i) => {
        println(`let track${i} = playTune(tune\``);
        track.notes.forEach((note, index) => {
            var time = 0;
            if (track.notes.length > index + 1) {
                time = track.notes[index + 1].time - note.time;
            }
            time *= multiplier;
            let duration = note.duration * multiplier;
            if (index == 0) {
                // delay so we don't start all track same time if one has delay
                println(`${note.time * multiplier},`);
            }
            println(`${time}: ${note.name}^${duration},`);
        });
        println(`\`);`);
    })

}

main()