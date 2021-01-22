// Simple PC Set translator -- i.e., translates Forte 3-1 to [0,1,2] to [C,C#,D]
var myval=0;
var forte_json = '{ "sets":[' +
'{"fn":"3-1","pf":"0,1,2","iv":"210000" },' +
'{"fn":"3-2","pf":"0,1,3","iv":"111000" },' +
'{"fn":"3-3","pf":"0,1,4","iv":"101100" },' +
'{"fn":"3-4","pf":"0,1,5","iv":"100110" },' +
'{"fn":"3-5","pf":"0,1,6","iv":"100011" },' +
'{"fn":"3-6","pf":"0,2,4","iv":"020100" },' +
'{"fn":"3-7","pf":"0,2,5","iv":"011010" },' +
'{"fn":"3-8","pf":"0,2,6","iv":"010101" },' +
'{"fn":"3-9","pf":"0,2,7","iv":"010020" },' +
'{"fn":"3-10","pf":"0,3,6","iv":"002001" },' +
'{"fn":"3-11","pf":"0,3,7","iv":"001110" },' +
'{"fn":"3-12","pf":"0,4,8","iv":"000300" },' +
'{"fn":"4-1","pf":"0,1,2,3","iv":"321000" },' +
'{"fn":"4-2","pf":"0,1,2,4","iv":"221100" },' +
'{"fn":"4-4","pf":"0,1,2,5","iv":"211110" },' +
'{"fn":"4-5","pf":"0,1,2,6","iv":"210111" },' +
'{"fn":"4-6","pf":"0,1,2,7","iv":"210021" },' +
'{"fn":"4-3","pf":"0,1,3,4","iv":"212100" },' +
'{"fn":"4-11","pf":"0,1,3,5","iv":"121110" },' +
'{"fn":"4-13","pf":"0,1,3,6","iv":"112011" },' +
'{"fn":"4-Z29","pf":"0,1,3,7","iv":"111111" },' +
'{"fn":"4-7","pf":"0,1,4,5","iv":"201210" },' +
'{"fn":"4-Z15","pf":"0,1,4,6","iv":"111111" },' +
'{"fn":"4-18","pf":"0,1,4,7","iv":"102111" },' +
'{"fn":"4-19","pf":"0,1,4,8","iv":"101310" },' +
'{"fn":"4-8","pf":"0,1,5,6","iv":"200121" },' +
'{"fn":"4-16","pf":"0,1,5,7","iv":"110121" },' +
'{"fn":"4-20","pf":"0,1,5,8","iv":"101220" },' +
'{"fn":"4-9","pf":"0,1,6,7","iv":"200022" },' +
'{"fn":"4-10","pf":"0,2,3,5","iv":"122010" },' +
'{"fn":"4-12","pf":"0,2,3,6","iv":"112101" },' +
'{"fn":"4-14","pf":"0,2,3,7","iv":"111120" },' +
'{"fn":"4-21","pf":"0,2,4,6","iv":"030201" },' +
'{"fn":"4-22","pf":"0,2,4,7","iv":"021120" },' +
'{"fn":"4-24","pf":"0,2,4,8","iv":"020301" },' +
'{"fn":"4-23","pf":"0,2,5,7","iv":"021030" },' +
'{"fn":"4-27","pf":"0,2,5,8","iv":"012111" },' +
'{"fn":"4-25","pf":"0,2,6,8","iv":"020202" },' +
'{"fn":"4-17","pf":"0,3,4,7","iv":"102210" },' +
'{"fn":"4-26","pf":"0,3,5,8","iv":"012120" },' +
'{"fn":"4-28","pf":"0,3,6,9","iv":"004002" },' +
'{"fn":"5-1","pf":"0,1,2,3,4","iv":"432100" },' +
'{"fn":"5-2","pf":"0,1,2,3,5","iv":"332110" },' +
'{"fn":"5-4","pf":"0,1,2,3,6","iv":"322111" },' +
'{"fn":"5-5","pf":"0,1,2,3,7","iv":"321121" },' +
'{"fn":"5-3","pf":"0,1,2,4,5","iv":"322210" },' +
'{"fn":"5-9","pf":"0,1,2,4,6","iv":"231211" },' +
'{"fn":"5-Z36","pf":"0,1,2,4,7","iv":"222121" },' +
'{"fn":"5-13","pf":"0,1,2,4,8","iv":"2221311" },' +
'{"fn":"5-6","pf":"0,1,2,5,6","iv":"311221" },' +
'{"fn":"5-14","pf":"0,1,2,5,7","iv":"221131" },' +
'{"fn":"5-Z38","pf":"0,1,2,5,8","iv":"212221" },' +
'{"fn":"5-7","pf":"0,1,2,6,7","iv":"310132" },' +
'{"fn":"5-15","pf":"0,1,2,6,8","iv":"220222" },' +
'{"fn":"5-10","pf":"0,1,3,4,6","iv":"223111" },' +
'{"fn":"5-16","pf":"0,1,3,4,7","iv":"213211" },' +
'{"fn":"5-Z17","pf":"0,1,3,4,8","iv":"212320" },' +
'{"fn":"5-Z12","pf":"0,1,3,5,6","iv":"222121" },' +
'{"fn":"5-24","pf":"0,1,3,5,7","iv":"131221" },' +
'{"fn":"5-27","pf":"0,1,3,5,8","iv":"122230" },' +
'{"fn":"5-19","pf":"0,1,3,6,7","iv":"212122" },' +
'{"fn":"5-31","pf":"0,1,3,6,9","iv":"114112" },' +
'{"fn":"5-Z18","pf":"0,1,4,5,7","iv":"212221" },' +
'{"fn":"5-21","pf":"0,1,4,5,8","iv":"202420" },' +
'{"fn":"5-30","pf":"0,1,4,6,8","iv":"121321" },' +
'{"fn":"5-32","pf":"0,1,4,6,9","iv":"113221" },' +
'{"fn":"5-22","pf":"0,1,4,7,8","iv":"202321" },' +
'{"fn":"5-20","pf":"0,1,5,6,8","iv":"211231" },' +
'{"fn":"5-8","pf":"0,2,3,4,6","iv":"232201" },' +
'{"fn":"5-11","pf":"0,2,3,4,7","iv":"222220" },' +
'{"fn":"5-23","pf":"0,2,3,5,7","iv":"132130" },' +
'{"fn":"5-25","pf":"0,2,3,5,8","iv":"123121" },' +
'{"fn":"5-28","pf":"0,2,3,6,8","iv":"122212" },' +
'{"fn":"5-26","pf":"0,2,4,5,8","iv":"122311" },' +
'{"fn":"5-33","pf":"0,2,4,6,8","iv":"040402" },' +
'{"fn":"5-34","pf":"0,2,4,6,9","iv":"032221" },' +
'{"fn":"5-35","pf":"0,2,4,7,9","iv":"032140" },' +
'{"fn":"5-Z37","pf":"0,3,4,5,8","iv":"212320" },' +
'{"fn":"6-1","pf":"0,1,2,3,4,5","iv":"543210" },' +
'{"fn":"6-2","pf":"0,1,2,3,4,6","iv":"4443211" },' +
'{"fn":"6-Z36","pf":"0,1,2,3,4,7","iv":"433221" },' +
'{"fn":"6-Z37","pf":"0,1,2,3,4,8","iv":"432321" },' +
'{"fn":"6-9","pf":"0,1,2,3,5,7","iv":"342231" },' +
'{"fn":"6-Z40","pf":"0,1,2,3,5,8","iv":"333231" },' +
'{"fn":"6-5","pf":"0,1,2,3,6,7","iv":"422232" },' +
'{"fn":"6-Z41","pf":"0,1,2,3,6,8","iv":"332232" },' +
'{"fn":"6-Z42","pf":"0,1,2,3,6,9","iv":"324222" },' +
'{"fn":"6-Z38","pf":"0,1,2,3,7,8","iv":"421242" },' +
'{"fn":"6-15","pf":"0,1,2,4,5,8","iv":"323421" },' +
'{"fn":"6-22","pf":"0,1,2,4,6,8","iv":"241422" },' +
'{"fn":"6-Z46","pf":"0,1,2,4,6,9","iv":"233331" },' +
'{"fn":"6-Z17","pf":"0,1,2,4,7,8","iv":"322332" },' +
'{"fn":"6-Z47","pf":"0,1,2,4,7,9","iv":"233241" },' +
'{"fn":"6-Z44","pf":"0,1,2,5,6,9","iv":"313431" },' +
'{"fn":"6-18","pf":"0,1,2,5,7,8","iv":"322242" },' +
'{"fn":"6-Z48","pf":"0,1,2,5,7,9","iv":"232341" },' +
'{"fn":"6-7","pf":"0,1,2,6,7,8","iv":"420243" },' +
'{"fn":"6-Z10","pf":"0,1,3,4,5,7","iv":"333321" },' +
'{"fn":"6-14","pf":"0,1,3,4,5,8","iv":"323430" },' +
'{"fn":"6-27","pf":"0,1,3,4,6,9","iv":"225222" },' +
'{"fn":"6-Z49","pf":"0,1,3,4,7,9","iv":"224322" },' +
'{"fn":"6-34","pf":"0,1,3,5,7,9","iv":"142422" },' +
'{"fn":"6-30","pf":"0,1,3,6,7,9","iv":"224223" },' +
'{"fn":"6-Z29","pf":"0,2,3,6,7,9","iv":"224232" },' +
'{"fn":"6-16","pf":"0,1,4,5,6,8","iv":"322431" },' +
'{"fn":" 6","pf":"223431","iv":"6-31" },' +
'{"fn":"6-20","pf":"0,1,4,5,8,9","iv":"303630" },' +
'{"fn":"6-8","pf":"0,2,3,4,5,7","iv":"343230" },' +
'{"fn":"6-21","pf":"0,2,3,4,6,8","iv":"242412" },' +
'{"fn":"6-Z45","pf":"0,2,3,4,6,9","iv":"234222" },' +
'{"fn":"6-33","pf":"0,2,3,5,7,9","iv":"143241" },' +
'{"fn":"6-32","pf":"0,2,4,5,7,9","iv":"143250" },' +
'{"fn":"6-35","pf":"0,2,4,6,8T","iv":"060603" },' +
'{"fn":"6-Z3","pf":"0,1,2,3,5,6","iv":"433221" },' +
'{"fn":"6-Z4","pf":"0,1,2,4,5,6","iv":"432321" },' +
'{"fn":"6-Z11","pf":"0,1,2,4,5,7","iv":"333231" },' +
'{"fn":"6-Z12","pf":"0,1,2,4,5,7","iv":"332232" },' +
'{"fn":"6-Z13","pf":"0,1,3,4,6,7","iv":"324222" },' +
'{"fn":"6-Z6","pf":"0,1,2,5,6,7","iv":"421242" },' +
'{"fn":"6-Z24","pf":"0,1,3,4,6,8","iv":"233331" },' +
'{"fn":"6-Z43","pf":"0,1,2,5,6,8","iv":"233331" },' +
'{"fn":"6-Z25","pf":"0,1,3,5,6,8","iv":"233241" },' +
'{"fn":"6-Z19","pf":"0,1,3,4,7,8","iv":"313431" },' +
'{"fn":"6-Z26","pf":"0,1,3,5,7,8","iv":"232341" },' +
'{"fn":"6-Z39","pf":"0,2,3,4,5,8","iv":"333321" },' +
'{"fn":"6-Z28","pf":"0,1,3,5,6,9","iv":"224322" },' +
'{"fn":"6-Z50","pf":"0,1,4,6,7,9","iv":"224232" },' +
'{"fn":"6-Z23","pf":"0,2,3,5,6,8","iv":"234222" },' +
'{"fn":"7-1","pf":"0,1,2,3,4,5,6","iv":"654321" },' +
'{"fn":"7-2","pf":"0,1,2,3,4,5,7","iv":"554331" },' +
'{"fn":"7-4","pf":"0,1,2,3,4,6,7","iv":"544332" },' +
'{"fn":"7-5","pf":"0,1,2,3,5,6,7","iv":"543342" },' +
'{"fn":"7-3","pf":"0,1,2,3,4,5,8","iv":"544431" },' +
'{"fn":"7-9","pf":"0,1,2,3,4,6,8","iv":"453432" },' +
'{"fn":"7-Z36","pf":"0,1,2,3,5,6,8","iv":"444342" },' +
'{"fn":"7-13","pf":"0,1,2,4,5,6,8","iv":"443532" },' +
'{"fn":"7-6","pf":"0,1,2,3,4,7,8","iv":"533442" },' +
'{"fn":"7-14","pf":"0,1,2,3,5,7,8","iv":"443352" },' +
'{"fn":"7-Z38","pf":"0,1,2,4,5,7,8","iv":"434442" },' +
'{"fn":"7-7","pf":"0,1,2,3,6,7,8","iv":"532353" },' +
'{"fn":"7-15","pf":"0,1,2,4,6,7,8","iv":"442443" },' +
'{"fn":"7-10","pf":"0,1,2,3,4,6,9","iv":"445332" },' +
'{"fn":"7-16","pf":"0,1,2,3,5,6,9","iv":"435432" },' +
'{"fn":"7-Z17","pf":"0,1,2,4,5,6,9","iv":"434541" },' +
'{"fn":"7-Z12","pf":"0,1,2,3,4,7,9","iv":"444342" },' +
'{"fn":"7-24","pf":"0,1,2,3,5,7,9","iv":"353442" },' +
'{"fn":"7-27","pf":"0,1,2,4,5,7,9","iv":"344451" },' +
'{"fn":"7-19","pf":"0,1,2,3,6,7,9","iv":"434343" },' +
'{"fn":"7-31","pf":"0,1,3,4,6,7,9","iv":"336333" },' +
'{"fn":"7-Z18","pf":"0,1,4,5,6,7,9","iv":"434442" },' +
'{"fn":"7-21","pf":"0,1,2,4,5,8,9","iv":"424641" },' +
'{"fn":"7-30","pf":"0,1,2,4,6,8,9","iv":"343542" },' +
'{"fn":"7-32","pf":"0,1,3,4,6,8,9","iv":"335442" },' +
'{"fn":"7-22","pf":"0,1,2,5,6,8,9","iv":"424542" },' +
'{"fn":"7-20","pf":"0,1,2,5,6,7,9","iv":"433452" },' +
'{"fn":"7-8","pf":"0,2,3,4,5,6,8","iv":"454422" },' +
'{"fn":"7-11","pf":"0,1,3,4,5,6,8","iv":"444441" },' +
'{"fn":"7-23","pf":"0,2,3,4,5,7,9","iv":"354351" },' +
'{"fn":"7-25","pf":"0,2,3,4,6,7,9","iv":"345342" },' +
'{"fn":"7-28","pf":"0,1,3,5,6,7,9","iv":"344433" },' +
'{"fn":"7-26","pf":"0,1,3,4,5,7,9","iv":"344532" },' +
'{"fn":"7-33","pf":"0,1,2,4,6,8,10","iv":"262623" },' +
'{"fn":"7-34","pf":"0,1,3,4,6,8,10","iv":"254442" },' +
'{"fn":"7-35","pf":"0,1,3,5,6,8,10","iv":"254361" },' +
'{"fn":"7-Z37","pf":"0,1,3,4,5,7,8","iv":"434541" },' +
'{"fn":"8-1","pf":"0,1,2,3,4,5,6,7","iv":"765442" },' +
'{"fn":"8-2","pf":"0,1,2,3,4,5,6,8","iv":"665542" },' +
'{"fn":"8-4","pf":"0,1,2,3,4,5,7,8","iv":"655552" },' +
'{"fn":"8-5","pf":"0,1,2,3,4,6,7,8","iv":"654553" },' +
'{"fn":"8-6","pf":"0,1,2,3,5,6,7,8","iv":"654463" },' +
'{"fn":"8-3","pf":"0,1,2,3,4,5,6,9","iv":"656542" },' +
'{"fn":"8-11","pf":"0,1,2,3,4,5,7,9","iv":"565552" },' +
'{"fn":"8-13","pf":"0,1,2,3,4,6,7,9","iv":"556453" },' +
'{"fn":"8-Z29","pf":"0,1,2,3,5,6,7,9","iv":"555553" },' +
'{"fn":"8-7","pf":"0,1,2,3,4,5,8,9","iv":"645652" },' +
'{"fn":"8-Z15","pf":"0,1,2,3,4,6,8,9","iv":"555553" },' +
'{"fn":"8-18","pf":"0,1,2,3,5,6,8,9","iv":"546553" },' +
'{"fn":"8-19","pf":"0,1,2,4,5,6,8,9","iv":"545752" },' +
'{"fn":"8-8","pf":"0,1,2,3,4,7,8,9","iv":"644563" },' +
'{"fn":"8-16","pf":"0,1,2,3,5,7,8,9","iv":"554563" },' +
'{"fn":"8-20","pf":"0,1,2,4,5,7,8,9","iv":"545662" },' +
'{"fn":"8-9","pf":"0,1,2,3,6,7,8,9","iv":"644464" },' +
'{"fn":"8-10","pf":"0,2,3,4,5,6,7,9","iv":"566452" },' +
'{"fn":"8-12","pf":"0,1,3,4,5,6,7,9","iv":"556543" },' +
'{"fn":"8-14","pf":"0,1,2,4,5,6,7,9","iv":"555562" },' +
'{"fn":"8-21","pf":"0,1,2,3,4,6,8,10","iv":"474643" },' +
'{"fn":"8-22","pf":"0,1,2,3,5,6,8,10","iv":"465562" },' +
'{"fn":"8-24","pf":"0,1,2,4,5,6,8,10","iv":"464743" },' +
'{"fn":"8-23","pf":"0,1,2,3,5,7,8,10","iv":"465472" },' +
'{"fn":"8-27","pf":"0,1,2,4,5,7,8,10","iv":"456553" },' +
'{"fn":"8-25","pf":"0,1,2,4,6,7,8,10","iv":"464644" },' +
'{"fn":"8-17","pf":"0,1,3,4,5,6,8,9","iv":"546652" },' +
'{"fn":"8-26","pf":"0,1,3,4,5,7,8,10","iv":"456562" },' +
'{"fn":"8-28","pf":"0,1,3,4,6,7,9,10","iv":"448444" },' +
'{"fn":"9-1","pf":"0,1,2,3,4,5,6,7,8","iv":"876663" },' +
'{"fn":"9-2","pf":"0,1,2,3,4,5,6,7,9","iv":"777663" },' +
'{"fn":"9-3","pf":"0,1,2,3,4,5,6,8,9","iv":"767763" },' +
'{"fn":"9-4","pf":"0,1,2,3,4,5,7,8,9","iv":"766773" },' +
'{"fn":"9-5","pf":"0,1,2,3,4,6,7,8,9","iv":"766674" },' +
'{"fn":"9-6","pf":"0,1,2,3,4,5,6,8,10","iv":"686763" },' +
'{"fn":"9-7","pf":"0,1,2,3,4,5,7,8,10","iv":"677673" },' +
'{"fn":"9-8","pf":"0,1,2,3,4,6,7,8,10","iv":"676764" },' +
'{"fn":"9-9","pf":"0,1,2,3,5,6,7,8,10","iv":"676683" },' +
'{"fn":"9-10","pf":"0,1,2,3,4,6,7,9,10","iv":"668664" },' +
'{"fn":"9-11","pf":"0,1,2,3,5,6,7,9,10","iv":"667773" },' +
'{"fn":"9-12","pf":"0,1,2,4,5,6,8,9,10","iv":"666963" }' +
']}';

if (jsarguments.length>1)
	myval = jsarguments[1];

function bang()
{
	outlet(0,myval);
}

function list()
{
	var a = arrayfromargs(arguments);
	post("received Forte:" + a + "\n");
	myval = a;
	bang();
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	var mesg = String(a);
	forte = JSON.parse(forte_json);
	var pcset = "";
	
	// init pcset and forte code
	var fortenum = "";
	// var pcset = [""];
	// post("received Forte message:" + mesg  + /* forte.sets.length + */ "EOF\n"); // debugging
		
	for (var i = 0; i < forte.sets.length; i++){
		// post("BEG:" + String(forte.sets[i].fn) + "EOM");
		// post ("pcset: " + forte.sets[i].fn);
        if (String(forte.sets[i].fn) === mesg){
	      // pcset = "match"
	      pcset = forte.sets[i].pf;
        }
     }

    // pcset = forte.sets[1].pf;
    post ("pcset: " + pcset);	
    myval = pcset;
	bang();
}
