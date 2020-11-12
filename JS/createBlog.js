var url;
function uploadImage(){
    var image= document.getElementById('file-input').files[0];
    var imageName= image.name;
    var reference= firebase.storage().ref('images/'+imageName);
    var uploadTask= reference.put(image);
    
    uploadTask.on('state_changed', function(snapshot){
        var progress= (snapshot.bytesTransferred/ snapshot.totalBytes)*100;
        console.log('upload is:' + progress + 'done');
    }, function(error){
        console.log(error.message);
    }, function(){
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
            url= downloadURL;
            console.log(url);
            alert('things are still good');

            
        });
    });
    
}
var form= document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var today= new Date();
    var arrMonths= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var blog_date= arrMonths[today.getMonth()] +' '+ today.getDate()+', '+ today.getFullYear()+'  '+ today.getHours()+':'+today.getMinutes();
    
    if(validate()){
        db.collection('blogsTest').add({
            title: form.title.value,
            content: form.description.value,
            writer: form.writer.value,
            imgUrl: url,
            blog_date: blog_date
        });
    
        form.title.value='';
        form.description.value='';
        form.writer.value='';
        alert('Blog created succesfully');
        
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

