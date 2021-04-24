window.onload = function () {
/*
  for (const i = 0; i < 5; i++) {
    const duck = createDuck();
  }

  function createDuck() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("duck");
    const nextPosition = randomPosition();
    debugger;
    newDiv.style.top = `${nextPosition.top}px`;
    newDiv.style.left = `${nextPosition.left}px`;
    // document.body.append(newDiv);
    document.querySelector('body').appendChild(newDiv);

    // --------------------------- PART 3 ------------------------------------

    // 11. BOOM. Attach a "click" handler that adds the "shot" class to
    //     the duck when you click on it!

    // 12. After a duck has been clicked on, remove it from the DOM after
    //     a short delay (1 second) Hint Hint...use setTimeout
    //     as for removing the element check out https://dzone.com/articles/removing-element-plain

    newDiv.addEventListener("click", function () {
      newDiv.classList.add("shot");

      setTimeout(function () {
        newDiv.remove();
        checkForWinner();
      }, 1000);
    });

    setInterval(function () {
      newDiv.classList.toggle("flap");
    }, 250);
    setInterval(function () {
      moveDuck(newDiv);
    }, 1000);

    function moveDuck(duck) {
      var nextPosition = randomPosition();
      duck.style.top = `${(Math.random() * window.innerHeight)}px`;
      duck.style.left = `${(Math.random() * window.innerWidth)}px`;
      if (
        parseFloat(duck.style.left.substring(0, duck.style.left.length - 2)) <
        nextPosition.left
      ) {
        newDiv.classList.remove("right");
      } else {
        newDiv.classList.add("right");
      }
    }
    return newDiv;
  }
*/
 
  // /////////////

  for (let i = 0; i < 5; i++) {
    let duck = createDuck();
  }
  function createDuck() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("duck");
    const nextPosition = randomPosition();
    debugger;
    newDiv.style.top = `${nextPosition.top}px`;
    newDiv.style.left = `${nextPosition.left}px`;
    document.body.append(newDiv);
  
    newDiv.addEventListener("click", function () {
      newDiv.classList.add("shot");
      setTimeout(function () {
        newDiv.remove();
        checkForWinner();
      }, 1000);
    });
    setInterval(function () {
      newDiv.classList.toggle("flap");
    }, 250);
    setInterval(function () {
      moveDuck(newDiv);
    }, 1000);
    function moveDuck(duck) {
      const nextPosition = randomPosition();
      duck.style.top = `${nextPosition.top}px`;
      duck.style.left = `${nextPosition.left}px`;
      if (
        parseFloat(duck.style.left.substring(0, duck.style.left.length - 2)) <
        nextPosition.left
      ) {
        newDiv.classList.remove("right");
      } else {
        newDiv.classList.add("right");
      }
    }
    return newDiv;
  }
  
////////

  function randomPosition() {
    var randomWidth = Math.random() * window.innerWidth;
    var randomHeight = Math.random() * window.innerHeight;
    return { left: randomWidth, top: randomHeight };
  }

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  // FIN. You win 1 trillion tokens.  Play the day away!
  function checkForWinner() {
    var anyDucksLeft = document.getElementsByClassName("duck").length;
    if (anyDucksLeft == 0) {
      alert("You win!");
    }
  }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?
};
