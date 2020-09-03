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
    var mainTitle = document.getElementById("main-title");
    mainTitle.innerText = "Hi! Welcome to DOM's Homepage!";
  
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
   //or favoriteList.lastElementChild;
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
    var noChicago = document.getElementById("past-races"); 
   
    var keshitaiList = noChicago.children[3];
    console.log(keshitaiList);
    noChicago.removeChild(keshitaiList);

  }

  RemoveChicagoRace()
  
  // Part 6
  function addPastRace() {
    
    var newlist = document.getElementById("past-races");
    var newplace = document.createElement("li");
    newplace.innerText = "Norfolk";
    // I used textContent and worked.
    
    newlist.appendChild(newplace);
  
  }

  addPastRace()

  // Part 7
  function createNewBlogPost() {
    var newP = document.createElement("p");
    newP.innerText = "City of mermaids";
    var newH1 =document.createElement("h1");
    newH1.innerText = "Norfolk";
    var newDiv = document.createElement("div");
    // newDiv.classList[0] = "blog-post";
    // newDiv.classList[1] = "purple";
    newDiv.className = "blog-post purple";
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    var mainDivList = document.getElementsByClassName('main');
    var mainDiv = mainDivList[0];
    mainDiv.appendChild(newDiv)
  }
  
  createNewBlogPost()

});

