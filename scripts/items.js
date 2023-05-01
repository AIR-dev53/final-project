function addItemCard(item) {
    // Create a new card element
    const newCard = document.createElement('div');
   newCard.style.display = 'inline-block';
    newCard.innerHTML = `
      <div class="card">
        <img src="cake.jpg">
        <h4>${item}</h4>
        <p> This cake was created using the words best ingredients </p>
      </div>
    `;
     // Add the new card to the existing card container
    const cardContainer = document.getElementById('list-items');
    cardContainer.appendChild(newCard);
  }
 
 
  const bakedGoods = [{'name':'',
  'img':'',
  'description':''}];
  localStorage.setItem("items", JSON.stringify(bakedGoods));
 
 
  function loadItemsFromLocalStorage() {    
    const bakedItems = localStorage.getItem("items")
    if (bakedItems) {
        const items = JSON.parse(storageItems)
               
    }
 }
 