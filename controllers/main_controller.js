app.controller('MainController', function ($scope, teaService) {
$scope.vw = {}
 $scope.quantity = function(product, quantity){
   teaService.add(product, quantity)
   $scope.vw.cartQuantity= teaService.inventory.length;

 }
$scope.amount = 1;

$scope.products = [
  {
      "_id": "55c8ee82152165d244b98300",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "lightweight", "adjustable"]
  },

  {
      "_id": "55c8ee82152165d244b98301",
      "name": "Arc'teryx Altra 65",
      "specifications": "210D nylon 6,6 ripstop silicone treated, 500D ATY nylon 6,6 silicone treated PU, [collar] 100D nylon 6,6 mini ripstop with silicone coating, [back panel] HD 80 polyethylene foam, [shoulder straps] 500D ATY nylon 6,6 silicone treated PU, Hypercell foam, [shoulder strap lining] Spacermesh",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/ARC/ARC3537/DIARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "awesome", "responsive"]
  },
  {
      "_id": "55c8ee82152165d244b98302",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "responsive", "lumbar support"]
  },
  {
      "_id": "55c8ee82152165d244b98303",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "winter", "hydration compatible"]
  },
  {
      "_id": "55c8ee82152165d244b98304",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "detachable daypack", "adjustable", "compression straps"]
  },
  {
      "_id": "55c8ee82152165d244b98305",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "lightweight", "summer"]
  },
  {
      "_id": "55c8ee82152165d244b98306",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "hydration compatible", "summer"]
  },
  {
      "_id": "55c8ee82152165d244b98307",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "compression straps", "awesome"]
  },
  {
      "_id": "55c8ee82152165d244b98308",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "lumbar support", "summer", "hydration compatible"]
  },
  {
      "_id": "55c8ee82152165d244b98309",
      "name": "Gregory Baltoro 65",
      "specifications": "210D Nylon, 3967 cu in, Response AFS, aluminum stay, Auto-Cant harness, LifeSpan EVA foam",
      "weight": 5,
      "price": 29800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "detachable daypack", "summer"]
  }
]



})
