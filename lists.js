const searchbar=document.getElementById('search');
const searchbtn=document.getElementById('searchbtn');

searchbtn.addEventListener('click',()=>{
    const searchvalue=searchbar.value;
    console.log(searchvalue);
    // window.location.href=`/search/${searchvalue}`;
})