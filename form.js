let obj;
const submit=document.getElementById('submit');

submit.addEventListener('click',()=>{
    let title=document.getElementById('title').value;
    let description=document.getElementById('description').value;
    let price=document.getElementById('price').value;
    let categoty=document.getElementById('category').value;
    let image=document.getElementById('image').value.toString('base64');
    obj={title,description,price,categoty,image};
    console.log(obj);
    console.log(image);
})
