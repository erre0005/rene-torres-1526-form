//get the reference to full name using id
let fn = document.getElementById(`fname`);
//get the reference to email using id
let em = document.getElementById(`email`);
//get the reference to message using id
let mes = document.getElementById(`message`);
//get the refference to button using id
let btn = document.getElementById(`validate-form`);
//createevent handler that will take care of the action following button-click
function formValidator() {
        //create object that will save user's input (empty value)
        let feedback = [];
        //create an array that will save error messages (empty)
        let errors = [];
        //check if full name has a value
        if (fn.value !== ``){
             //if it does, save it
            feedback.fname = fn.value; 
        }else {
             //if it doesn't, crete the error message and save it
            errors.push(`<p>Invalid Full Name</p>`);
        }
              
        //for email
        if (em.value !== ``){
            feedback.email = em.value;
            //expression.test(String('my-email@test.com').toLowerCase());  
        }else {
            errors.push(`<p>Invalid Email</p>`);
        }

        //for message
       if (mes.value !== ``){
           feedback.message = mes.value;
       }else {
           errors.push(`<p>Write a comment</p>`)
       }
        
        //create either feedback or display all errors
       if (errors.length === 0) {
        console.log(feedback);
       }else {
           console.log(errors);
       }
        //close event handler
}
//register the button for click event
btn.addEventListener(`click`, formValidator);