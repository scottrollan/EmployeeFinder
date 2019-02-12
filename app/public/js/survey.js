const formSubmit = function (e) {
    e.preventDefault();
    const answers = [];
    const name = $('#name').val().trim();
    const photoURL = $('#photo').val().trim();
    var complete = 1;
    answers.push($('#q1').val());
    answers.push($('#q2').val());
    answers.push($('#q3').val());
    answers.push($('#q4').val());
    answers.push($('#q5').val());
    answers.push($('#q6').val());
    answers.push($('#q7').val());
    answers.push($('#q8').val());
    answers.push($('#q9').val());
    answers.push($('#q10').val());
    console.log(name, photoURL,answers);
    for(let i =0; i<answers.length; i++){
        let answer = answers[i];
        if(answer === null){
            console.log("invalid response");
            complete = complete - 1;
        }
        else {
            console.log(answer + " is a valid response");
        }
    }
        if(name === '' || photoURL === ''){
            complete = complete -1;
            console.log("name and/or link field incomplete")
        }
        else{
            console.log("your name and link are valid")
        }
    if(complete < 1) {
        $('#error').show();
    }
    else {
        $('#error').hide();
    }
};


//hides error message on page load
$(document).ready(function() {
    $('#error').hide();
 });
 
 $('#submit').on('click', formSubmit);