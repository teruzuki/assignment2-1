function formValidation () {

	//window.alert("hello!");
    
    var name = document.getElementById("theName").value;
    var age = document.getElementById("theAge").value;

    if (name == "")
    {
    	window.alert("please put in a name!");
    	
    }
    else if (age == "")
    {
    	window.alert("Please input your age!");
    	
    }
    else 
    {
    	formAction();
    }

}

function formAction() 
{
	window.alert("hello again!");

    var season = document.getElementById("theSeason").value;
    var time = document.getElementById("theTime").value;
    

    var score = season * time;
    
    
    var star;
    if (document.getElementById("theStar1").checked)
    {
        star = document.getElementById("theStar1").value;
    }
    else if (document.getElementById("theStar2").checked)
    {
        star = document.getElementById("theStar2").value;
    }
    else if (document.getElementById("theStar3").checked)
    {
        star = document.getElementById("theStar3").value;
    }

    var candidate;
    if (document.getElementById("theCandidate1").checked)
    {
        candidate = document.getElementById("theCandidate1").value;
    }
    else if (document.getElementById("theCandidate2").checked)
    {
        candidate = document.getElementById("theCandidate2").value;
    }
    else if (document.getElementById("theCandidate").checked)
    {
        candidate = document.getElementById("theCandidate1").value;
    }
    var score2 = star * candidate;

    var finalScore = score2*score;

    alert(finalScore);
    


}

function submission() {

	var c = confirm("Ready to go?");

	if (c == true)
	{
		formValidation()
	}
	else
	{

	}

}