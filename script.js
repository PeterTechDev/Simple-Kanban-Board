// Help
function log(message){
    console.log('> ' + message);
}


//caputura os elementos
const postIts = document.querySelectorAll('.postIt');
const dropzones = document.querySelectorAll('.dropzone');


//mover os posts
postIts.forEach(post=>{
    post.addEventListener('dragstart', dragstart )
    post.addEventListener('drag', drag)
    post.addEventListener('dragend', dragend )
})

function dragstart(){
    log('O post começou a se mover')
}

function drag(){
    log('O post está se movendo')
}

function dragend(){
    log('O post parou')
}


// Zona que os cartões podem ser deixados
dropzones.forEach(dropzone=>{
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    // this = post
    this.classList.add('is-dragging')
}

function drag() {
    // log('CARD: Is dragging ')
}

function dragend() {
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}