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
      "weight": 4,
      "price": 47500,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/ARC/ARC3537/DIARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "awesome", "responsive"]
  },
  {
      "_id": "55c8ee82152165d244b98302",
      "name": "Osprey Packs Aether 60 Backpack",
      "specifications": "210D nylon, 75D nylon stretch ripstop, 500D nylon, LightWire frame, Airscape back panel, 6061-T6 center stay",
      "weight": 4.7,
      "price": 25900,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/OSP/OSP0322/BONGN.jpg?$cimg$",
      "__v": 0,
      "categories": [ "responsive", "lumbar support"]
  },
  {
      "_id": "55c8ee82152165d244b98303",
      "name": "Haglöfs Nejd 65 Backpack ",
      "specifications": "210D ripstop nylon, 420D ATY oxford nylon, 600D oxford polyester",
      "weight": 2.9,
      "price": 30900,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/HAG/HAG006A/DEEBL.jpg?$cimg$",
      "__v": 0,
      "categories": [ "winter", "hydration compatible"]
  },
  {
      "_id": "55c8ee82152165d244b98304",
      "name": "The North Face Terra 65 Backpack",
      "specifications": "600D polyester, 420D nylon ripstop, 1200D polyester",
      "weight": 4.5,
      "price": 17800,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/TNF/TNF00D1/ESTBLUGRE.jpg?$cimg$",
      "__v": 0,
      "categories": [ "detachable daypack", "adjustable", "compression straps"]
  },
  {
      "_id": "55c8ee82152165d244b98305",
      "name": "Deuter ACT Lite 65+10 Backpack",
      "specifications": "600D polyester, 210D nylon ripstop, 420D nylon",
      "weight": 4.9,
      "price": 20900,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/DTR/DTR001N/GRA.jpg?$cimg$",
      "__v": 0,
      "categories": [ "lightweight", "summer"]
  },
  {
      "_id": "55c8ee82152165d244b98306",
      "name": "Kelty Trekker Backpack",
      "specifications": "External aluminum frame, Adjustable suspension, Sleeping bag compartment, Hydration compatible",
      "weight": 5.5,
      "price": 17900,
      "inStock": true,
      "rating": 3,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "hydration compatible", "summer"]
  },
  {
      "_id": "55c8ee82152165d244b98307",
      "name": "Mammut Trion Guide 45 Plus 7 Backpack",
      "specifications": "[body] 420D nylon ripstop, [base] 600D nylon",
      "weight": 3.7,
      "price": 17900,
      "inStock": true,
      "rating": 2,
      "imageUrl": "http://content.backcountry.com/images/items/900/MAM/MAM00CL/POP_D2.jpg?$cimg$",
      "__v": 0,
      "categories": [ "compression straps", "awesome"]
  },
  {
      "_id": "55c8ee82152165d244b98308",
      "name": "Mountain Hardwear South Col 70 OutDry Backpack ",
      "specifications": "[body] 400D HD nylon, [membrane/laminate] OutDry, [bottom] 840D HT ballistic nylon, [front] HardWear X-Ply ripstop",
      "weight": 3.4,
      "price": 29900,
      "inStock": true,
      "rating": 3,
      "imageUrl": "http://content.backcountry.com/images/items/900/GRE/GRE002A/SPARD.jpg?$cimg$",
      "__v": 0,
      "categories": [ "lumbar support", "summer", "hydration compatible"]
  },
  {
      "_id": "55c8ee82152165d244b98309",
      "name": "Mountainsmith Apex 100 Backpack",
      "specifications": "305D Cordura HP, 610D Cordura HP, 210D nylon",
      "weight": 4.5,
      "price": 24900,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://content.backcountry.com/images/items/900/MOU/MOU002L/ANVGRE.jpg?$cimg$",
      "__v": 0,
      "categories": [ "detachable daypack", "summer"]
  }
]



})
