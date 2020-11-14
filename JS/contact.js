var form= document.getElementById('form');
var errorMsg= document.querySelector('.error');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var today= new Date();
    var arrMonths= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var msg_date= arrMonths[today.getMonth()] +' '+ today.getDate()+', '+ today.getFullYear()+'  '+ today.getHours()+':'+today.getMinutes();
    
    function validate(){
        if(form.username.value==""){
            //alert('Enter your name please!');
            form.username.focus();
            errorMsg.classList.remove('green');
            errorMsg.classList.add('red');
            errorMsg.innerHTML='Enter your name please!';
            return false;
        }

        if(form.message.value==""){
            //alert('Enter your message please!');
            form.message.focus();
            errorMsg.classList.remove('green');
            errorMsg.classList.add('red');
            errorMsg.innerHTML='Enter your message please!';
            return false;
        }
        else{
            return true;
        }
    }

    if(validate()){
        db.collection('messages').add({
            sender: form.username.value,
            content: form.message.value,
            message_time: msg_date
        });
        form.username.value='';
        form.message.value='';
        errorMsg.classList.remove('red');
        errorMsg.classList.add('green');
        errorMsg.innerHTML='Message sent successfully!';
        setTimeout(hideMessage, 5000);
        //alert('Message sent successfully!');
        
    }

    function hideMessage(){
        errorMsg.innerHTML='';
    }
    

   
})