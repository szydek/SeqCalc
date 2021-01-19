// This script simply parses, configures and outputs parameters to be passed to various 
// "calculators" in the m4l patch
var myval=0;

if (jsarguments.length>1)
	myval = jsarguments[1];

function bang()
{
	outlet(0,myval);
}

function list()
{
	var a = arrayfromargs(arguments);
	var octrange = "";
	
	var scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	var pcset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b"];
	var octset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	var rhyset = ["x","R","-","_","[","]","","","","","",""];
	var fset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"-","-"]; // To-do: Forte Set calculator
	// post("received list " + a + "\n"); // for Debugging
	
	// post("received test message " + a + "\n");
	code = a[0];
	action = a[1];

    // uncomment for debugging:
    // post("INPUT - action: " + action + " code: " + code + " calc: " +  scale[code] + "\n");
    // Case statement. Action 0 sets root note
    if (action == 0){ 
	    // myval = action + " " + scale[code]; // old approach for passing params
	    outlet(0,action, scale[code]);
        // Action 1 sets base octave
	} else if (action == 1) { 
		if (octset[code] > 10){
			octrange = 10; // limit octave base range to 10 to help avoid overflow
		} else {
			octrange = octset[code];
		}
		/// octrange = octrange -2; // To-do create offset to start at lower octave -2
		outlet(0,action, octrange); 
		// outlet(0,action, octset[code]); //  old way sent whatever range octset[code])
		
	    // Action 2 sets the range of octaves for notes in set
	} else if (action == 2) { 
		if (octset[code] > 8){
			octrange = 8; // limit octave base range to 8 to help avoid overflow
		} else {
			octrange = octset[code];
		}
		outlet(0,action, octrange); 
		//outlet(0,action, code);
		
	    // Action 3 sets PC Set integer
	} else if (action == 3) { 
		outlet(0,action, pcset[code]);
	    // Action 4 sets Scribbletune Rhythm pattern
	} else if (action == 4) { 
		outlet(0,action, rhyset[code]);
		// To-do: Forte Set calculator
	} else if (action == 5) { 
		//outlet(0,action, pcset[code]);
		outlet(0,action, fset[code]);  // Not yet implemented
	}
	// bang();
}


function anything()
{
	var a = arrayfromargs(messagename, arguments);
    myval = scale[code];
	bang();
}