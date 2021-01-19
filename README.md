# SeqCalc

![SeqCalc Max4Live Device](SeqCalc_beta-v1.png)

## Set-Theory oriented Max4Live sequencer / calculator

First off, this device would not be possible without [Scribbletune](https://scribbletune.com) and [Tonal](https://github.com/tonaljs). Please check the links to learn the latest about these fantastic projects. As time permits, SeqCalc will be updated to leverage incorporate enhancements as deemed suitable.

The idea behind SeqCalc is to use [pitch-class (PC) sets](https://en.wikipedia.org/wiki/Set_(music)) to help generate melodic sequences in the context of Ableton Live -- tested using Live Suite v10 on MacOS. SeqCalc also leverages Scribbletune syntax with buttons than can be MIDI-mapped to any MIDI controller device (i.e., Launchpad) for intended to be used in live settings.

To load the SeqCalc Max device, simply copy the following files to a directory visible within Ableton Live "places" and then load to a dedicated track like you would with any M4L device:

```seqcalc_beta-v1.amxd```
```scribble1.js```
```seqcalc_beta-v1.amxd```
```settheory.js```

A typical session might look something like the following once it's been loaded:

![SeqCalc Max4Live Loaded Device](SeqCalc_beta-v1-loaded.png)

Depending on the chosen mode, once a PC Set (or scale) and [pattern](https://scribbletune.com/documentation/core/clip#pattern) is entered for a selected Ableton clip, click the "Send" button to generate a new clip based on the current settings.  

TO-DO:
- Better documentation and descriptions of features and how to use them - for now, load the device and experiment. Feel free to contribute !
- Overview/demo videos - for now, see this clip to get an idea of how it works...
- Ability to load PC Sets based on Forte Numbers
- Presets?

### Set Theory Background/Info:
- https://en.wikipedia.org/wiki/Set_(music)
- https://en.wikipedia.org/wiki/List_of_pitch-class_sets


### Recompilation Notes:
- https://scribbletune.com/documentation/max
- https://github.com/tonaljs/tonal
- Once all Node.js requirements and Scribbletune dependencies are met, simply run the following to create the needed "scribble1.js" file:
```npx webpack```
