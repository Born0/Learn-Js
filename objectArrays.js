/////////////-------------------Object arrays
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2, 
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,   
        text:'Dentist appt',
        isCompleted:false
    }
];

//console.log(todos);

const todoJSON= JSON.stringify(todos);
//console.log(todoJSON);

////////////-------------Loops
for(let i=0;i< 10;i++)
{
    console.log(i);
}

let i=0;
while(i<10)
{
    console.log(i);
    i++;
}

for(let todo of todos)
{
    console.log(todo.text);
}
///--------------------------high order array methods
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoTexts=todos.map(function(todo){
    return todo.text;
});

console.log(todoTexts);

const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true;
});

console.log(todoCompleted);

const todoCompletedTexts=todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompletedTexts);