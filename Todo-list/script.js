//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

//event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)
filterOption.addEventListener('click',filterTodo)

//functions
function addTodo(e) {
    e.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-items')
    todoDiv.appendChild(newTodo)
    const completeBtn= document.createElement('button')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.classList.add('complete-btn')
    todoDiv.appendChild(completeBtn)
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add('delete-btn')
    todoDiv.appendChild(deleteBtn)
    todoList.appendChild(todoDiv)
    todoInput.value = ''
}

function deleteTodo(e) {
    const item = e.target
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function() {
            todo.remove()})
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }else {
                    todo.style.display = 'none'
                }
                break
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }else {
                    todo.style.display = 'none'
                }
        }
    }
    )
}