export class Customer {
  constructor() { }

  createCustomer(customer) {
    this.name = customer.name;
    this.email = customer.email;
    console.log(`Customer: ${this.name}, ${this.email} has been created`);
  }

  destroyCustomer() {
    this.name = null;
    this.email = null;
    console.log(`Customer has been deleted`);
  }

  editCustomer(newCustomer) {
    this.name = newCustomer.name;
    this.email = newCustomer.email;
    console.log(`Customer: ${this.name}, ${this.email} has been updated`);
  }
  getCustomer() {
    console.log(`Customer: ${this.name}, ${this.email}`);
    return { name: this.name, email: this.email };
  }
}

export class Product {
  constructor() { }

  createProduct(product) {
    this.name = product.name;
    this.quantity = product.quantity;
    this.price = product.price;
    console.log(`Product: ${this.name} has been created`);
  }

  destroyProduct() {
    this.name = null;
    this.quantity = null;
    this.price = null;
    console.log(`Product has been deleted`);
  }

  editProduct(newProduct) {
    this.name = newProduct.name;
    this.quantity = newProduct.quantity;
    this.price = newProduct.price;
    console.log(`Product: ${this.name} has been updated`);
  }
  getProduct() {
    console.log(`Product: ${this.name}`);
    return { name: this.name, quantity: this.quantity, price: this.price };
  }
}

export class OrderDetail {
  constructor(quantity, price, product) {
    this.quantity = quantity;
    this.price = price;
    this.product = product;
  }
}

export class Order {
  constructor() { }

  createOrder(order) {
    this.date = order.date;
    this.amount = order.amount;
    this.details = order.details;
    this.customer = order.customer;
    console.log(`Order has been created`);
  }

  destroyOrder() {
    this.date = null;
    console.log(`Order has been deleted`);
  }

  editOrder(newOrder) {
    this.date = newOrder.date;
    this.amount = newOrder.amount;
    this.details = newOrder.details;
    this.customer = newOrder.customer;
    console.log(`Order has been updated`);
  }

  getOrder() {
    return {
      date: this.date,
      amount: this.amount,
      details: this.details.length,
      customer: this.customer.name,
    };
  }
}