const add = document.querySelector('.add');
const list =document.querySelector('.list');
const txt = document.querySelector('.txt');

txt.focus();

txt.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        adding();
    }
});

add.addEventListener('click',adding=()=>{
    const todo =document.createElement('div');
    const input =document.createElement('input');
    const modify =document.createElement('div');
    const edit =document.createElement('button');
    const del =document.createElement('button');
    const count =document.createElement('li');

    todo.setAttribute('class','todo');
    input.setAttribute('class','txt');
    input.setAttribute('type','text');
    modify.setAttribute('class','modify');
    edit.setAttribute('class','edit');
    del.setAttribute('class','del');
    input.setAttribute('readonly','readonly');

    edit.innerText='Edit';
    del.innerText='Del';
    input.value=txt.value;

    modify.appendChild(edit);
    modify.appendChild(del);
    todo.appendChild(input);
    todo.appendChild(modify);
    if(txt.value===''){
        alert('Enter something');
        return
    }
    else{
        list.appendChild(todo);
    }
    
    txt.value="";


    input.addEventListener('click',()=>{
        input.classList.toggle('strike');
    })

    del.addEventListener('click',()=>{
        todo.remove();
    });

    edit.addEventListener('click',()=>{
        if(edit.innerText==='Edit'){
            input.removeAttribute('readonly');
            edit.innerText='Save';
            edit.style.color='blue';
            input.focus();
        }
        else{
            input.setAttribute('readonly','readonly');
            edit.style.color='green';
            edit.innerText='Edit';
        }

    })
});