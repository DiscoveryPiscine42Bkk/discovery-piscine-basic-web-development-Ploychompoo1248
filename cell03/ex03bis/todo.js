$('#newBtn').click(function() {
    const task = prompt("New TO DO:");
    if (task) {
        const item = $('<div></div>').text(task).addClass('todo-item');
        item.click(function() {
            if (confirm("Remove?")) {
                $(this).remove();
                saveCookie();
            }
        });
        $('#ft_list').prepend(item);
        saveCookie();
    }
});

function saveCookie() {
    let tasks = [];
    $('.todo-item').each(function() { tasks.push($(this).text()); });
    document.cookie = "todo=" + JSON.stringify(tasks) + "; path=/";
}