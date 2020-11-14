var url;
var blogMessage= document.querySelector('.blog-message');
let uploadbtn= document.getElementById('upload-btn');
let coverImg= document.querySelector('.blog-cover-img');
let uploadPgrs= document.querySelector('.upload-progress');


uploadbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    uploadImage();
});
function uploadImage(){
    var image= document.getElementById('file-input').files[0];
    var imageName= image.name;
    var reference= firebase.storage().ref('images/'+imageName);
    var uploadTask= reference.put(image);
    
    uploadTask.on('state_changed', function(snapshot){
        var progress= (snapshot.bytesTransferred/ snapshot.totalBytes)*100;
        uploadPgrs.innerHTML='Uploading: '+ progress +'%';
        console.log('upload is:' + progress + 'done');

    }, function(error){

        console.log(error.message);
    }, function(){
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
            url= downloadURL;
            console.log(url);
            coverImg.setAttribute('src', url);
           // alert('things are still good');

            
        });
    });
    
}
var form= document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var today= new Date();
    var arrMonths= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var blog_date= arrMonths[today.getMonth()] +' '+ today.getDate()+', '+ today.getFullYear()+'  '+ today.getHours()+':'+today.getMinutes();
    var fileInput= document.querySelector('#file-input');

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
        coverImg.setAttribute('src', '');
        fileInput.value='';
        uploadPgrs.innerHTML='';
        blogMessage.innerHTML="Blog created successfully";
        setTimeout(hideMessage,5000);

        //alert('Blog created succesfully');
        
    }
    
})

let message= document.querySelector('.message');
function validate(){
    if(form.writer.value==""){
        message.classList.remove('green');
        message.classList.add('red');
        message.innerHTML='Please enter your name';
        //alert('Please Enter your name!');
        return false;
    }
    if(form.title.value==""){
        message.classList.remove('green');
        message.classList.add('red');
        message.innerHTML='Please enter the title';
        //alert('Please enter the title');
        return false;
    }
    if(form.description.value==""){
        message.classList.remove('green');
        message.classList.add('red');
        message.innerHTML='Please enter the content of your blog!';
        //alert('Please enter the content of your blog!');
        return false;
    }
    else{
        return true;
    }
}

function hideMessage(){
    blogMessage.innerHTML="";
}
