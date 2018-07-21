let cart = {
  items: [],
  
  addItem(price, quantity, pizzaName) {
    if (! this.incrementIfExisting(pizzaName, quantity)) { this.newItem(price, quantity, pizzaName)} 
    this.display();
  },

  incrementIfExisting(pizzaName, quantity) {
    let pizza = this.items.find( item => item.name === pizzaName);
    if (pizza) {
      pizza.quantity += quantity;
      return true;
    }
    return false;
  },

  newItem(price, quantity, pizzaName) {
    this.items.push({price: price, quantity: quantity, name: pizzaName});
  },

  total() {
    let sum = 0;
    this.items.forEach( (item) => {
      sum += item.price * item.quantity;
    });
    return sum.toFixed(2);
  },

  display() {
    let el = document.getElementById('cart');
    let contents = '<h3>Your Cart</h3>';
    this.items.forEach( (item) => {
      contents += `${item.quantity}ea. ${item.name}<br />`
    });
    contents += `<h3>Total: $${this.total()}</h3>`;
    el.innerHTML = contents;
  }
};

let buttons = document.getElementsByTagName('button');
for (let i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', (event => {
    let quantity = Number(event.target.nextSibling.nextSibling.value);
    let price = Number(event.target.parentNode.querySelector('.pricetag').innerHTML);
    let pizzaName = event.target.parentNode.querySelector('h5').innerHTML;
    cart.addItem(price, quantity, pizzaName);
  }));
}