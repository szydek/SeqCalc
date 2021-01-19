# SeqCalc

![SeqCalc Max4Live Device](SeqCalc_beta-v1.png)

## Set-Theory oriented Max4Live sequencer / calculator

First off, this device would not be possible without the [https://scribbletune.com](Scribbletune) and [https://github.com/tonaljs](Tonal.js). Please check out these links to learn the latest about these fantastic projects.

The idea behind SeqCalc is to use pitch-class sets to help generate melodic ideas and sequences in Ableton Live -- tested using Live Suite 10 on MacOS. It also leverages Scribbletune syntax with buttons than can be mapped to any MIDI controller device (i.e., Launchpad) for on-the-fly musical composition.

To load the SeqCalc device, simply copy the following files to a directory visible within Ableton Live "places" to thus be loaded into a dedicated track:

```seqcalc_beta-v1.amxd```
```scribble1.js```
```seqcalc_beta-v1.amxd```
```settheory.js```

A typical setup might look something like the following once it's been loaded:

![SeqCalc Max4Live Loaded Device](SeqCalc_beta-v1-loaded.png)

TO-DO:
- Better descriptions of features and how to use - for now, load it and experiment. Feel free to contribute !
- Overview/demo videos - for now, see this clip to get an idea of how it works...
- Ability to load PC Sets based on Forte Numbers

### Set Theory Background/Info:
- https://en.wikipedia.org/wiki/Set_(music)
- https://en.wikipedia.org/wiki/List_of_pitch-class_sets


### Recompilation Notes:
- https://scribbletune.com/documentation/max
- https://github.com/tonaljs/tonal
- Once all Node.js requirements and Scribbletune dependencies are met, simply run the following to create the needed "scribble1.js" file:
```npx webpack```
