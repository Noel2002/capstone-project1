let loginForm= document.getElementById('login-form');
let message= document.querySelector('.message');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

   // alert('here we go!');
    const email= loginForm.email.value;
    const pass=loginForm.password.value;

    const promise=auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e =>{
        message.innerHTML=e.message;
        message.classList.add('red');
    });

});

auth.onAuthStateChanged(user =>{
    if(user){
        message.classList.remove('red');
        message.classList.add('green');
        message.innerHTML='Logged in';
       // setTimeout(redirect(),3000);
        //alert('login successful');
        redirect();
        
    }
    
});

function redirect(){
    window.location.replace('dashboard.html');
}

