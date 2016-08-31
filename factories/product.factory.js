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


    },
    getOrderTotal: function (){
      zero = 0
      total = []
      for (var i = 0; i < this.inventory.length; i++) {

        var price = this.inventory[i].price;
        var quantity = this.inventory[i].quantity;
        var subTotal = Number(price * quantity)
        total.push(subTotal)
        }
        if (total == 0) {
          return zero
        }else{
      var orderTotal = total.reduce(function (a, b) {
        return a+=b;
      })
      return orderTotal
      }
    },
  }
})
