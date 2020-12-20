(async function () {
  const urlApi = `http://localhost:3000/recommendations`;
  let elementItems1 = document.querySelector("#items-wrapper1 .items");
  let arrowLeft1 = document.querySelector("#items-wrapper1 #arrowLeft1");
  let arrowRight1 = document.querySelector("#items-wrapper1 #arrowRight1");

  let elementItems2 = document.querySelector("#items-wrapper2 .items");
  let arrowLeft2 = document.querySelector("#items-wrapper2 #arrowLeft2");
  let arrowRight2 = document.querySelector("#items-wrapper2 #arrowRight2");

  const formatValue = (value = 0) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value);
  }

  const calcPercentPrev = (prev, actual) => {
    const result = ((prev - actual) * 100) / prev
    return Math.floor(result);
  }

  const getHtmlTemplate = (obj, element, complement = '') => {
    
    const { name, oldPrice, price, installment, image } = obj;
    const htmlTemplate = `
      <div class="item">
        ${complement}
        <img src="${image}" alt="${name}" />
        <div class="info-prices-reductions">
          <p class="product-name">${name}</p>
          <p class="old-price">${formatValue(oldPrice)}</p>
          <p>Por <span>${formatValue(price)}</span></p>
          <p> ${installment.count}x ${formatValue(installment.price)}</p>
        </div>
      </div>
    `

    element.innerHTML += htmlTemplate;
    
  }
  
  const processData = (data = [], element, type) => {

    return new Promise((resolve, reject) => {
      for (let i = 0; i < data.length; i++) {
        let complement = '';
        
        if(type === 'mostPopular') {
          let position = i + 1;
          complement = `<span class="position">${position}º</span>`
        } else if (type === 'pricesReductions') {
          let { oldPrice, price } = data[i];
          let discountPercent = calcPercentPrev(oldPrice, price);
          let discount = discountPercent > 0 ? `-${discountPercent}%` : '0%';

          complement = `<span class="discount">${discount}</span>`;
        }
        
        getHtmlTemplate(data[i], element, complement);
      }
      resolve();
    })
  }

  let result = await fetch(`${urlApi}?maxProducts=16`);
  let data = await result.json();
  console.log(data)
  await processData(data.productsMostPopular, elementItems1, 'mostPopular');
  await processData(data.productsPricesReductions, elementItems2, 'pricesReductions');

  arrowLeft1.addEventListener("click", (event) => {
    elementItems1.scrollBy(-300, 0);
  });
  arrowRight1.addEventListener("click", (event) => {
    elementItems1.scrollBy(300, 0);
  });

  arrowLeft2.addEventListener("click", (event) => {
    elementItems2.scrollBy(-300, 0);
  });
  arrowRight2.addEventListener("click", (event) => {
    elementItems2.scrollBy(300, 0);
  });
})();
