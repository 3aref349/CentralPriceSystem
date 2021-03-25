var Db = require('./dboperations')
//var Order = require('./order')
const dboperations = require('./dboperations')
const jwt = require("jsonwebtoken")
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)
app.use(bodyParser.json())
// app.use(express.json({
//    type: ['application/json', 'text/plain']
//  }));
// app.use(express.json({
//    type: ['application/json', 'text/plain']
//  }));

// dboperations.getOrders().then(result=>{
//    console.log(result);
// })

router.use((request, response, next) => {
    console.log('middleware')
    next()
})

// // teet myorders

// router.route('/myorders').get((request,response)=>{

//    dboperations.getmyOrders().then(result => {
//       response.json(result[0]);

//    })

// })

//products

router.route('/products').get((request, response) => {
    dboperations.getProducts().then(result => {
        response.json(result[0])
    })
})

//api join report one

router.route('/stationlogreport').get((request, response) => {
    dboperations.getStationLogReport().then(result => {
        response.json(result[0])
    })
})

//api join report two

router.route('/priceeventreport').get((request, response) => {
    dboperations.getPriceEventReport().then(result => {
        response.json(result[0])
    })
})

// api statiosEventlog
router.route('/stationseventlog').get((request, response) => {
    dboperations.getStationEventLog().then(result => {
        response.json(result[0])
    })
})

// api priceEventlog
router.route('/priceeventlog').get((request, response) => {
    dboperations.getPriceEventLog().then(result => {
        response.json(result[0])
    })
})

// api priceEvent
router.route('/getpriceevent').get((request, response) => {
    dboperations.getPriceEvent().then(result => {
        response.json(result[0])
    })
})

// api priceEventDetail
router.route('/getpriceeventdetails').get((request, response) => {
    dboperations.getPriceEventdetails().then(result => {
        response.json(result[0])
    })
})

// api priceEvents
router.route('/getpriceevents').get((request, response) => {
    dboperations.getlastPriceEvents().then(result => {
        response.json(result[0])
    })
})


//api get last event

router.route('/geteventid').get((request, response) => {
    dboperations.getLastEventID().then(result => {
        response.json(result[0])
    })
})

router.route('/orders').get((request, response) => {
    dboperations.getOrders().then(result => {
        response.json(result[0])
    })
})

//login
// router.route('/login').get((request,response)=>{

//    dboperations.getUsers().then(result => {
//       response.json(result[0]);

//    })

// })
router.route('/login').post((request, response) => {
    let order = { ...request.body }

    dboperations.getUsers(order).then(result => {
        response.status(201).json(result)
    })
})

router.route('/orders/:id').get((request, response) => {
    dboperations.getOrder(request.params.id).then(result => {
        response.json(result[0])
    })
})

// // router.route('/orders').post((request,response)=>{

// //     let order = {...request.body}

// //     dboperations.addOrder(order).then(result => {
// //        response.status(201).json(result);
// //     })

// // })

router.route('/orders').post((request, response) => {
    let order = { ...request.body }

    dboperations.insertOrders(order).then(result => {
        response.status(201).json(result)
    })
})

// Add Product
router.route('/addProduct').post((request, response) => {
    let order = { ...request.body }

    dboperations.insertProduct(order).then(result => {
        response.status(201).json(result)
    })
})
// Add Hos

router.route('/addHo').post((request, response) => {
    let order = { ...request.body }

    dboperations.insertHO(order).then(result => {
        response.status(201).json(result)
    })
})

//PriceEvent Application Time api

router.route('/appPrice').post((request, response) => {
    token = request.headers.token
    const { email } = jwt.decode(token, "process.env.jwt_secret")
    let order = { ...request.body, email }
    console.log(token)
    dboperations.insertAppDate(order).then(result => {
        response.status(201).json(result)
    })
})

router.route('/appPrices').post((request, response) => {
    token = request.headers.token
    const { email } = jwt.decode(token, "process.env.jwt_secret")
    let order = { ...request.body, email }
    console.log(token)

    dboperations.insertnewPrices(order).then(result => {
        response.status(201).json(result)
    })
})

//confim api

router.route('/appconfirm').post((request, response) => {
    token = request.headers.token
    const { email } = jwt.decode(token, "process.env.jwt_secret")
    let order = { ...request.body, email }
    console.log(token)
    dboperations.insertconfirm(order).then(result => {
        response.status(201).json(result)
    })
})

router.route('/loginUser').post((request, response) => {
    let userInfo = { ...request.body }

    dboperations.loginUser(userInfo).then(result => {
        response.json(result)
    })
})

router.route('/checkToken').get((request, response) => {
    let token = request.headers.authorization
    console.log(token)
    dboperations.checkToken(token).then(result => {
        response.json(result)
    })
})

// router.route('/prices').post((request,response)=>{

//    let order = {...request.body}

//    dboperations.addPrice(applicationTime,applicationDate).then(result => {
//       response.status(201).json(result);
//    })

// })
// app.post('/prices', function(req, res) {
//    res.set('Access-Control-Allow-Origin', '*');
//    const body = JSON.parse(req.body);
//    let connection = new sql.ConnectionPool(config, function(err) {
//        let request = new sql.Request(connection);
//        request.query("insert into PriceEventDetails (applicationDate, applicationTime) values ('" + body.applicationDate + "', '" +body.applicationTime + "')");
//    });
//    res.send({ message: 'Success'})
// });

var port = process.env.PORT || 7260
app.listen(port)
console.log('Order API is runnning at ' + port)