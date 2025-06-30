let todolist = [];

const savedList = localStorage.getItem('todolist');
if (savedList) {
    todolist = JSON.parse(savedList);
    render();
}

function add() {
    const element1 = document.querySelector('.inputname');
    const name = element1.value;
    const element2 = document.querySelector('.inputdate');
    const date = element2.value;

    todolist.push({ name, date });
    localStorage.setItem('todolist', JSON.stringify(todolist));
    element1.value = '';
    element2.value = '';
    render();
}

function render() {
    let todohtml = '';

    for (let i = 0; i < todolist.length; i++) {
        const todoobject = todolist[i];
        const name1 = todoobject.name;
        const date1 = todoobject.date;
        const htmllist = `<div style="font-size:20px;">${name1}</div>
                        <div style="font-size:20px;"> ${date1} </div>
                        <button class="button2" onclick="deleteItem(${i})"> DELETE </button>`;
        todohtml += htmllist;
    }
    document.querySelector('.addtodo').innerHTML = todohtml;
}

function deleteItem(index) {
    todolist.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    render();
}

document.querySelector('.inputdate').addEventListener('keydown',(event)=>{
    if(event.key ==='Enter'){
        add();
    }
});

function clearList() {
    todolist = [];
    localStorage.removeItem('todolist');
    render();
}