console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", (e)=>{
    let imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    let breedUrl = 'https://dog.ceo/api/breeds/list/all';
    let dogContainer = document.getElementById("dog-image-container");  
    let dogBreeds = document.getElementById("dog-breeds");
    let dropDown = document.getElementById("breed-dropdown");

fetch(imgUrl)
.then (res => res.json())
.then (data => (data.message.forEach(element => { 
    let dogImg = document.createElement("img");
    dogImg.setAttribute("src", element);
    dogContainer.appendChild(dogImg);    
})
))

fetch(breedUrl)
.then (res => res.json())

.then (data => {let dogObj = data.message;
let dogArr = Object.keys(dogObj);
console.log(dogArr);
dogArr.forEach((dog)=>{
    
    let dogInfo = document.createElement("li");
    dogInfo.innerHTML = dog;
    dogBreeds.appendChild(dogInfo);

    
    dogInfo.addEventListener("click",()=>{
        dogInfo.setAttribute("style", "color:blue")
    })
dropDown.addEventListener("change",()=>{
    
    let dogChild = document.querySelectorAll("li");         
    dogChild.forEach((dog)=>{
        dog.remove();
    });
    let newFilterArr = dogArr.filter((dog)=>dog.startsWith(dropDown.value));
    
    newFilterArr.forEach((dog)=>{
let newLi = document.createElement("li");
    newLi.innerHTML = dog;
    dogBreeds.appendChild(newLi);
    })
        })})
    })})
