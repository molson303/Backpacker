app.factory('teaService', function () {
  return {
    inventory: [],
    add: function (product, quantity) {
      if (product.quantity >= 1) {
        product.quantity = quantity
      }else{
        product.quantity = quantity
        this.inventory.push(product);
      }
      // first check if tea is in car already
      // if it is, just update quantity
      // else push tea in cart

    },
    getOrderTotal: function (){
      total = []
      for (var i = 0; i < this.inventory.length; i++) {
        var price = this.inventory[i].price;
        var quantity = this.inventory[i].quantity;
        var subTotal = Number(price * quantity)
        total.push(subTotal)
        }
      var orderTotal = total.reduce(function (a, b) {
        return a+=b;
      })
      return orderTotal
    },
  }
})

// TO DO
// remove updates total but does not remove items
// submit updates subtotal but not total
