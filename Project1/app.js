//CACHED DOM ELEMENTS

const card = document.querySelector("section");

const flipCard = document.querySelector("#clickflip");

const flipReveal = document.querySelector("#revealFlip");


//FUNCS

const onClickFlip = () => {
  console.log(flipReveal);
}

flipCard.addEventListener("click", onClickFlip);




//DEFINE FUNCTIONS

const handleCardClicked=(e)=> {
  console.log("Hello from the clicked card");
  e.target.parentElement.parentElement.classList.add("clicked");
}

// Add Event Listeners

card.addEventListener("click", handleCardClicked);





