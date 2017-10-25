var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
//var url = "mongodb://r1:r1@ds231245.mlab.com:31245/onlinestore-rishabh";
var url = process.env.MONGODB_URI;
const cls = module.exports;

/*
Collections:
users
sellers
products
categories
purchases
*/

// module.exports.initialize = function() {
//   MongoClient.connect(url, function(err, db) {
//     db.createCollection("users", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created! - users");
//       db.close();
//     });
//     db.createCollection("sellers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created! - sellers");
//       db.close();
//     });
//     db.createCollection("products", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created! - products");
//       db.close();
//     });
//     db.createCollection("categories", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created! - categories");
//       db.close();
//     });
//     db.createCollection("purchases", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created! - purchases");
//       db.close();
//     });
//   });
// }

//get all
module.exports.getAllProducts = function(callback){
	MongoClient.connect(url, function(err, db) {
    	if (err) throw err;
    	db.collection("products").find({}).toArray(function(err, res) {
      		console.log("All products fetched! " + res.length.toString());
      		db.close();
      		callback(err, res);
    	});
  	});
}

//get all
module.exports.getAllUsers = function(callback){
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("users").find({}, {password:0}).toArray(function(err, res) {
          console.log("All users fetched! " + res.length.toString());
          db.close();
          callback(err, res);
      });
    });
}

//get all
module.exports.getAllSellers = function(callback){
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("sellers").find({}, {password:0}).toArray(function(err, res) {
          console.log("All sellers fetched! " + res.length.toString());
          db.close();
          callback(err, res);
      });
    });
}

//get all
module.exports.getAllCategories = function(callback){
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("categories").find().toArray(function(err, res) {
          console.log("All categories fetched! " + res.length.toString());
          db.close();
          callback(err, res);
      });
    });
}

//get all
module.exports.getAllPurchases = function(callback){
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("purchases").find().toArray(function(err, res) {
          if (err) throw err;
          console.log("All purchases fetched! " + res.length.toString());
          db.close();
          callback(err, res);
      });
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//get by id
module.exports.getProductById = function(id, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var query = {_id: id};
      db.collection("products").findOne(query, function(err, res) {
          console.log("Product with id: " + id + " fetched!");
          db.close();
          callback(err, res);
      });
    }); 
}

//get by id
module.exports.getUserById = function(id, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var query = {_id: id};
      db.collection("users").findOne(query, {password:0}, function(err, res) {
          console.log("User with id: " + id + " fetched!");
          db.close();
          callback(err, res);
      });
    }); 
}

//get by id
module.exports.getSellerById = function(id, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var query = {_id: id};
      db.collection("sellers").findOne(query, {password:0}, function(err, res) {
          console.log("Seller with id: " + id + " fetched!");
          db.close();
          callback(err, res);
      });
    }); 
}

//get by id
module.exports.getCategoryById = function(id, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var query = {_id: id};
      db.collection("categories").findOne(query, function(err, res) {
          console.log("Category with id: " + id + " fetched!");
          db.close();
          callback(err, res);
      });
    }); 
}

//get by id
module.exports.getPurchaseById = function(id, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var query = {_id: id};
      db.collection("purchases").findOne(query, function(err, res) {
          console.log("Seller with id: " + id + " fetched!");
          db.close();
          callback(err, res);
      });
    }); 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.getProductsByQuery = function(query, callback) {
	MongoClient.connect(url, function(err, db) {
    	if (err) throw err; 
    	db.collection("products").find(query).toArray(function(err, res) {
        console.log("Products with query fetched!");
        db.close();
        callback(err, res);
      });
	});
}

module.exports.getKeyByQuery = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err; 
      db.collection("keys").findOne(query, function(err, res) {
        console.log("Key with query fetched!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.getPurchasesByQuery = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err; 
      db.collection("purchases").find(query).toArray(function(err, res) {
        console.log("Purchases with query fetched!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.getPurchasesBySeller = function(s_id, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      cls.getAllPurchases(function(err1, result) {

        cls.getAllProducts(function(err2, prodResult){

          finalRes = [];

          for(i=0; i< prodResult.length; i++) {

            seller_id = prodResult[i].seller_id;
            prod_id = prodResult[i]._id;
            
            if(seller_id == s_id) {

              for(j=0; j<result.length; j++) {

                if(result[j].product_id.indexOf(prod_id) > -1) {
                  finalRes.push(result[j]);
                }
              }
            }
          }

          console.log("Purchases with seller_id: " + s_id + " fetched!");
          callback(err1, err2, finalRes);
        });
      });
  });
}

module.exports.getUsersByQuery = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err; 
      db.collection("users").find(query).toArray(function(err, res) {
        console.log("Users with query fetched!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.getSellersByQuery = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err; 
      db.collection("sellers").find(query).toArray(function(err, res) {
        console.log("Sellers with query fetched!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.getCategoriesByQuery = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err; 
      db.collection("categories").find(query).toArray(function(err, res) {
        console.log("Categories with query fetched!");
        db.close();
        callback(err, res);
      });
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.addManyUsers = function(objArray, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("users").insertMany(objArray, function(err, res) {
        console.log(res.insertedCount + " users inserted!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.addManyKeys = function(objArray, callback) {
  MongoClient.connect(url, function(err, db) {
      db.collection("keys").insertMany(objArray, function(err, res) {
        console.log(res.insertedCount + " keys inserted!");
        db.close();
        callback(err, res);
      });
  });
}


module.exports.addManySellers = function(objArray, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("sellers").insertMany(objArray, function(err, res) {
        console.log(res.insertedCount + " sellers inserted!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.addManyProducts = function(objArray, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("products").insertMany(objArray, function(err, res) {
        console.log(res.insertedCount + " products inserted!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.addManyCategories = function(objArray, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("categories").insertMany(objArray, function(err, res) {
        console.log(res.insertedCount + " categories inserted!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.addManyPurchases = function(objArray, callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("purchases").insertMany(objArray, function(err, res) {
        console.log(res.insertedCount + " purchases inserted!");
        db.close();
        callback(err, res);
      });
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.updateProduct = function(query, newVal, callback) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("products").update(query, newVal, function(err, res) {
        console.log("Product updated!");
        db.close();
        callback(err, res);
      });
  });
}

module.exports.removeProduct = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("products").deleteOne(query, function(err, obj) {
      console.log("1 document deleted");
      db.close();
      callback(err, obj);
    });
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.removeProducts = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("products").remove(query, function(err, obj) {
      console.log("1 document deleted");
      db.close();
      callback(err, obj);
    });
  });
}

module.exports.removeUsers = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("users").remove(query, function(err, obj) {
      console.log("1 document deleted");
      db.close();
      callback(err, obj);
    });
  });
}

module.exports.removeSellers = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("sellers").remove(query, function(err, obj) {
      console.log("1 document deleted");
      db.close();
      callback(err, obj);
    });
  });
}

module.exports.removePurchases = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("purchases").remove(query, function(err, obj) {
      console.log("1 document deleted");
      db.close();
      callback(err, obj);
    });
  });
}

module.exports.removeCategories = function(query, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("categories").remove(query, function(err, obj) {
      console.log("1 document deleted");
      db.close();
      callback(err, obj);
    });
  });
}
