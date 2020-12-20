(async function () {
  const urlApi = `http://localhost:3000/recommendations`;
  let elementItems = document.querySelector("#items-wrapper1 .items");
  let arrowLeft = document.querySelector("#items-wrapper1 #arrowLeft1");
  let arrowRight = document.querySelector("#items-wrapper1 #arrowRight1");

  const formatValue = (value = 0) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value);
  }

  const getHtmlTemplate = (obj) => {
    
    const { name, oldPrice, price, installment, image } = obj;
    const htmlTemplate = `
      <div class="item">
        <img src="${image}" alt="${name}" />
        <div class="info-prices-reductions":
          <span>${name}</span>
          <span class="old-price">${formatValue(oldPrice)}</span>
          <p>Por ${formatValue(price)}</p>
          <p> ${installment.count} ${formatValue(installment.price)}</p>
        </div>
      </div>
    `

    elementItems.innerHTML += htmlTemplate;
    
  }
  
  const processData = (data = []) => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < data.length; i++) {
        getHtmlTemplate(data[i]);
      }
      resolve();
    })
  }

  let result = await fetch(urlApi);
  let data = await result.json();

  await processData(data.productsPricesReductions);

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
