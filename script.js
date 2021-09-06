//adicionar nova tarefa
const newTaskInput = document.getElementById('newTask')
const BtnNewTask = document.querySelector('.BtnNewTask')
const toDoBoard = document.querySelector("body > div > div.board.toDo > div");

BtnNewTask.addEventListener('click', ()=>{
    const newPostIt = document.createElement('div');
    newPostIt.classList.add('postIt')
    newPostIt.setAttribute('draggable', 'true')
    toDoBoard.appendChild(newPostIt)

    const contentNewPostIt = document.createElement('div');
    contentNewPostIt.classList.add('content')
    contentNewPostIt.innerText = newTaskInput.value;
    newPostIt.appendChild(contentNewPostIt);

    postIts = document.querySelectorAll('.postIt');
    dropzones = document.querySelectorAll('.dropzone');
})


//Captura os elementos
let postIts = document.querySelectorAll('.postIt');
let dropzones = document.querySelectorAll('.dropzone');

//mover os posts
postIts.forEach(post=>{
    post.addEventListener('dragstart', dragstart )
    post.addEventListener('drag', drag)
    post.addEventListener('dragend', dragend )
})

function dragstart(){
    dropzones.forEach(dropzone=> dropzone.classList.add('highlight'));
    
    //this = post
    this.classList.add('is-dragging')
}

function drag() {
    // log('CARD: Is dragging ')
}

function dragend(){
    dropzones.forEach(dropzone=> dropzone.classList.remove('highlight'));

    this.classList.remove('is-dragging')
}


// Zona que os cartões podem ser deixados
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    // log('DROPZONE: Enter in zone ')
}

function dragover(){
    // this = dropzone 
    this.classList.add('over')

    const postDragged = document.querySelector('.is-dragging');

    this.appendChild(postDragged)
}

function dragleave(){
    this.classList.remove('over');
}

function drop(){
    this.classList.remove('over')
}
