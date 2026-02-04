const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

window.onload = function() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todo_list='));
    
    if (todoCookie) {
        const todoItems = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        todoItems.reverse().forEach(text => addToDo(text, false));
    }
};

function saveToCookie() {
    const items = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        items.push(item.innerText);
    });
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = `todo_list=${encodeURIComponent(JSON.stringify(items))}; expires=${d.toUTCString()}; path=/`;
}

function addToDo(text, shouldSave = true) {
    if (!text || text.trim() === "") return;

    const div = document.createElement('div');
    div.className = 'todo-item';
    div.innerText = text;

    div.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            this.remove(); 
            saveToCookie(); 
        }
    };

    ftList.prepend(div);

    if (shouldSave) saveToCookie();
}

newBtn.onclick = function() {
    const newTodo = prompt("Please enter your new TO DO:");
    if (newTodo !== null) {
        addToDo(newTodo);
    }
};