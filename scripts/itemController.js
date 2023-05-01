class itemController {
    constructor() {
      this.items = [];
      this.currentId = 0; // initialize the latest id to 0
    }
  
    addItem(name, description, img, createdAt) {
      const newItem = {
        id: this.currentId + 1, // increment the latest id and assign it to the new item
        name,
        description,
        img,
        createdAt
      };
      this.items.push(newItem);
      this.currentId++; // increment the latest id for the next item
    }
  } 
const myController = new itemController();
myController.addItem('Red Velvet Cake', 'Freshly made velvet cake', 'food img');
myController.addItem('Churro', 'Freshly made churro', 'some img of churro');
console.log(myController.items);


    // Save the items to local storage
    localStorage.setItem('items', JSON.stringify(itemController.items));
  
