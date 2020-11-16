var pane_item=document.getElementsByClassName("pane-item");
pane_item[2].style.display="block";
function display_item(n){
    var menu=document.getElementsByClassName("menu-item");
    for(let i=0; i<menu.length; i++){
        menu[i].classList.remove("active");
        pane_item[i].style.display="none";
    }

    menu[n].classList.add("active");
    pane_item[n].style.display="block";
    closeSideNav();
}





var sideNav= document.getElementById("left");
function dropSideNav(){
    sideNav.classList.add("responsive");
}
function closeSideNav(){
    sideNav.classList.remove("responsive");
}


function toggleInput(){
    var btn=document.getElementById("add-btn");
    var input= document.getElementById("skill-input");
    if(input.className == "skill-input"){
        input.classList.add("show");
        btn.classList.add("cancel-btn");
        btn.innerHTML="Cancel";
    }
    else{
        input.classList.remove("show");
        btn.classList.remove("cancel-btn");
        btn.innerHTML="Add+";

    }
}


//---------firestorecodes for Displaying Messages--------

const userMessages= document.querySelector('.users-messages');

function renderMessages(doc){
    let message= document.createElement('div');
    message.setAttribute('class','message');
    message.setAttribute('data-id',doc.id);

    let writerAvatar=document.createElement('div');
    writerAvatar.setAttribute('class', 'writer-avatar');

    let avatarImg=document.createElement('img');
    avatarImg.setAttribute('src','../images/login2.jpg');

    let messageBody=document.createElement('div');
    messageBody.setAttribute('class','message-body');

    let writerName= document.createElement('div');
    writerName.setAttribute('class','writer-name');
    
    let messageContent= document.createElement('div');
    messageContent.setAttribute('class','message-content');

    let messageDate= document.createElement('div');
    messageDate.setAttribute('class','message-date');


    messageDate.textContent= doc.data().message_time;
    writerName.textContent= doc.data().sender;
    messageContent.textContent= doc.data().content;

    messageBody.appendChild(writerName);
    messageBody.appendChild(messageContent);
    messageBody.appendChild(messageDate);

    writerAvatar.appendChild(avatarImg);

    message.appendChild(writerAvatar);
    message.appendChild(messageBody);


   

    userMessages.appendChild(message);
    
    

}


db.collection('messages').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderMessages(doc);
    });
});

//-------------------------------------------------------

//---------------Displaying blogs------------------------
const blogsArea= document.querySelector('#blogs-area');
db.collection('blogsTest').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderBlogs(doc);
    });
});

function renderBlogs(doc){
    let blog= document.createElement('div');
    blog.setAttribute('class','blog');
    blog.setAttribute('data-id',doc.id);

    let blogImg=document.createElement('div');
    blogImg.setAttribute('class', 'blog-img');

    let coverImg=document.createElement('img');
    coverImg.setAttribute('src',doc.data().imgUrl);

    let blogText=document.createElement('div');
    blogText.setAttribute('class','blog-text');

    let blogTitle= document.createElement('div');
    blogTitle.setAttribute('class','blog-title');
    
    let blogInfo= document.createElement('div');
    blogInfo.setAttribute('class','blog-info');

    let blogAuthor= document.createElement('div');
    blogAuthor.setAttribute('class','blog-author');
    
    let blogDate= document.createElement('div');
    blogDate.setAttribute('class','blog-date');

    let blogBtns= document.createElement('div');
    blogBtns.setAttribute('class','blog-btns');

    let viewBtn= document.createElement('button');
    viewBtn.setAttribute('class','view-btn');

    let editBtn= document.createElement('button');
    editBtn.setAttribute('class','edit-btn');

    let deleteBtn= document.createElement('button');
    deleteBtn.setAttribute('class','delete-btn');


    blogTitle.textContent= doc.data().title;
    blogAuthor.textContent= doc.data().writer;
    blogDate.textContent= doc.data().blog_date;
    deleteBtn.textContent="Delete";
    editBtn.textContent="Edit";
    viewBtn.textContent="View";

    blogImg.appendChild(coverImg);

    blogBtns.appendChild(viewBtn);
    blogBtns.appendChild(editBtn);
    blogBtns.appendChild(deleteBtn);

    blogInfo.appendChild(blogAuthor);
    blogInfo.appendChild(blogDate);


    blogText.appendChild(blogTitle);
    blogText.appendChild(blogInfo);
    blogText.appendChild(blogBtns);

    blog.appendChild(blogImg);
    blog.appendChild(blogText);
  

    blogsArea.appendChild(blog);

    deleteBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id= e.target.closest(".blog").getAttribute('data-id');
        console.log(id);
        db.collection('blogsTest').doc(id).delete();
        alert("Blog Deleted successfully!");
        

    });

    editBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id= e.target.closest(".blog").getAttribute('data-id');
        console.log(id);
        alert("Your are being resirected");

        location.replace("edit-blog.html?"+id);     
        

    });
    

    viewBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id= e.target.closest(".blog").getAttribute('data-id');
        console.log(id);
        alert("Your are being redirected");

        location.replace("view-blog.html?"+id);     
        

    });

}

//------------------------------------------------------