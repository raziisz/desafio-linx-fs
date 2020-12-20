(async function () {
  const urlApi = `http://localhost:3000/recommendations`;
  let elementItems = document.querySelector(".items");
  let arrowLeft = document.querySelector("#arrow-left");
  let arrowRight = document.querySelector("#arrow-right");

  const createElement = (element) => {
    return document.createElement(element)
  }

  const processData = (data = []) => {

  }

  let result = await fetch(urlApi);
  let data = await result.json();
  


  elementItems.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      event.target.scrollBy(300, 0);
    } else {
      event.target.scrollBy(-300, 0);
    }
  });

  arrowLeft.addEventListener("click", (event) => {
    elementItems.scrollBy(-300, 0);
  });
  arrowRight.addEventListener("click", (event) => {
    elementItems.scrollBy(300, 0);
  });
})();
