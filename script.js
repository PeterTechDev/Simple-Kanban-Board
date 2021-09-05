//adicionar nova tarefa
const newTaskInput = document.getElementById('newTask')
const BtnNewTask = document.querySelector('.BtnNewTask')
const toDoBoard = document.querySelector("body > div > div.board.toDo > div");

// const newPostIt = document.createElement('div');
// newPostIt.classList.add('postIt')
// newPostIt.setAttribute('draggable', 'true')
// const contentNewPostIt = document.createElement('p');
// contentNewPostIt.innerText = newTaskInput.value;

BtnNewTask.addEventListener('click', ()=>{
    const newPostIt = document.createElement('div');
    newPostIt.classList.add('postIt')
    newPostIt.setAttribute('draggable', 'true')

    const contentNewPostIt = document.createElement('div');
    contentNewPostIt.classList.add('content')
    contentNewPostIt.innerText = newTaskInput.value;
    newPostIt.appendChild(contentNewPostIt);
    toDoBoard.appendChild(newPostIt)

})


//Captura os elementos
const postIts = document.querySelectorAll('.postIt');
const dropzones = document.querySelectorAll('.dropzone');

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
