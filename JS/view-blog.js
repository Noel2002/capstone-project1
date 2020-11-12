let blogImg= document.getElementById('blog-img');
let author= document.getElementById('author');
let pubDate= document.getElementById('publish-date');
let blogContent= document.getElementById('blog-content');
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

}