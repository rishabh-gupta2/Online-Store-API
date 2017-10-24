let chai        = require('chai');
let chaiHttp    = require('chai-http');
let server      = require('../server');
let should      = chai.should();
var expect      = chai.expect;
API_KEY         = 'rish';
chai.use(chaiHttp);

describe("testing server module", function() {
	

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    it('it should give 401 status; no API_KEY provided', (done) => {
        chai.request(server)
            .get('/initialize')
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.a('object');
                done();
            });
    });

	it('it should remove previous data & add sample data', (done) => {
        chai.request(server)
            .get('/initialize?API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              	done();
            });
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/users?API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
              	done();
            });
    });

	it('it should GET user with given id', (done) => {
        chai.request(server)
            .get('/users?id=2&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id').eql(2);
                res.body.should.have.property('name');
                res.body.should.have.property('password');
                res.body.should.have.property('contact');
                res.body.should.have.property('address');
                res.body.should.have.property('email');
                res.body.should.have.property('added_at');
              	done();
            });
    });

    it('it should GET all the categories', (done) => {
        chai.request(server)
            .get('/categories?API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(19);
              	done();
            });
    });

	it('it should GET category with given id', (done) => {
        chai.request(server)
            .get('/categories?id=2&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id').eql(2);
                res.body.should.have.property('name');
                res.body.should.have.property('added_at');
              	done();
            });
    });

    it('it should GET all the products', (done) => {
        chai.request(server)
            .get('/products?API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
              	done();
            });
    });

	it('it should GET product with given id', (done) => {
        chai.request(server)
            .get('/products?id=4&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id').eql(4);
                res.body.should.have.property('name');
                res.body.should.have.property('price');
                res.body.should.have.property('category');
                res.body.should.have.property('quantity');
                res.body.should.have.property('last_updated_at');
                res.body.should.have.property('description');
                res.body.should.have.property('brand');
                res.body.should.have.property('image_url');
                res.body.should.have.property('seller_id');
                res.body.should.have.property('added_at');
              	done();
            });
    });

    it('it should GET product with given category id', (done) => {
        chai.request(server)
            .get('/products?category_id=11&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              	done();
            });
    });

    it('it should GET all the sellers', (done) => {
        chai.request(server)
            .get('/sellers?API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
              	done();
            });
    });

	it('it should GET seller with given id', (done) => {
        chai.request(server)
            .get('/sellers?id=2&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id').eql(2);
                res.body.should.have.property('name');
                res.body.should.have.property('password');
                res.body.should.have.property('contact');
                res.body.should.have.property('address');
                res.body.should.have.property('email');
                res.body.should.have.property('added_at');
                res.body.should.have.property('pin');
                res.body.should.have.property('rating');
              	done();
            });
    });

	it('it should GET all the purchases', (done) => {
        chai.request(server)
            .get('/purchases?API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
              	done();
            });
    });

	it('it should GET purchases with given user id', (done) => {
        chai.request(server)
            .get('/purchases?user_id=2&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
              	done();
            });
    });

	it('it should GET purchases with given seller id', (done) => {
        chai.request(server)
            .get('/purchases?seller_id=2&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(4);
              	done();
            });
    });

	it('it should GET purchases with given product id', (done) => {
        chai.request(server)
            .get('/purchases?product_id=2&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
              	done();
            });
    });

	it('it should GET purchases with given seller id and product id', (done) => {
        chai.request(server)
            .get('/purchases?seller_id=2&product_id=3&API_KEY=' + API_KEY)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
              	done();
            });
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    it('it should POST new user', function(done) {
        chai.request(server)
            .post('/users')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({'id': 11,
                    'name':'abc',
                    'add':'scsdcs',
                    'contact':1234561234,
                    'email':'abc@gmail.com',
                    'pwd':'sd',
                    'API_KEY':API_KEY})
            .end(function(res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

    it('it should POST new seller', function(done) {
        chai.request(server)
            .post('/sellers')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({'id': 11,
                    'name':'abc',
                    'add':'scsdcs',
                    'contact':1234561234,
                    'email':'abc@gmail.com',
                    'pwd':'sd',
                    'pin':'[110092,110098]',
                    'rating':1.3,
                    'API_KEY':API_KEY})
            .end(function(res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

    it('it should POST new product', function(done) {
        chai.request(server)
            .post('/products')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                  id : 11,
                  name : "IFB S345XD3 Microwave",
                  price : 900,
                  category_id : [1, 2, 3],
                  qty : 150,
                  description : "heats up stuff",
                  brand: "IFB Electronics",
                  image_url : ["https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"],
                  seller_id : 1, 
                  add_info: '{"power":"400kW", "star_rating": 2}',
                  'API_KEY':API_KEY})
            .end(function(res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

    it('it should POST new category', function(done) {
        chai.request(server)
            .post('/categories')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({id:20,name:"electronics",'API_KEY':API_KEY})
            .end(function(res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

    it('it should POST new purchase', function(done) {
        chai.request(server)
            .post('/purchases')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({'id': 11,
                    'product_id':'[1,2]',
                    'user_id':'1',
                    'qty':'[2,3]',
                    'payment':'card'})
            .end(function(res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    after(function (done) {
        server.close(function(){
            process.exit(0);
        });
        console.log("CLOSING SERVER");
        done();
    });

});
