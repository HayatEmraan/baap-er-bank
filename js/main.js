document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('mailField');
    const mailValue = emailField.value;
    console.log(mailValue);
    const passwordField = document.getElementById('passwordField');
    const passwordValue = passwordField.value;
    if(mailValue === 'amrbank@gmail.com' && passwordValue === 'baaperbank'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('invalid user')
    }
})