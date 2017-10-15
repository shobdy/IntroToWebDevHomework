function clearErrors(){
    for(var loopCounter = 0;
        loopCounter < document.forms["evenNum"].elements.length;
        loopCounter++){
            if(document.forms["evenNum"].elements[loopCounter]
                .parentElement.className.indexOf("has-") != -1){
                    document.forms["evenNum"].elements[loopCounter]
                        .parentElement.className = "form-group";
                }
        }
}

function validateItems(){
    clearErrors();
    // Remember to declare your variables as parseInt. Otherwise they are considered strings and act flaky.
    var numStart = parseInt(document.forms["evenNum"]["numStart"].value);
    var numEnd = parseInt(document.forms["evenNum"]["numEnd"].value);
    var numStep = parseInt(document.forms["evenNum"]["numStep"].value);
    if(numStart == "" || isNaN(numStart)){
        alert("Starting Number should be filled in with a number.");
        document.forms["evenNum"]["numStart"]
            .parentElement.className = "form-group has-error";
        document.forms["evenNum"]["numStart"].focus();
        return false;
    }
    if(numEnd == "" || isNaN(numEnd)){
        alert("Ending Number should be filled in with a number.");
        document.forms["evenNum"]["numEnd"]
            .parentElement.className = "form-group has-error";
        document.forms["evenNum"]["numEnd"].focus();
        return false;
    }
    if(numEnd < numStart){
        alert("Ending number needs to be larger than " + numStart);
        document.forms["evenNum"]["numEnd"]
            .parentElement.className = "form-group has-error";
        document.forms["evenNum"]["numEnd"].focus();
        return false;
    }
    if(numStep == "" || isNaN(numStep) || numStep < 1){
        alert("Step should be filled in with a number greater than zero.");
        document.forms["evenNum"]["numStep"]
            .parentElement.className = "form-group has-error";
        document.forms["evenNum"]["numStep"].focus();
        return false;
    }
    document.getElementById("results")
        .innerText = "Here are the even numbers between " + numStart + 
        " and " + numEnd + " by " + numStep + "'s:";    
        
    for(var i = numStart; i <= numEnd; i += numStep){
        if(i % 2 == 0){
            //Notice after .innerHTML it is +=. That appends each iteration to the results element instead of overwriting.
            document.getElementById("results").innerHTML += "<br />" + i;
        }
    }
    return false;
}