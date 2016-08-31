app.controller('CheckoutController', function ($scope, teaService) {
$scope.inventory = teaService.inventory;
$scope.orderTotal = teaService.getOrderTotal();

$scope.deleteItem = function(item) {
  for (var i = 0; i < $scope.inventory.length; i++) {
    if ($scope.inventory[i]._id === item._id) {
      $scope.inventory.splice(i , 1)
    }
  }
  $scope.orderTotal = teaService.getOrderTotal();
}
$scope.quantity = function(product, quantity){
  teaService.add(product, quantity)
  $scope.orderTotal = teaService.getOrderTotal();
}





// var total = $scope.inventory.map(function (item) {
//   return Number(item.price * item.quantity);
// }).reduce(function (a, b) {
//   return a += b;
// })   ANOTHER WAY TO DO THIS

// for each item calucate item.price * item.quantity
// add amout together to get total
//display to view


// var index = $scope.inventory.indexOf(delete)
// console.log(index);


});
