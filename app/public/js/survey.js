console.log("is this thing on?");
$(function () {
    const validateForm = function() {
        let invalid = true;  
        $('.input').each(function(){
            if(!$(this).val()) {
                invalid = false;
            }
        });

        $('.custom-select').each(function(i, element) {
            if(!$(this).val()) {
                invalid = false;
            }
        });
        console.log(invalid);
        return invalid;
    }

    const displayModal = function(data) {
        $('match-name').text(data.name);
        $('match-image').attr('src', data.photo);
        $('#results-modal').toggle;
    }

    const submit = function(e) {
        e.preventDefault();

        if(validateForm) {
            const userData = {
                name: $('name').val().trim(),
                photo: $('#photo').val().trim(),
                scores: [
                    $('#q1').val,
                    $('#q2').val,
                    $('#q3').val,
                    $('#q4').val,
                    $('#q5').val,
                    $('#q6').val,
                    $('#q7').val,
                    $('#q8').val,
                    $('#q9').val,
                    $('#q10').val                    
                ]
            };
            $.post('/api/employees', userData, displayModal);    
        }else {
            $('#error')
            .text('Please fill out all fields before submitting')
            .addClass('alert alert-danger');

        }
    }
    $('#submit').on('click', validateForm, displayModal);
});
    //hides error message on page load
    const hideError = function (){
        $(document).ready(function() {
            $('#error').hide();
        });
    }

hideError()
