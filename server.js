var http 		    = require('http');
var qs 			    = require('querystring');
var cls 		    = require('./controllers');
var serverPort 	= process.env.PORT || 3000;
var url         = require('url');

///////////////////////////////////////////   DATA CREATION FUNCTIONS /////////////////////////////////////////////////////////////////////////

function addSampleData(response) {
  var cat = [
    {_id:1,name:"electronics",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:2,name:"kitchen",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:3,name:"electrical",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:4,name:"clothes",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:5,name:"books",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:6,name:"homedecor",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:7,name:"fashion",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:8,name:"mens wear",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:9,name:"sofa",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:10,name:"furniture",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:11,name:"microwave",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:12,name:"shirt",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:13,name:"mobile",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:14,name:"trekking",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:15,name:"games",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:16,name:"toys",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:17,name:"novel",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:18,name:"study",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:19,name:"sofa",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"}
  ];

  var users = [
    {_id:1,name:"rishabh",password:"123cxs4",address:"delhi",email:"r1@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:2,name:"csa",password:"12s34",address:"delhi",email:"r2@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:3,name:"abx",password:"12xsa34",address:"delhi",email:"r3@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:4,name:"sda",password:"12cds34",address:"delhi",email:"r4@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:5,name:"dasd",password:"1234",address:"delhi",email:"r5@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:6,name:"ss",password:"1234",address:"delhi",email:"r6@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:7,name:"sas",password:"1234",address:"delhi",email:"r7@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:8,name:"cds",password:"1234",address:"delhi",email:"r8@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:9,name:"dcs",password:"1234",address:"delhi",email:"r9@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:10,name:"vds",password:"1234",address:"delhi",email:"r@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT"}
  ];
  

  var sellers = [
    {_id:1,name:"rishabh",password:"123cxs4",address:"delhi",email:"r1@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110098,110032], rating:1},
    {_id:2,name:"csa",password:"12s34",address:"delhi",email:"r2@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110022,110032], rating:2},
    {_id:3,name:"abx",password:"12xsa34",address:"delhi",email:"r3@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110092,110032], rating:5},
    {_id:4,name:"sda",password:"12cds34",address:"delhi",email:"r4@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110118,110032], rating:3},
    {_id:5,name:"dasd",password:"1234",address:"delhi",email:"r5@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110228,110032], rating:1.8},
    {_id:6,name:"ss",password:"1234",address:"delhi",email:"r6@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110098,110032], rating:2},
    {_id:7,name:"sas",password:"1234",address:"delhi",email:"r7@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110098,110032], rating:1},
    {_id:8,name:"cds",password:"1234",address:"delhi",email:"r8@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110098,110032], rating:2},
    {_id:9,name:"dcs",password:"1234",address:"delhi",email:"r9@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110098,110032], rating:3},
    {_id:10,name:"vds",password:"1234",address:"delhi",email:"r@gmail.com",contact:"121312312313",added_at : "Tue, 23 Oct 2015 14:06:02 GMT", pin:[110098,110032], rating:1}
  ];
  

  var purchases = [
    {_id:1, product_id:[2, 1] , quantity: [2, 2], user_id:1 , payment:"cash", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:2, product_id:[8] , quantity: [1], user_id:2 , payment:"credit card", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:3, product_id:[1, 3] , quantity: [1, 2], user_id:5 , payment:"net banking", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:4, product_id:[4] , quantity: [2], user_id:3 , payment:"cash", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:5, product_id:[7] , quantity: [1], user_id:4, payment:"cash", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:6, product_id:[5] , quantity: [1], user_id:6 , payment:"credit card", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:7, product_id:[3, 4] , quantity: [5, 4], user_id:7 , payment:"cash", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:8, product_id:[5, 7] , quantity: [2, 2], user_id:5 , payment:"debit card", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:9, product_id:[1, 2] , quantity: [1, 1], user_id:2 , payment:"paytm", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"},
    {_id:10, product_id:[2] , quantity: [3], user_id:1 , payment:"cash", added_at : "Tue, 23 Oct 2015 14:06:02 GMT"}
  ];
  

  var products = [
    {
      "_id" : 1,
      "name" : "IFB S345XD3 Microwave",
      "price" : 900,
      "category" : [1, 2, 3],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 17 Oct 2017 14:06:02 GMT",
      "description" : "heats up stuff",
      "brand": "IFB Electronics",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 1, 
      "add_info": {"power":"400kW", "star_rating": 2}
    }, 
    {
      "_id": 2,
      "name" : "Samsung SS34045 Micro Model 2017",
      "price" : 500,
      "category" : [1, 2, 3],
      "quantity" : 100,
      "added_at" : "Tue, 24 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 17 Oct 2016 14:06:02 GMT",
      "description" : "A quality product at cheap price",
      "brand": "Haeir",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 3, 
      "add_info": {"power":"200kW", "star_rating": 4}
    },
    {
      "_id" : 3,
      "name" : "Tommy Hilfiger Pure Cotton Slim Shirt",
      "price" : 1200,
      "category" : [4, 5, 6],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2016 14:06:02 GMT",
      "description" : "White Shirt. Value for money.",
      "brand": "Tommy",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 4, 
      "add_info": {"color": "white", "material": "cotton"}
    }, 
    {
      "_id" : 4,
      "name" : "Samsung Galaxy S8",
      "price" : 11200,
      "category" : [1, 7],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "description" : "A good make phone from reputed brand.",
      "brand": "Samsung",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 2, 
      "add_info": {"memory": "16 GB", "ram": "4 GB", "camera": "13 MP"}
    },
    {
      "_id" : 5,
      "name" : "Velvet Sofa set",
      "price" : 22200,
      "category" : [8, 9, 10],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "description" : "6 Seater sofa set for drawing room",
      "brand": "Urban Ladder",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 1, 
      "add_info": {"area":"2200 sq. ft.", "material":"Velvet"}
    },
    {
      "_id" : 6,
      "name" : "Wildcraft Trekking Bag",
      "price" : 2000,
      "category" : [11, 12, 13],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "description" : "Water proof good quality backpack.",
      "brand": "Wildcraft",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 3, 
      "add_info": {"capacity": "32 litres", "waterproof": "yes", "color": "red"}
    },
    {
      "_id" : 7,
      "name" : "OnePlus 5",
      "price" : 2300,
      "category" : [1, 7],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "description" : "Best in class camera",
      "brand": "OnePlus",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 2, 
      "add_info": {"processor":"Snapdragon 835", "camera": "22 MP", "rom": "16 GB"}
    }, 
    {
      "_id" : 8,
      "name" : "Fidget Spinner Premsons Yanky",
      "price" : 500,
      "category" : [14, 15, 16],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "description" : "You need to own it to know it! Only for people with swag!",
      "brand": "Premsons",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 5, 
      "add_info": {"color": "multicolor", "spin_time": "2 min"}
    },
    {
      "_id" : 9,
      "name" : "2 States By Chetan Bhagat",
      "price" : 300,
      "category" : [17, 19],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "description" : "A romanctic love story",
      "brand": "Novotel Printing Press",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 3, 
      "add_info": {"writer": "Chetan Bhagat", "pages": 240, "bind": "hardbind"}
    },
    {
      "_id": 10,
      "name" : "Coding Interviews Crack it",
      "price" : 200,
      "category" : [18, 19],
      "quantity" : 150,
      "added_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "last_updated_at" : "Tue, 23 Oct 2015 14:06:02 GMT",
      "description" : "heats up stuff",
      "brand": "Arihant Publications",
      "image_url" : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
      "seller_id" : 2, 
      "add_info": {"author": "MS Rishabh", "pages": 440}
    }
  ];


  cls.addManyCategories(cat,function(result) {
    var res = {message: "Categories added"};
    console.log(JSON.stringify(res));
    cls.addManyUsers(users,function(result) {
      var res = {message: "Users added"};
      console.log(JSON.stringify(res));
      cls.addManySellers(sellers,function(result) {
        var res ={message: "Sellers added"};
        console.log(JSON.stringify(res));

        cls.addManyPurchases(purchases,function(result) {
          var res = {message: "purchases added"};
          console.log(JSON.stringify(res));

          cls.addManyProducts(products,function(result) {
            var res = {message: "products added"};
            console.log(JSON.stringify(res));

            response.writeHead(200, {'Content-Type': 'application/json'});
            var result = {message: "Sample data added"};
            response.write(JSON.stringify(result));
            response.end();
          });
        });
      });

    });
  });
}

function deleteData(response) {
  cls.removeProducts({},function(result) {
    var res = {message: "product removed"};
    console.log(JSON.stringify(res));
    cls.removeUsers({},function(result) {
    var res = {message: "Users removed"};
    console.log(JSON.stringify(res));
    cls.removeSellers({},function(result) {
    var res = {message: "Sellers removed"};
    console.log(JSON.stringify(res));
    cls.removePurchases({},function(result) {
    var res = {message: "Purchases removed"};
    console.log(JSON.stringify(res));
    cls.removeCategories({},function(result) {
    var res = {message: "Categories removed"};
    console.log(JSON.stringify(res));

    addSampleData(response);
  });
  });

  });
  });
  });
}

var addApiKeys = function () {
  var keys = [{"_id": 1, "API_KEY": "rish", added_at: "Tue, 23 Oct 2015 14:06:02 GMT", "level":4},
              {"_id": 2, "API_KEY": "rishabh", added_at: "Tue, 23 Oct 2015 14:06:02 GMT", "level":1},
              {"_id": 3, "API_KEY": "rish123", added_at: "Tue, 23 Oct 2015 14:06:02 GMT", "level":2},
              {"_id": 4, "API_KEY": "rish567", added_at: "Tue, 23 Oct 2015 14:06:02 GMT", "level":3},
              {"_id": 5, "API_KEY": "rish56453", added_at: "Tue, 23 Oct 2015 14:06:02 GMT", "level":2}];
  cls.addManyKeys(keys, function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    var res = {message: "keys added"};
    console.log(JSON.stringify(res));
  });
}

////////////////////////////////////////    HELPER FUNCTIONS         ///////////////////////////////////////////////////////////////////////

function isArrayOfInts(str) {
  if(str == null)
      return false;
  var arr = str.trim().split("[");
  if (arr.length != 2)
    return false;
  else{
    arr = arr[1].trim().split("]");
    if(arr.length != 2)
      return false;
    else{
      arr = arr[0].trim().split(",");
      for (var i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i].trim());
        if (isNaN(arr[i]))
          return false;
      }
      return arr;
    }
  }
}

function isValidMode(str) {
  if(str === "paytm" || str === "cash" || str === "credit card" || str === "debit card")
    return true;
  else
    return false;
}

function isJsonString(str) {
    if (str == null)
      return false;
    try {
      return JSON.parse(str);
    } catch (e) {
        return false;
    }
}

//////////////////////////////////////////////     MAIN FUNCTION        ////////////////////////////////////////////////////////////////////////

server = http.createServer(function (request, response) {

	  var myurl = url.parse(request.url).pathname;
    var query = url.parse(request.url,true).query;


  	if(request.method === "PATCH") {

      if(myurl === "/products"){

        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
              response.writeHead(413, 'Entity too large', {'Content-Type': 'application/json'});
              var result = {message: "Data too large"};
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
          }
        });

        request.on('end', function() {

          var data = qs.parse(requestBody);
          var apiKey = data["API_KEY"];
          if(apiKey == undefined) {
            response.writeHead(401, {'Content-Type': 'application/json'});
            var result = {message: "API KEY is not given"};
            response.end(JSON.stringify(result));
            return;
          }

          cls.getKeyByQuery({API_KEY: apiKey}, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(401, {'Content-Type': 'application/json'}); //change error
              response.end(JSON.stringify(result));
              return;
            } else {
              if(result == null){
                response.writeHead(401, {'Content-Type': 'application/json'});
                var result = {message: "API KEY is not authorized"};
                response.end(JSON.stringify(result));
                return;
              }
            }
          });
          var added = new Date(Date.now()).toUTCString();
          var newVal = {};
          if(data.name != undefined)
            newVal.name = data.name;
          
          if(data.price != undefined){
            data.price = parseInt(data.price);
            if(!isNaN(data.price))
              newVal.price = data.price;
          }
          
          if(data.qty != undefined){
            data.qty = parseInt(data.qty);
            if(!isNaN(data.qty))
              newVal.quantity = data.qty;
          }
          
          if(data.brand != undefined)
            newVal.brand = data.brand;
          
          if(data.seller_id != undefined){
            data.seller_id = parseInt(data.seller_id);
            if(!isNaN(data.seller_id))
              newVal.seller_id = data.seller_id;
          }

          if(data.category_id != undefined){
            data.category_id = isArrayOfInts(data.category_id);
            if(data.category_id)
              newVal.category = data.category_id;
          }
          
          if(data.add_info != undefined){
            data.add_info = isJsonString(data.add_info);
            if(data.add_info)
              newVal.add_info = data.add_info;
          }
          
          if(data.desc != undefined)
            newVal.description = data.desc;
          
          newVal.last_updated_at = added;

          console.log(JSON.stringify(newVal));
          if((data.price != undefined && isNaN(data.price)) || (data.qty != undefined && isNaN(data.qty)) || 
            (data.seller_id != undefined && isNaN(data.seller_id)) || (data.add_info != undefined && !(data.add_info)) || 
            (data.category_id != undefined && !(data.category_id)))  {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var result = {message: "Incomplete or wrong fields."};
            //response.write(JSON.stringify(result));
            response.end(JSON.stringify(result));
          } else { 
            cls.updateProduct({_id:id}, {$set: newVal}, function(err, result) {
              if(err) {
                console.log(err);
                var result = {message: err};
                response.writeHead(404, {'Content-Type': 'application/json'});
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                var result = {message: "Product Updated"};
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              }
            });
          }
        });
      }
    } else if(request.method === "DELETE") {

      if(myurl === "/products"){

        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
              response.writeHead(413, 'Entity too large', {'Content-Type': 'application/json'});
              var result = {message: "Data too large"};
              response.end(JSON.stringify(result));
          }
        });

        request.on('end', function() {
          var data = qs.parse(requestBody);
          var apiKey = data["API_KEY"];
          if(apiKey == undefined) {
            response.writeHead(401, {'Content-Type': 'application/json'});
            var result = {message: "API KEY is not given"};
            response.end(JSON.stringify(result));
            return;
          }

          cls.getKeyByQuery({API_KEY: apiKey}, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(401, {'Content-Type': 'application/json'}); //change error
              response.end(JSON.stringify(result));
              return;
            } else {
              if(result == null){
                response.writeHead(401, {'Content-Type': 'application/json'});
                var result = {message: "API KEY is not authorized"};
                response.end(JSON.stringify(result));
                return;
              }
            }
          });

          console.log(data);
          id = data.id;
          if(isNaN(id)) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            res = {message: "Please specify id of the product to be removed."}
            //response.write(JSON.stringify(res));
            response.end(JSON.stringify(res));
          } else {
            cls.removeProduct({_id : id}, function(err, result) {
              if(err) {
                console.log(err);
                var result = {message: err};
                response.writeHead(404, {'Content-Type': 'application/json'});
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                var result = {message: "Product deleted"};
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              }
            });
          }
        });

      }
      
    } else if(request.method === "GET") {

      var apiKey = query["API_KEY"];
      if(apiKey == undefined) {
        response.writeHead(401, {'Content-Type': 'application/json'});
        var result = {message: "API KEY is not given"};
        response.end(JSON.stringify(result));
        return;
      }

      cls.getKeyByQuery({API_KEY: apiKey}, function(err, result) {
        if(err) {
          console.log(err);
          var result = {message: err};
          response.writeHead(401, {'Content-Type': 'application/json'}); //change error
          response.end(JSON.stringify(result));
          return;
        } else {
          if(result == null){
            response.writeHead(401, {'Content-Type': 'application/json'});
            var result = {message: "API KEY is not authorized"};
            response.end(JSON.stringify(result));
            return;
          }
        }
      });

      if(myurl === "/initialize") {
        
        // Just for adding sample data & removing previous data
        deleteData(response);

      } else if(myurl === "/users"){ 

        var id = parseInt(query.id);
        console.log("id:: " + id + typeof(id));
        if(isNaN(id))
      		cls.getAllUsers(function(err, result) {
        		//console.log("fdsfsf:: " + result);
        		if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
            	//response.write(JSON.stringify(result));
            	response.end(JSON.stringify(result));
            }  
     	 	  });
        else {
          cls.getUserById(id, function(err, result) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            //response.write(JSON.stringify(result));
            response.end(JSON.stringify(result));
          });
        }

      }
      else if(myurl === "/categories"){
        
        var id = parseInt(query.id);
        if(!isNaN(id)){
          cls.getCategoryById(id, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } 
          });
        } else{
          // get all categories
          cls.getAllCategories(function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } 
          });
        }

      } else if(myurl === "/products"){
        
        var id = parseInt(query["id"]);
        var c_id = parseInt(query["category_id"]);
        
        if(!isNaN(id)){
          cls.getProductById(id, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } 
          });
        } else if(!isNaN(c_id)){
          var query = {category: { $in: [c_id] }};
          cls.getProductsByQuery(query, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } 
          });
        } else{
          cls.getAllProducts(function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } 
          });
        }

      } else if(myurl === "/purchases"){
          
        var p_id = parseInt(query["product_id"]);
        var s_id = parseInt(query["seller_id"]);
        var u_id = parseInt(query["user_id"]);

        if(!isNaN(s_id) && !isNaN(p_id)) {
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.write(JSON.stringify({message: "Seller id and product id cannot be used together."}));
          response.end(); 
        } else if(!isNaN(p_id) && !isNaN(u_id)) {
          // for given product id and user id
          var query = {user_id: u_id, product_id: { $in: [p_id] }};
          cls.getPurchasesByQuery(query, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            }
          });
         } else if(!isNaN(s_id)){
          // get seller id
          //console.log(seller_id);
          cls.getPurchasesBySeller(s_id, function(err1, err2, result) {
            if(err1) {
              console.log(err1);
              var result = {message: err1};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else if(err2) {
              console.log(err2);
              var result = {message: err2};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            }
          });

        } else if(!isNaN(p_id)){
          var query = {product_id: { $in: [p_id] }};
          cls.getPurchasesByQuery(query, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            }
          });
        } else if(!isNaN(u_id)) {
          var query = {user_id: u_id};
          cls.getPurchasesByQuery(query, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            }
          });        
        } else{
          cls.getAllPurchases(function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            }
          });
        }
      } 
      else if(myurl === "/sellers"){
        
        var id = parseInt(query["id"]);
        if(isNaN(id)) {
          cls.getAllSellers(function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            }
          });
        }
        else {
          // get users by id
          cls.getSellerById(id, function(err, result) {
            if(err) {
              console.log(err);
              var result = {message: err};
              response.writeHead(404, {'Content-Type': 'application/json'}); //change error
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            }
          });
        }
      } 
      else {
    		
          response.writeHead(404, 'Resource Not Found', {'Content-Type': 'application/json'});
      		var result = {message: "Request not Supported"};
      		response.end(JSON.stringify(result));
    	}


  	} else if(request.method === "POST") {
        
        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
              response.writeHead(413, 'Entity too large', {'Content-Type': 'application/json'});
              var result = {message: "Data too large"};
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
          }
        });

        if (myurl === "/users") {
          request.on('end', function() {
            var data = qs.parse(requestBody);
            var apiKey = data["API_KEY"];
            //var data = JSON.parse(requestBody);
            var added = new Date(Date.now()).toUTCString();
            data.id = parseInt(data.id);
            if(isNaN(data.id) || data.name == undefined || data.pwd == undefined || 
              (data.email != undefined && ((data.email).indexOf("@") == -1 || (data.email).indexOf(".") == -1 || 
                (data.email).indexOf("@")+1 == (data.email).indexOf(".") || (data.email).indexOf(".") >= data.email.length-2)) || 
              (data.contact != undefined && ((data.contact).length != 10 || data.contact != parseInt(data.contact))))  {
              response.writeHead(200, {'Content-Type': 'application/json'});
              var result = {message: "Incomplete or wrong fields."};
              //response.write(JSON.stringify(result));
              response.end(JSON.stringify(result));
            } else {
              if(data.email == undefined)
                data.email = "";
              if(data.add == undefined)
                data.add = "";
              if(data.contact == undefined)
                data.contact = "";
              var user = [{_id:data.id, name:data.name, password:data.pwd,
                  address:data.add, email:data.email, contact:data.contact, added_at : added}];
              cls.addManyUsers(user, function(err, result) { 
                if(err) {
                  console.log(err);
                  var result = {message: err};
                  response.writeHead(404, {'Content-Type': 'application/json'}); //change error
                  //response.write(JSON.stringify(result));
                  response.end(JSON.stringify(result));
                } else {
                  response.writeHead(200, {'Content-Type': 'application/json'});
                  var result = {message: "User added"};
                  //response.write(JSON.stringify(result));
                  response.end(JSON.stringify(result));
                }
              });
            }
          });


      } else if(myurl === "/products") {
        request.on('end', function() {
          var data = qs.parse(requestBody);
          //var data = JSON.parse(requestBody);
          var added = new Date(Date.now()).toUTCString();
          var updated = "";
          data.id = parseInt(data.id);
          data.price = parseInt(data.price);
          data.qty = parseInt(data.qty);
          data.seller_id = parseInt(data.seller_id);
          if(data.category_id != undefined)
            data.category_id = isArrayOfInts(data.category_id);
          if(data.add_info != undefined)
            data.add_info = isJsonString(data.add_info);
          console.log(data);
          if(isNaN(data.id) || data.name == undefined || isNaN(data.price) || isNaN(data.qty) || data.brand == undefined || isNaN(data.seller_id) || (data.add_info != undefined && !(data.add_info)) || (data.category_id != undefined && !(data.category_id)))  {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var result = {message: "Incomplete or Wrong filled fields."};
            response.write(JSON.stringify(result));
            response.end();
          } else {
            if (data.add_info == undefined)
              data.add_info = {};
            if (data.category_id == undefined)
              data.category_id = []
            if (data.image_url == undefined)
              data.image_url = []
            if (data.desc == undefined)
              data.desc = "";
            var product = [{_id:parseInt(data.id), name:data.name, price:parseInt(data.price),
                category:data.ctegory_id, quantity:parseInt(data.qty), added_at:added,
                last_updated_at:updated, description:data.desc, brand:data.brand, 
                image_url:data.image_url, seller_id : parseInt(data.seller_id), add_info:data.add_info}];
            cls.addManyProducts(product, function(err, result) { 
              if(err) {
                console.log(err);
                var result = {message: err};
                response.writeHead(404, {'Content-Type': 'application/json'}); //change error
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                var result = {message: "Product added"};
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              }
            });
          }
        });
      } else if(myurl === "/categories") {
        request.on('end', function() {
          var data = qs.parse(requestBody);
          //var data = JSON.parse(requestBody);
          var added = new Date(Date.now()).toUTCString();
          data.id = parseInt(data.id);
          if(isNaN(data.id) || data.name == undefined) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var result = {message: "Incomplete or Wrong filled fields."};
            //response.write(JSON.stringify(result));
            response.end(JSON.stringify(result));
          } else {
            var category = [{_id:parseInt(data.id), name:data.name, added_at:added}];
            cls.addManyCategories(category, function(err, result) { 
              if(err) {
                console.log(err);
                var result = {message: err};
                response.writeHead(404, {'Content-Type': 'application/json'}); //change error
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                var result = {message: "Product added"};
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              }
            });
          }
        });
      } else if(myurl === "/sellers") {
        request.on('end', function() {
          var data = qs.parse(requestBody);
          //var data = JSON.parse(requestBody);
          var added = new Date(Date.now()).toUTCString();
          data.id = parseInt(data.id);
          if(data.pin != undefined)
            data.pin = isArrayOfInts(data.pin);
          if(isNaN(data.id) || data.name == undefined || data.pwd == undefined || data.add == undefined || 
            data.contact == undefined || (data.contact != undefined && ((data.contact).length != 10 || data.contact != parseInt(data.contact))) || 
            data.pin == undefined || !(data.pin)) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var result = {message: "Incomplete or Wrong filled fields."};
            //response.write(JSON.stringify(result));
            response.end(JSON.stringify(result));
          } else {
            if (data.email == undefined)
              data.email = "";
            var rate = NaN;
            var product = [{_id:data.id, name:data.name, password:data.pwd,
                address:data.add, contact:data.contact, added_at:added,
                email: data.email, pin:data.pin, rating: rate}];
            cls.addManySellers(product, function(err, result) { 
              if(err) {
                console.log(err);
                var result = {message: err};
                response.writeHead(404, {'Content-Type': 'application/json'}); //change error
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                var result = {message: "Seller added"};
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              }
            });
          }
        });
      } else if(myurl === "/purchases") {
        // A catch here :  reduce the quantity of product also in the product table :)
        request.on('end', function() {
          var data = qs.parse(requestBody);
          //var data = JSON.parse(requestBody);
          var added = new Date(Date.now()).toUTCString();
          data.id = parseInt(data.id);
          data.user_id = parseInt(data.user_id);
          if(data.payment != undefined)
            data.payment = (data.payment).toLowerCase();
          if(data.product_id != undefined)
            data.product_id = isArrayOfInts(data.product_id);
          if(data.qty != undefined)
            data.qty = isArrayOfInts(data.qty);

          if(isNaN(data.id) || data.product_id == undefined || !(data.product_id) || isNaN(data.user_id) || data.qty == undefined || 
            !(data.qty) || data.payment == undefined || !isValidMode(data.payment))  {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var result = {message: "Incomplete or Wrong filled fields."};
            //response.write(JSON.stringify(result));
            response.end(JSON.stringify(result));
          } else {
            var product = [{_id:data.id, product_id:data.product_id,
                user_id:data.user_id, quantity:data.qty, added_at:added, payment:data.payment}];
            cls.addManyPurchases(product, function(err, result) { 
              if(err) {
                console.log(err);
                var result = {message: err};
                response.writeHead(404, {'Content-Type': 'application/json'}); //change error
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              } else {
                for (var i=0; i<data.product_id.length; i++){
                  var query = {_id: data.product_id[i]};
                  var newVal = {$inc: {quantity: -1*data.qty[i] }};
                  cls.updateProduct(query, newVal, function(err, res){
                    if(err) {
                      console.log(err);
                      var resolveStr = "[";
                      for(var j=0; j<i; j++)
                        resolveStr += product_id[j].toString();
                      resolveStr += ']';
                      var result = {message: err, resolve: "Quantities have been updated for following product ids :: " + resolveStr + " . Please resolve!"};
                      response.writeHead(404, {'Content-Type': 'application/json'}); //change error
                      //response.write(JSON.stringify(result));
                      response.end(JSON.stringify(result));
                    } 
                  }); //do whatever you want.....
                }

                response.writeHead(200, {'Content-Type': 'application/json'});
                var result = {message: "Purchase added"};
                //response.write(JSON.stringify(result));
                response.end(JSON.stringify(result));
              }
            });
          }
        });
      }
      else {
          response.writeHead(404, 'Resource Not Found', {'Content-Type': 'application/json'});
          var result = {message: "Request not Supported"};
          //response.write(JSON.stringify(result));
          response.end(JSON.stringify(result));
      }

  } else {
      response.writeHead(405, 'Method Not Supported', {'Content-Type': 'application/json'});
      var result = {message: "Method not Supported"};
        //response.write(JSON.stringify(result));
        response.end(JSON.stringify(result));
  }
}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);
module.exports = server;