
var form= document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(validate()){
        db.collection('blogsTest').add({
            title: form.title.value,
            content: form.description.value,
            writer: form.writer.value
        });
    
        form.title.value='';
        form.description.value='';
        form.writer.value='';
        alert('Blog created succesfully');
        location.replace('../UI/view-blog.html');
    }
    
})

function validate(){
    if(form.writer.value==""){
        alert('Please Enter your name!');
        return false;
    }
    if(form.title.value==""){
        alert('Please enter the title');
        return false;
    }
    if(form.description.value==""){
        alert('Please enter the content of your blog!');
        return false;
    }
    else{
        return true;
    }
}

