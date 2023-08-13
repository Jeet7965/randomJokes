

const textJokes = document.getElementById("textJokes")
const nextJokes = document.getElementById("moreJokes")
const ChangeColor = document.getElementById("change_color")
const box = document.getElementById("box")

const url_jokes ='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

async function GetJokes(){
   const res=await fetch(url_jokes)
   var data =await res.json()
   textJokes.innerHTML=data.joke
}

nextJokes.addEventListener('click',()=>{
 
   box.style.backgroundColor=ChangeColor.value;
   ChangeColor.value='';
  
   GetJokes();
});






