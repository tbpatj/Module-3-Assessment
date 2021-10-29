let colorBtn = document.querySelector("#color");
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

colorBtn.addEventListener('click', favoriteColor);
placeBtn.addEventListener('click', favoritePlace);
ritualBtn.addEventListener('click', favoriteRitual);


function favoriteColor(){
    alert("My Favorite Color is Blue!");
}
function favoritePlace(){
    alert("My Favorite place would have to be home. I'm a home bound boy")
}
function favoriteRitual(){
    alert("My Favorite Ritual is going to church on Sundays")
}