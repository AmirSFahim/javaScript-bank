document.getElementById('login-button').addEventListener('click',function(){
    let emailfield = document.getElementById('user-email');
    let email = emailfield.value;


    let userPassword = document.getElementById('user-pass');
    let password = userPassword.value;
    
    // not useable
    if(email === 'fahim@gmail.com' && password ==='amir'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
    
    })

    