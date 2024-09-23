
let btn =document.querySelector("#but")
let set =document.querySelector("#jokeset")
let punch =document.querySelector("#jokepunch")



function act(){
// set.style.opacity= "1";
let joke = fetch("https://official-joke-api.appspot.com/jokes/programming/random")
joke.then((resp)=>{
    resp.json().then((resul)=>{
        set.style.opacity= "1";
        set.innerHTML=resul[0].setup;
         punch.innerHTML=resul[0].punchline;
    })
})

}