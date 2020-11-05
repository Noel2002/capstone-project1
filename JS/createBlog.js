
var form= document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    db.collection('blogsTest').add({
        title: form.title.value,
        content: form.description.value,
        writer: form.writer.value
    });

    form.title.value='';
    form.description.value='';
    form.writer.value='';
})


