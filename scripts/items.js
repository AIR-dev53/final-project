import { ItemsController } from './items-controller.js';
// Initialize ItemsController instance
const itemsController = new ItemsController();
// Get New Item form element
const newItemForm = document.getElementById('new-item-form');
// Add submit event listener to New Item form
newItemForm.addEventListener('submit', async (event) => {
  // Prevent default form submission
  event.preventDefault();
  // Get input values from New Item form
  const name = getItemValue('name');
  const description = getItemValue('description');
  const price = getItemValue('price');
  // Validate input values
  if (!name || !description || !price) {
    alert('Please fill in all fields');
    return;
  }
  // Create new item object
  const newItem = {
    name,
    description,
    price
  };
  // Add new item to ItemsController
  await addItemToController(newItem);
  // Reset form values
  resetFormValues();
  // Notify user of successful submission
  alert('Item added successfully');
});

function getItemValue(itemId) {
  return document.getElementById(itemId).value;
}

async function addItemToController(item) {
  return itemsController.addItem(item);
}

function resetFormValues() {
  document.getElementById('name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('price').value = '';
}

function addItemCard(item) {
  // Create a new card element
  const newCard = document.createElement('div');
  newCard.style.display = 'inline-block';
  newCard.innerHTML = `
    <div class="card">
      <img src="cake.jpg">
      <h4>${item}</h4>
      <p> This cake was created using the world's best ingredients </p>
    </div>
  `;
  // Add the new card to the existing card container
  const cardContainer = document.getElementById('list-items');
  cardContainer.appendChild(newCard);
}

const bakedGoods = [
  {
    name: '',
    img: '',
    description: ''
  }
];
localStorage.setItem('items', JSON.stringify(bakedGoods));

function loadItemsFromLocalStorage() {
  const bakedItems = localStorage.getItem('items');
  if (bakedItems) {
    const items = JSON.parse(bakedItems);
    // Use the items as needed
  }
}
