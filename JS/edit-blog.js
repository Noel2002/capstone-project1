let inputTitle= document.getElementById('title');
let inputWriter= document.getElementById('writer');
let inputContent= document.getElementById('content');
var queryString = location.search.substring(1);
console.log(queryString);

db.collection('blogsTest').doc(queryString).get().then((snapshot)=>{
    console.log(snapshot.data());
    fillform(snapshot);
});

function fillform(doc){

    inputTitle.value= doc.data().title;
    inputWriter.value= doc.data().writer;
    inputContent.value= doc.data().content;
    alert('data inserted successfully');

}

let updateBtn=document.getElementById('update-btn');
updateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    db.collection('blogsTest').doc(queryString).update({
        title: inputTitle.value,
        writer: inputWriter.value,
        content: inputContent.value
    });
   
    alert('data updated successfully');

});