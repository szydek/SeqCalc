// Simple PC Set translator -- i.e., translates [0,2,7] to [C,D,G]
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
	post("received list " + a + "\n");
	myval = a;
	bang();
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	
	// define pitch positions
	var scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	var validpcs = /[0-9a-b]/g;
	var normpitches = "";
	var normnotes = "";
	
	numpitches = scale.length;
	
	// post("received test message " + a + "\n"); // debugging
	rootnote = a[0].toLowerCase();
	rootoct = a[1];
	numocts = a[2];
	pcset = a[3].toString();
	
    post("INPUT - root: " + rootnote + " oct: " + rootoct + " num oct: " + numocts + " pcset: " + pcset + " " + pcset.length + "\n");
	
	// find root pitch position offset
    for (var i = 0; i < scale.length; i++) { 
	     if (scale[i].toLowerCase() == rootnote){
		     offset = i; //convert hex values and calculate offset
		 }
	}
	// post ("Offset: " + offset);
	
	for (var o = 0; o < numocts; o++) {
	    for (var i = 0; i < pcset.length; i++) { 
	       pitch = pcset[i].toLowerCase();
		   pitch = pitch.toString();
		   // post("check pitch:" + pitch)
	       if ( pitch.match(/[0-9a-b]/g)){
	          if (pitch == "a"){
		         pitch = 10;
		      }
		
	          if (pitch == "b"){
		         pitch = 11;
		      }
		 
		      pitch = parseInt(pitch);
		      pitch += offset; // use offset to help "justify" pitches to 0-11
		
		      if (pitch > 11){
			     pitch = pitch - 12; // use 12 as total num of pitches
		      }
		
		      // post ("Pitch: " + pitch ); // debug out
		      normpitches = normpitches.concat(scale[pitch] + rootoct + "_");
	       } 
         }
         rootoct = rootoct + 1;
	}
    normpitches = normpitches.substring(0, normpitches.length - 1);
    post ("norm: " + normpitches);	
    myval = normpitches;
	bang();
}