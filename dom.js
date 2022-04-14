// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// ------------NodeList
// console.log(document.querySelectorAll('.item')); 
//----------------- // HtmlCollection
// console.log(document.getElementsByClassName('item'));

const items= document.querySelectorAll('.item');
console.log(items);

items.forEach(i=> console.log(i));

const ul=document.querySelector('.items');

//ul.lastElementChild.remove();
//ul.firstElementChild.textContent='first li';
ul.children[1].innerText='child 1';
ul.lastElementChild.innerHTML='<h1>'
                + ul.lastElementChild.textContent+'</h1>';
const btn=document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
    console.log('click');
});
