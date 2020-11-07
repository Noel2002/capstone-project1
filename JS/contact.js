var form= document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var today= new Date();
    var msg_date= today.getMonth()+' '+ today.getDay()+', '+ today.getFullYear()+'  '+ today.getHours()+':'+today.getMinutes();
    db.collection('messages').add({
        sender: form.username.value,
        content: form.message.value,
        message_time: msg_date
    });

    form.username.value='';
    form.message.value='';
})