let message = document.querySelector('#message')

console.log('hello world');

function addmovie(event){
    event.preventDefault(); 
    let inputField=document.querySelector('input');
    let movie=document.createElement('li');
    let movieTitle= document.createElement('span');
    let list=document.querySelector('ul');

    movie.appendChild(movieTitle);
    let deleteBtn=document.createElement('button');
    deleteBtn.textContent=('X');
    deleteBtn.addEventListener('click',deleteMovie);
    movie.appendChild(deleteBtn)
    list.appendChild(movie);

    movieTitle.textContent=inputField.value;
    addEventListener('click',crossOffMovie);

    inputField.value=('')
  
}


let form=document.querySelector('form');

form.addEventListener('submit',addmovie);

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent=('Movie deleted!');
}

function crossOffMovie(event){
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
        message.textContent=('Movie Watched');
    }else {
        message.textContent=('Movie added back')
    }
    
}
