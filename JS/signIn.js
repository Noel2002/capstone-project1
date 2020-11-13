let loginForm= document.getElementById('login-form');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    alert('here we go!');
    const email= loginForm.email.value;
    const pass=loginForm.password.value;

    const promise=auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

});

auth.onAuthStateChanged(user =>{
    if(user){
        alert('login successful');
        window.location.href="dashboard.html";
    }
    
});

