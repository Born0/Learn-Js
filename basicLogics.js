let x=10;

if(x==10){
    console.log(x);
}

x='10';
if(x===10){
    console.log(x);
}else{
    console.log('not 10');
}
///----------- &&----||

const y=5;
const color= y>10 ? 'red' :'blue';
console.log(color);

switch(color){
    case 'red':
         console.log('color is Red');
        break;
    case 'blue':
        console.log('color is Blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}