$(function () {

    const formSubmit = function () {
        const answers = [];
        const employeeName = $('#name').val().trim();
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
        // console.log(employeeName, photoURL,answers);
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
            if(employeeName === '' || photoURL === ''){
                complete = complete -1;
                console.log("name and/or link field incomplete")
            }
            else{
                console.log("your name and link are valid")
            }
        if(complete < 1) {
            $('#error').show();
        }
        //once input is stored and verified as complete
        else {
            $('#error').hide();

            const addEmployee = function(event) {
                // event.preventDefault();
            
                const newEmployee = {
                    name: employeeName,
                    photo: photoURL,
                    scores: answers
                };
                console.log(newEmployee);
                //CODE for finding the closest matched employee
                $.ajax({
                    method: 'GET',
                    url: '/api/employeeList',
                    })
                for(let i=0; i<employeeList; i++) {
                    let difference = 0;
                    let smallestDifference = 40;
                    let pic = '';
                    let empName = '';
                    difference = Math.abs((employeeList[i].scores[0])-(newEmployee.scores[0]));
                    difference = difference + (Math.abs((employeeList[i].scores[1])-(newEmployee.scores[1])));
                    difference = difference + (Math.abs((employeeList[i].scores[2])-(newEmployee.scores[2])));
                    difference = difference + (Math.abs((employeeList[i].scores[3])-(newEmployee.scores[3])));
                    difference = difference + (Math.abs((employeeList[i].scores[4])-(newEmployee.scores[4])));
                    difference = difference + (Math.abs((employeeList[i].scores[5])-(newEmployee.scores[5])));
                    difference = difference + (Math.abs((employeeList[i].scores[6])-(newEmployee.scores[6])));
                    difference = difference + (Math.abs((employeeList[i].scores[7])-(newEmployee.scores[7])));
                    difference = difference + (Math.abs((employeeList[i].scores[8])-(newEmployee.scores[8])));
                    difference = difference + (Math.abs((employeeList[i].scores[9])-(newEmployee.scores[9])));
                    if(difference < smallestDifference){
                        pic = employeeList[i].photo;
                        empName = employeeList[i].name;
                        smallestDifference = difference;
                    }
                    console.log(difference);
                    console.log(empName);
                    console.log(pic);
                    console.log(smallestDifference);                
                }//end for loop     
                //reset survey fields
                $('#name').val('');
                $('#photo').val(''); 
                $('#q1').val('');
                $('#q2').val('');
                $('#q3').val('');
                $('#q4').val('');
                $('#q5').val('');
                $('#q6').val('');
                $('#q7').val('');
                $('#q8').val('');
                $('#q9').val('');
                $('#q10').val('');

                $.ajax({
                method: 'POST',
                url: '/api/employeeList',
                data: newEmployee
                })
            };//end addEmployee
        addEmployee();
        };//end else 
    };//end formSubmit

    $('#submit').on('click', formSubmit);
});

//hides error message on page load
const hideError = function (){
    $(document).ready(function() {
        $('#error').hide();
    });
};

hideError();

