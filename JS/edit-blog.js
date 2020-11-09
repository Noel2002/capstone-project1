
var queryString = location.search.substring(1);
console.log(queryString);

db.collection('blogsTest').where('id', queryString).get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        fillform(doc);
    });
});

function fillform(doc){
    let title= document.getElementById('title');
    let writer= document.getElementById('writer');
    let content= document.getElementById('content');

    title.value= doc.title;
    writer.value= doc.writer;
    content.value= doc.content;
}