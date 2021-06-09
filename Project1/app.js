//CACHED DOM ELEMENTS

const card = document.querySelector ("#example-card");



//DEFINE FUNCTIONS

const handleCardClicked = () => {
  console.log("Hello from the clicked card");
}

// Add Event Listeners

card.addEventListener ("click", handleCardClicked);