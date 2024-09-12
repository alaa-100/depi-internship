// apiUrl=""

// fetch(apiUrl, {
//     method: "GET"
//   })
//     .then(response => response.json())
//     .then(data => {
//     console.log(laptops);})
//     .catch(error => console.error("Error:", error));




const jsonUrl = "http://127.0.0.1:5500/amazonClone/products.json"; 

fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON data
  })
  .then(data => {
    const laptopList = document.getElementById('laptops');

    data.forEach(laptop => {        
        const listItem = document.createElement('div');
        listItem.style.width ='calc(33.333% - 20px)';

        const img = document.createElement('img');
        img.src = laptop.image;
        img.alt = laptop.title;
        img.style.width = '290px';
        img.style.height = '230px';

        const infoDiv = document.createElement('div');
        infoDiv.style.padding = '15px';
        infoDiv.style.background='#fafafa';

        const laptopTitle = document.createElement('h2');
        laptopTitle.textContent = laptop.title;
        laptopTitle.style.fontSize = '1.2em';
        laptopTitle.style.margin = '0';

        const laptopDesc = document.createElement('p');
        laptopDesc.textContent = laptop.discription;
        laptopDesc.style.margin = '10px 0';

        const laptopPrice = document.createElement('p');
        laptopPrice.textContent = laptop.price;
        laptopPrice.classList.add('prc');

        infoDiv.appendChild(laptopTitle);
        infoDiv.appendChild(laptopDesc);
        infoDiv.appendChild(laptopPrice);
        listItem.appendChild(img);
        listItem.appendChild(infoDiv);
        laptopList.appendChild(listItem);

    });
  })
  .catch(error => {
    console.error("Failed to fetch data:", error);
  });



    