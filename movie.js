const form=document.querySelector('form');
const container=document.querySelector('.image');

form.addEventListener('submit',(e)=>{
   e.preventDefault();
   
let query=form.querySelector('input').value
  
moviemaze(query);

})

async function moviemaze(query) {
    const req=await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies=await req.json();
    makeimg(movies);
    
    
}
function makeimg(movies) {
    for(let movie of movies){

    // let movie =[...movies]

    
       let src=movie.show.image.medium;

       const img=document.createElement("img");
       img.src=src;
       
       container.appendChild(img);
    }
    console.log(movies);
}