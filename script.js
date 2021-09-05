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

function drag(){
    console.log('is dragging')
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

function dragenter(){

}

function dragover(){
    // this = dropzone 
    this.classList.add('over')

    // get dragging post
    const postDragged = document.querySelector('.is-dragging');

    this.appendChild(postDragged)
}

function dragleave(){
    this.classList.remove('over');
}

function drop(){
    this.classList.remove('over')
}
