function formValidation (event) {

	//window.alert("hello!");
    
    var name = document.getElementsById("theName").value;
    //var age = document.getElementsById("theAge").value;
    /*
    var season = document.getElementsById('season').value;
    var time = document.getElementsById('timeOfDay').value;
    var star = document.getElementsById('star').value;
    var candidate = document.getElementsById('candidate').value;
    */
    window.alert("hello");

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