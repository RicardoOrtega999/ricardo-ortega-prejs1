const doesElementExistById = (array, idReference) => {
  return array.some(element => element.id === idReference);
}

// Product Section

let productId = 1;
let productStock = [];

class Product {
  constructor(theme, type, size, color, quantity) {
    this.theme = theme;
    this.type = type;
    this.size = size;
    this.color = color;
    this.quantity = quantity;
    this.id = productId;
  }
}

const addProduct = (product) => {
  productStock.push(product);
  productId++;
};

const removeProduct = (id) => {
  if (doesElementExistById(productStock, id)) {
    productStock = productStock.filter(product => product.id !== id);
  } else {
    alert("No product found with that ID");
  }
};


const showProductStock = () => {
  // group products by type
  const productsByType = {};
  productStock.forEach(product => {
    if (!productsByType[product.type]) {
      productsByType[product.type] = [];
    }
    productsByType[product.type].push(product);
  });// show products by type
  for (const type in productsByType) {
    let productInfo = productsByType[type].map(product => `ID: ${product.id} - Theme: ${product.theme} - Size: ${product.size} - Color: ${product.color} - Quantity: ${product.quantity}`);
    if (productInfo.length > 0) {
      alert(`Stock for ${type}s:\n\n${productInfo.join("\n")}`);
    } else {
      alert(`No ${type}s in stock`);
    }
  }
};
  
  
// Menus Section

const productMenu = (productType) => {
  let state = true;

  while (state) {
    let option = parseInt(
      prompt(
        `
        Welcome to ${productType} Menu
        1 - Show ${productType} stock
        2 - Add a ${productType}
        3 - Remove a ${productType}
        4 - Back
        `
      )
    );

    switch (option) {
      case 1:
        showProductStock();
        break;
      case 2:
        //example of a theme: pokemon, digimon or any other desing
        let theme = prompt(`Enter the theme of the ${productType}`);
        // size example: S M L XL for t-shirt M L for mugs
        let size = prompt(`Enter the size of the ${productType}`);
        // color example: any color excepto magenta
        let color = prompt(`Enter the color of the ${productType}`);
        let quantity = parseInt(prompt(`Enter the quantity of the ${productType} in stock`));
        let product = new Product(theme, productType, size, color, quantity);
        addProduct(product);
        break;
      case 3:
        let productIdToRemove = parseInt(prompt(`Enter the ID of the ${productType} to remove`));
        removeProduct(productIdToRemove);
        break;
      case 4:
        state = false;
        mainMenu();
        break;
      default:
        alert("Enter a valid option");
        break;
    }
  }
};

let state = true;
const mainMenu = () => {
  while (state) {
    let option = parseInt(
      prompt(
        `
      Welcome to our Store
      1 - T-shirt Options
      2 - Mug Options
      3 - Exit
      `
      )
    );
    switch (option) {
      case 1:
        // T-shirt menu
        productMenu('T-shirt');
        break;
      case 2:
        // Mug menu
        productMenu('Mug');
        break;
      case 3:
        state = false;
        break;
      default:
        alert("Enter a valid option");
        break;
    }
  }
};

mainMenu();
