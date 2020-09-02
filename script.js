let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    document.getElementById("main-title").innerText = "Hi! Welcome to DOM's Homepage!"
  }
  shortenPageTitle();


  // Part 2
    function changeBodyBgColor() {
    document.body.style.backgroundColor = "skyblue";
  }
  
  changeBodyBgColor();
  
  // Part 3
  function removeLastFavoriteThing() {
   var favoriteList= document.getElementById("favorite-things");
   var staring = favoriteList.children[5];
   favoriteList.removeChild(staring);
  }

  removeLastFavoriteThing()
  
  // Part 4
  function makeSpecialTitlesBigger() {
    
    var sizeChange = document.getElementsByClassName("special-title");

    for (var i = 0; i< sizeChange.length; i++) {
      var moji = sizeChange[i];
      moji.style.fontSize = "2.0rem";
    }
  }

  makeSpecialTitlesBigger()
  
  
  // Part 5
  function RemoveChicagoRace() {
    
  //   var nochicago = document.
  //   getElementById("past-races"); 
    
  //   var keshitailist = document.querySelectorAll("li")[3];
    
  //  nochicago.removeChild(keshitailist);
    
  }

  RemoveChicagoRace()
  
  // Part 6
  function addPastRace() {
    var newplace = document.createElement("li");
    newplace.textContent = "Norfolk";
    
    var newlist = document.getElementById("past-races");
    newlist.appendChild(newplace);
  
  }

  addPastRace()

  // Part 7
  function createNewBlogPost() {

  }

});

