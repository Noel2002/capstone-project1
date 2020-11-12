
const blogsArea= document.querySelector('.articles-area');

function render(doc){
    let articleLink= document.createElement('a');
    articleLink.setAttribute('href','view-blog.html?'+doc.id);

    let article=document.createElement('div');
    article.setAttribute('data-id',doc.id);
    article.setAttribute('class', 'article');

    let blogImg= document.createElement('div');
    blogImg.setAttribute('class','article-img');
    let coverImg= document.createElement('img');
    coverImg.setAttribute('src', doc.data().imgUrl);

    let title=document.createElement('div');
    title.setAttribute('class','article-title');

    let summary=document.createElement('div');
    summary.setAttribute('class','article-summary');

    let articleText= document.createElement('div');
    articleText.setAttribute('class','article-text');
    
    let articleInfo= document.createElement('div');
    articleInfo.setAttribute('class','article-info');

    let author= document.createElement('div');
    author.setAttribute('class','author');

    let date= document.createElement('div');
    date.setAttribute('class','article-date');

    date.textContent= doc.data().blog_date;
    author.textContent= "By "+ doc.data().writer;
    title.textContent= doc.data().title;
    summary.textContent=doc.data().content;

    blogImg.appendChild(coverImg);

    articleInfo.appendChild(author);
    articleInfo.appendChild(date);

    articleText.appendChild(title);
    articleText.appendChild(summary);
    articleText.appendChild(articleInfo);


    articleLink.appendChild(blogImg);
    articleLink.appendChild(articleText);
    article.appendChild(articleLink);

    blogsArea.appendChild(article);
    
    

}
db.collection('blogsTest').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        render(doc);
    });
});