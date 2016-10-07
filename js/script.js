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
	
    var season = document.getElementById("theSeason").value;
    var time = document.getElementById("theTime").value;
    var seasonValue = parseInt(season,10);
    var timeValue = parseInt(time,10);
    

    var score = seasonValue*timeValue;
    
    
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
    else if (document.getElementById("theCandidate3").checked)
    {
        candidate = document.getElementById("theCandidate3").value;
    }
    var starValue = parseInt(star,10);
    
    var candidateValue = parseInt(candidate,10);
    
    var score2 = starValue + candidateValue;

    var finalScore = score2+score;

    if (finalScore <= 23)
    {
        alert("You are McCree!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/mccree/'", 2000);   
    }
    else if (finalScore == 25 || finalScore == 24)
    {
        alert("Your are Lucio!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/lucio/'", 2000);
    }
    else if (finalScore == 26)
    {
        alert("You are Reinhardt!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/reinhardt/'", 2000);
    }
    else if (finalScore == 27)
    {
        alert("You are Zenyatta!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/zenyatta/'", 2000);
    }
    else if (finalScore == 28)
    {
        alert("You are Zarya!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/zarya/'", 2000);
    }
    else if (finalScore == 29)
    {
        alert("You are Genji!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/genji/'", 2000);
    }
    else if (finalScore == 30)
    {
        alert("You are Pharah!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/pharah/'", 2000);
    }
    else if (finalScore == 31)
    {
        alert("You are Reaper!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/reaper/'", 2000);
    }
    else if (finalScore == 32)
    {
        alert("You are Soldier: 76!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/soldier-76/'", 2000);
    }
    else if (finalScore == 33)
    {
        alert("You are Tracer!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/tracer/'", 2000);
    }
    else if (finalScore == 34)
    {
        alert("You are Ana!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/ana/'", 2000);
    }
    else if (finalScore == 35)
    {
        alert("You are Mercy!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/mercy/'", 2000);
    }
    else if (finalScore == 36)
    {
        alert("You are Roadhog!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/roadhog/'", 2000);
    }
    else if (finalScore == 37)
    {
        alert("You are Winston!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/winston/'", 2000);
    }
    else if (finalScore == 38)
    {
        alert("You are Hanzo!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/hanzo/'", 2000);
    }
    else if (finalScore == 39)
    {
        alert("You are Mei!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/mei/'", 2000);
    }
    else if (finalScore == 40)
    {
        alert("You are Junkrat!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/junkrat/'", 2000);
    }
    else if (finalScore == 41)
    {
        alert("You are Torbjorn!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/torbjorn/'", 2000);
    }
    else if (finalScore == 42)
    {
        alert("You are Widowmaker!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/widowmaker/'", 2000);
    }
    else if (finalScore == 43)
    {
        alert("You are Symmetra!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/symmetra/'", 2000);
    }
    else if (finalScore == 44)
    {
        alert("You are D.VA!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/dva/'", 2000);
    }
    else if (finalScore >= 45)
    {
        alert("You are Bastion!");
        setTimeout("javascript:location.href='https://playoverwatch.com/en-us/heroes/bastion/'", 2000);
    }
    

    


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