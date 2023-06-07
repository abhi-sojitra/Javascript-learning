// Function to add a new item to the local storage
function addItem(item) {
    // Get the existing items from local storage (if any)
    let items = JSON.parse(localStorage.getItem('items')) || [];

    // Add the new item to the array
    items.push(item);

    // Update the local storage with the updated array
    localStorage.setItem('items', JSON.stringify(items));
}

// Function to get all items from the local storage
function getItems() {
    // Get the items from local storage
    const items = JSON.parse(localStorage.getItem('items')) || [];

    return items;
}

// Function to update an item in the local storage
function updateItem(index, newItem) {
    // Get the existing items from local storage
    let items = JSON.parse(localStorage.getItem('items')) || [];

    // Update the item at the specified index
    items[index] = newItem;

    // Update the local storage with the updated array
    localStorage.setItem('items', JSON.stringify(items));
}

// Function to delete an item from the local storage
function deleteItem(index) {
    // Get the existing items from local storage
    let items = JSON.parse(localStorage.getItem('items')) || [];

    // Remove the item at the specified index
    items.splice(index, 1);

    // Update the local storage with the updated array
    localStorage.setItem('items', JSON.stringify(items));
}

// Usage example:

// Add a new item
addItem('Apple');

// Get all items
const allItems = getItems();
console.log(allItems); // Output: ['Apple']

// Update an item
updateItem(0, 'Banana');

// Get all items after update
const updatedItems = getItems();
console.log(updatedItems); // Output: ['Banana']

// Delete an item
deleteItem(0);

// Get all items after deletion
const remainingItems = getItems();
console.log(remainingItems); // Output: []
