let blogImg= document.getElementById('blog-img');
let author= document.getElementById('author');
let pubDate= document.getElementById('publish-date');
let blogContent= document.getElementById('blog-content');
let title= document.querySelector('.blog-title');
var queryString = location.search.substring(1);
console.log(queryString);

db.collection('blogsTest').doc(queryString).get().then((snapshot)=>{
    console.log(snapshot.data());
    renderBlog(snapshot);
});

function renderBlog(doc){
    let coverpic= document.createElement('img');
    coverpic.setAttribute('src', doc.data().imgUrl);
    blogImg.appendChild(coverpic);
    author.innerHTML=doc.data().writer;
    pubDate.innerHTML= doc.data().blog_date;
    blogContent.innerHTML= doc.data().content;
    title.innerHTML= doc.data().title;

}

db.collection('comments').where('blog_id','==', queryString).get().then((snap)=>{
    snap.forEach(element => {
        console.log(element.data());
        renderComments(element);
    });
});

let commentsArea= document.getElementById('users-comments');

function renderComments(doc){
    let comment= document.createElement('div');
    comment.setAttribute('class', 'comment');

    let avatar= document.createElement('div');
    avatar.setAttribute('class', 'writer-avatar');

    let avatarimg= document.createElement('img');
    avatarimg.setAttribute('src', '../images/login2.jpg');
    
    let commentBody= document.createElement('div');
    commentBody.setAttribute('class', 'comment-body');

    let writerName= document.createElement('div');
    writerName.setAttribute('class', 'writer-name');

    let commentContent= document.createElement('div');
    commentContent.setAttribute('class', 'comment-content');

    let commentDate= document.createElement('div');
    commentDate.setAttribute('class', 'comment-date');


    writerName.textContent= doc.data().sender;
    commentContent.textContent= doc.data().comment_body;
    commentDate.textContent= doc.data().comment_date;

    commentBody.appendChild(writerName);
    commentBody.appendChild(commentContent);
    commentBody.appendChild(commentDate);

    comment.appendChild(avatar);
    comment.appendChild(commentBody);

    commentsArea.appendChild(comment);






    avatar.appendChild(avatarimg);
    

    

}

let comSender= document.getElementById('sender');
let com= document.getElementById('comment-box');
let sendbtn= document.getElementById('send-btn');

sendbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var today= new Date();
    var arrMonths= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var commentTime= arrMonths[today.getMonth()] +' '+ today.getDate()+', '+ today.getFullYear()+'  '+ today.getHours()+':'+today.getMinutes();
    db.collection('comments').add({
        sender: comSender.value,
        comment_body: com.value,
        blog_id: queryString,
        comment_date: commentTime
    });
    alert('comment sent');
});