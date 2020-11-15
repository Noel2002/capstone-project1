let inputTitle= document.getElementById('title');
let inputWriter= document.getElementById('writer');
let inputContent= document.getElementById('description');
var queryString = location.search.substring(1);
console.log(queryString);

var url;
var blogMessage= document.querySelector('.blog-message');
let uploadbtn= document.getElementById('upload-btn');
let coverImg= document.querySelector('.blog-cover-img');
let uploadPgrs= document.querySelector('.upload-progress');
var fileInput= document.querySelector('#file-input');



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

db.collection('blogsTest').doc(queryString).get().then((snapshot)=>{
    console.log(snapshot.data());
    fillform(snapshot);
});

function fillform(doc){

    inputTitle.value= doc.data().title;
    inputWriter.value= doc.data().writer;
    inputContent.value= doc.data().content;
    coverImg.setAttribute('src', doc.data().imgUrl);
    alert('data inserted successfully');
    

}

let updateBtn=document.getElementById('update-btn');
updateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(url=="" || url== null){
        db.collection('blogsTest').doc(queryString).update({
            title: inputTitle.value,
            writer: inputWriter.value,
            content: inputContent.value
        });
    }
    else{
        db.collection('blogsTest').doc(queryString).update({
            title: inputTitle.value,
            writer: inputWriter.value,
            content: inputContent.value,
            imgUrl: url
        });
    }
    
   
    form.title.value='';
    form.description.value='';
    form.writer.value='';
    coverImg.setAttribute('src', '');
    fileInput.value='';
    uploadPgrs.innerHTML='';
    blogMessage.innerHTML="Blog updated successfully";
    setTimeout(hideMessage,3000);
    //alert('data updated successfully');

});

function hideMessage(){
    blogMessage.innerHTML="";
    location.href="view-blog.html?"+ queryString;

}