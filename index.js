const container=document.getElementById('container');
const btn=document.querySelector(".changeColor");
btn.addEventListener('click',()=>{
if(container.classList[0]=='red'){
    container.classList.remove('red');
    container.classList.add('pink');
}
else if(container.classList[0]=='pink'){
    container.classList.remove('pink');
    container.classList.add('blue');
}
else{
    container.classList.remove('blue');
    container.classList.add('red');
}
})
console.log(container.classList[0]);
