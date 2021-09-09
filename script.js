//Captura os elementos
const newTaskInput = document.getElementById('newTask')
const BtnNewTask = document.querySelector('.BtnNewTask')
const toDoBoard = document.querySelector("body > div > div.board.toDo > div");
let postIts = document.querySelectorAll('.postIt');
let dropzones = document.querySelectorAll('.dropzone');

//Criação do novo postIt
BtnNewTask.addEventListener('click', () => {
    if(newTaskInput.value == ''){
        alert('Favor preencher o campo')
    } else{
        const newPostIt = document.createElement('div');
        newPostIt.classList.add('postIt')
        newPostIt.setAttribute('draggable', 'true')
        toDoBoard.appendChild(newPostIt)
        
        const contentNewPostIt = document.createElement('div');
        contentNewPostIt.classList.add('content')
        contentNewPostIt.innerText = newTaskInput.value;
        newPostIt.appendChild(contentNewPostIt);
        
        newTaskInput.value = ''
        movePostIts()
    }
})

//Atualiza nodelist, add evento de arrastar aos postIts e evento para deletar tarefa
const movePostIts = () => {
    console.log('ligando movimentação')
    postIts = document.querySelectorAll('.postIt');

    postIts.forEach(post => {
        post.addEventListener('dragstart', dragstart)
        post.addEventListener('drag', drag)
        post.addEventListener('dragend', dragend)
        post.addEventListener('dblclick', deleteTask)

    })
}
movePostIts()

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    //this = post
    this.classList.add('is-dragging')
}

function drag() {
}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

    this.classList.remove('is-dragging')
}

// Define as dropzones 
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
}

function dragover() {
    // this = dropzone 
    this.classList.add('over')

    const postDragged = document.querySelector('.is-dragging');

    this.appendChild(postDragged)
}

function dragleave() {
    this.classList.remove('over');
}

function drop() {
    this.classList.remove('over')
}

function deleteTask() {
    this.parentNode.removeChild(this)
}