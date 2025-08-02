const colorDictionary = [
  {color: "Green", rarity: 1000, imagesrc: "./images/Green"},
  {color: "Blue", rarity: 500, imagesrc: "./images/Blue"},
  {color: "Yellow", rarity: 250, imagesrc: "./images/Yellow"},
  {color: "Purple", rarity: 100, imagesrc: "./images/Purple"},
  {color: "Orange", rarity: 50, imagesrc: "./images/Orange"},
  {color: "Red", rarity: 25, imagesrc: "./images/Red"},
  {color: "Black", rarity: 10, imagesrc: "./images/Black"},
  {color: "White" , rarity: 1, imagesrc: "./images/White"}
];

function printColor() {
  let total = 0;
  for (let i = 0; i < colorDictionary.length; i++) {
    total += colorDictionary[i].rarity;
  };

  const RNG = Math.random() * total;

  let colorResult = ""

  let imagesrcResult = ""

  let accumulation = 0;
  for (let i = 0; i < colorDictionary.length; i++) {
    accumulation += colorDictionary[i].rarity;
    if (RNG < accumulation) {
      colorResult = colorDictionary[i].color;
      imagesrcResult = colorDictionary[i].imagesrc
      break;
    };
  };

  document.getElementById("rngResultID").textContent = colorResult;
  
  document.getElementById("rngRarityBarID").src = imagesrcResult + "RarityBar.png";
};
  
function buttonCooldown() {
  const button = document.getElementById("rngButtonID");
  const cooldown = 500;
  let canClick = true;

  button.addEventListener("click", () => {
    
    if (!canClick) {
      return
    };
  
    canClick = false;
    button.disabled = true;

    printColor();

    setTimeout(() => {
      canClick = true
      button.disabled = false;
    }, cooldown);
    
  });
}

  document.addEventListener("DOMContentLoaded", () => {
    buttonCooldown();
});