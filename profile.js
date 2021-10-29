let colorBtn = document.querySelector("#color");
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');
let classyDuck = document.querySelector('.classy-duck');
console.log(classyDuck);
colorBtn.addEventListener('click', favoriteColor);
placeBtn.addEventListener('click', favoritePlace);
ritualBtn.addEventListener('click', favoriteRitual);

window.onscroll = function() {scrollCalls()};


function favoriteColor(){
    alert("My Favorite Color is Blue!");
}
function favoritePlace(){
    alert("My Favorite place would have to be home. I'm a home bound boy")
}
function favoriteRitual(){
    alert("My Favorite Ritual is going to church on Sundays")
}
function scrollCalls(){
    if(document.documentElement.scrollTop > 200){
        console.log(classyDuck.classList.contains('hidden-duck'));
        if(classyDuck.classList.contains('hidden-duck')){
            classyDuck.classList.remove('hidden-duck');
        }
    }
    else{
        if(!classyDuck.classList.contains('hidden-duck')){
            classyDuck.classList.add('hidden-duck');
        }
    }
}

