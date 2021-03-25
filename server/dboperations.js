const config = require("./dbconfig");
const sql = require("mssql");
const jwt = require("jsonwebtoken");

//getlast eventid
async function getLastEventID() {
  try {
    let pool = await sql.connect(config);
    let products = await pool
      .request()
      .query(
        "SELECT TOP 1 id ,applicationDate FROM PriceEvents ORDER BY ID DESC"
      );

    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

//get users for login
async function getUsers(order) {
  // const apptime=   Date.parse(this.state.apptime);
  //const appdate =  Date.parse(order.appdate);
  //console.log(appdate);
  //   console.log(order.creationdate);
  //   console.log(order.appDate)
  //   console.log(order.appTime)

  console.log(order.email);
  console.log(order.password);
  //   console.log(order.gasoline92)
  //   console.log(order.gasoline80)
  //   console.log(order.diesel)

  var dbConn = await sql.connect(config);
  dbConn.connect().then(function () {
    var transaction = new sql.Transaction(dbConn);
    transaction
      .begin()
      .then(function () {
        var request = new sql.Request(transaction);
        var hesham = "admin";
        //console.log(x)
        console.log("hey");
        // request.query( "INSERT INTO PriceEvent (creationDate,applicationDate,applicationTime,Gasoline95,Gasoline92,Gasoline80,Diesel,eventid) VALUES  ('" +order.creationdate+"','" +order.appDate+"','" +order.appTime+"','" +order.gasoline95+"','" +order.gasoline92+"','" +order.gasoline80+"','" +order.diesel+"','" +order.evenid+"')")
        request
          .query(
            "INSERT INTO EventApprovenew (eventid,approverName,approveStatus,approveDate) VALUES  ('" +
              order.eventid +
              "','" +
              hesham +
              "','" +
              1 +
              "','" +
              order.approveDate +
              "')"
          )
          .then(function () {
            transaction
              .commit()
              .then(function (resp) {
                console.log(resp);
                dbConn.close();
              })
              .catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                dbConn.close();
              });
          })
          .catch(function (err) {
            console.log("Error in Transaction Begin " + err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
        dbConn.close();
      })
      .catch(function (err) {
        //12.
        console.log(err);
      });
  });
}

/***********
 *
 * Configrations Pages
 * ****** */
// Add HOs

async function insertHO(order) {
  // const apptime=   Date.parse(this.state.apptime);
  //const appdate =  Date.parse(order.appdate);
  //console.log(appdate);
  //   console.log(order.creationdate);
  //   console.log(order.appDate)
  //   console.log(order.appTime)

  console.log(order.ServerName);
  console.log(order.ServerIp);
  console.log(order.userName);
  console.log(order.Password);
  //   console.log(order.diesel)

  var dbConn = await sql.connect(config);
  dbConn.connect().then(function () {
    var transaction = new sql.Transaction(dbConn);
    transaction
      .begin()
      .then(function () {
        var request = new sql.Request(transaction);
        var hesham = "admin";
        //console.log(x)
        console.log("hey");
        // request.query( "INSERT INTO PriceEvent (creationDate,applicationDate,applicationTime,Gasoline95,Gasoline92,Gasoline80,Diesel,eventid) VALUES  ('" +order.creationdate+"','" +order.appDate+"','" +order.appTime+"','" +order.gasoline95+"','" +order.gasoline92+"','" +order.gasoline80+"','" +order.diesel+"','" +order.evenid+"')")
        request
          .query(
            "INSERT INTO HOServers (ServerName,ServerIP,username,password) VALUES  ('" +
              order.ServerName +
              "','" +
              order.ServerIp +
              "','" +
              order.userName +
              "','" +
              order.Password +
              "')"
          )
          .then(function () {
            transaction
              .commit()
              .then(function (resp) {
                console.log(resp);
                dbConn.close();
              })
              .catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                dbConn.close();
              });
          })
          .catch(function (err) {
            console.log("Error in Transaction Begin " + err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
        dbConn.close();
      })
      .catch(function (err) {
        //12.
        console.log(err);
      });
  });
}

// end Add Hos
async function insertProduct(order) {
  // const apptime=   Date.parse(this.state.apptime);
  //const appdate =  Date.parse(order.appdate);
  //console.log(appdate);
  //   console.log(order.creationdate);
  //   console.log(order.appDate)
  //   console.log(order.appTime)

  console.log(order.Number);
  console.log(order.Name);

  //   console.log(order.diesel)

  var dbConn = await sql.connect(config);
  dbConn.connect().then(function () {
    var transaction = new sql.Transaction(dbConn);
    transaction
      .begin()
      .then(function () {
        var request = new sql.Request(transaction);
        var hesham = "admin";
        //console.log(x)
        console.log("hey");
        // request.query( "INSERT INTO PriceEvent (creationDate,applicationDate,applicationTime,Gasoline95,Gasoline92,Gasoline80,Diesel,eventid) VALUES  ('" +order.creationdate+"','" +order.appDate+"','" +order.appTime+"','" +order.gasoline95+"','" +order.gasoline92+"','" +order.gasoline80+"','" +order.diesel+"','" +order.evenid+"')")
        request
          .query(
            "INSERT INTO Product (Number,Name) VALUES  ('" +
              order.Number +
              "','" +
              order.Name +
              "')"
          )
          .then(function () {
            transaction
              .commit()
              .then(function (resp) {
                console.log(resp);
                dbConn.close();
              })
              .catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                dbConn.close();
              });
          })
          .catch(function (err) {
            console.log("Error in Transaction Begin " + err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
        dbConn.close();
      })
      .catch(function (err) {
        //12.
        console.log(err);
      });
  });
}

// Add Product

// End  Add Product

// post confirmprices

async function insertconfirm(order) {
  // const apptime=   Date.parse(this.state.apptime);
  //const appdate =  Date.parse(order.appdate);
  //console.log(appdate);
  //   console.log(order.creationdate);
  //   console.log(order.appDate)
  //   console.log(order.appTime)

  console.log(order.eventid);
  console.log(order.email);

  console.log(order.approveDate);
  //   console.log(order.gasoline92)
  //   console.log(order.gasoline80)
  //   console.log(order.diesel)
  //   console.log(order.email)

  var dbConn = await sql.connect(config);
  dbConn.connect().then(function () {
    var transaction = new sql.Transaction(dbConn);
    transaction
      .begin()
      .then(function () {
        var request = new sql.Request(transaction);
        var hesham = "admin";
        var action = "confirm Prices";
        //var date = new DateTime();
        //console.log(x)
        console.log("hey");
        // request.query( "INSERT INTO PriceEvent (creationDate,applicationDate,applicationTime,Gasoline95,Gasoline92,Gasoline80,Diesel,eventid) VALUES  ('" +order.creationdate+"','" +order.appDate+"','" +order.appTime+"','" +order.gasoline95+"','" +order.gasoline92+"','" +order.gasoline80+"','" +order.diesel+"','" +order.evenid+"')")
        request
          .query(
            "INSERT INTO EventApprovenew (eventid,approverName,approveStatus,approveDate) VALUES  ('" +
              order.eventid +
              "','" +
              hesham +
              "','" +
              1 +
              "','" +
              order.approveDate +
              "')"
          )

          // .query(
          //     "INSERT INTO system_log  (username,action,date) VALUES  ('" +
          //     hesham+
          //     "','" +
          //     action +
          //     "','" +
          //     date +
          //     "')"
          // )
          .then(function () {
            var action = "Confirm Price";
            const date = new Date().toISOString();

            sql.query`INSERT INTO dbo.sec_logs (email,time,action) Values(${order.email},${date},${action})`;
            transaction
              .commit()
              .then(function (resp) {
                console.log(resp);
                dbConn.close();
              })
              .catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                dbConn.close();
              });
          })
          .catch(function (err) {
            console.log("Error in Transaction Begin " + err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
        dbConn.close();
      })
      .catch(function (err) {
        //12.
        console.log(err);
      });
  });
}

// post newPrices

async function insertnewPrices(order) {
  // const apptime=   Date.parse(this.state.apptime);
  //const appdate =  Date.parse(order.appdate);
  //console.log(appdate);
  //   console.log(order.creationdate);
  //   console.log(order.appDate)
  //   console.log(order.appTime)

  console.log(order.eventid);
  console.log(order.gasoline95);
  console.log(order.gasoline92);
  console.log(order.gasoline80);
  console.log(order.diesel);

  var dbConn = await sql.connect(config);
  dbConn.connect().then(function () {
    var transaction = new sql.Transaction(dbConn);
    transaction
      .begin()
      .then(function () {
        var request = new sql.Request(transaction);

        //console.log(x)
        console.log("hey");
        // request.query( "INSERT INTO PriceEvent (creationDate,applicationDate,applicationTime,Gasoline95,Gasoline92,Gasoline80,Diesel,eventid) VALUES  ('" +order.creationdate+"','" +order.appDate+"','" +order.appTime+"','" +order.gasoline95+"','" +order.gasoline92+"','" +order.gasoline80+"','" +order.diesel+"','" +order.evenid+"')")
        request
          .query(
            "INSERT INTO priceEventDetails (eventid,ProductId,NewPrice) VALUES  ( '" +
              order.eventid +
              "','" +
              1 +
              "','" +
              order.gasoline95 +
              "'),('" +
              order.eventid +
              "','" +
              2 +
              "','" +
              order.gasoline92 +
              "'),('" +
              order.eventid +
              "','" +
              3 +
              "','" +
              order.gasoline80 +
              "'),('" +
              order.eventid +
              "','" +
              4 +
              "','" +
              order.diesel +
              "')"
          )
          .then(function () {
            var action = "Add Prices";
            const date = new Date().toISOString();

            sql.query`INSERT INTO dbo.sec_logs (email,time,action) Values(${order.email},${date},${action})`;

            transaction
              .commit()
              .then(function (resp) {
                console.log(resp);
                dbConn.close();
              })
              .catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                dbConn.close();
              });
          })
          .catch(function (err) {
            console.log("Error in Transaction Begin " + err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
        dbConn.close();
      })
      .catch(function (err) {
        //12.
        console.log(err);
      });
  });
}

//add price Apllication Date
async function insertAppDate(order) {
  // const apptime=   Date.parse(this.state.apptime);
  //const appdate =  Date.parse(order.appdate);
  //console.log(appdate);
 

  //  console.log(order.gasoline95);
  //  console.log(order.gasoline92)
  //  console.log(order.gasoline80)
  //  console.log(order.diesel)
  //  console.log(order.evenid)

  var dbConn = await sql.connect(config);
  dbConn.connect().then(function () {
    
    const CreatDate= new Date().toISOString();
    console.log(CreatDate);
  
    console.log(order.appDate);
    console.log(order.appTime);
    
    var transaction = new sql.Transaction(dbConn);
    transaction
      .begin()
      .then(function () {
        var request = new sql.Request(transaction);
        //var date = new DateTime();
        var action = "Add Date and Time";

        //console.log(date);
        console.log("hey");
        // request.query( "INSERT INTO PriceEvent (creationDate,applicationDate,applicationTime,Gasoline95,Gasoline92,Gasoline80,Diesel,eventid) VALUES  ('" +order.creationdate+"','" +order.appDate+"','" +order.appTime+"','" +order.gasoline95+"','" +order.gasoline92+"','" +order.gasoline80+"','" +order.diesel+"','" +order.evenid+"')")
        request
          .query(
            "INSERT INTO PriceEvents (creationDate,applicationDate,applicationTime) VALUES  ('" +
            CreatDate +
              "','" +
              order.appDate +
              "','" +
              order.appTime +
              "')"
          )
         
          // .query(
          //   "INSERT INTO system_log  (username,action,date) VALUES  ('" +
          //     user.name +
          //     "','" +
          //     action +
          //     "','" +
          //     date +
          //     "')"
          // )
          .then(function () {
            const date = new Date().toISOString();

             sql.query`INSERT INTO dbo.sec_logs (email,time,action) Values(${order.email},${date},${action})`;

            transaction
              .commit()
              .then(function (resp) {
                console.log(resp);
                dbConn.close();
              })
              .catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                dbConn.close();
              });
          })
          .catch(function (err) {
            console.log("Error in Transaction Begin " + err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
        dbConn.close();
      })
      .catch(function (err) {
        //12.
        console.log(err);
      });
  });
}

//add price Apllication date
// async function insertpriceAPP(order) {

//     var dbConn =   await  sql.connect( config);
//     dbConn.connect().then(function () {
// 		var transaction = new sql.Transaction(dbConn);
// 		transaction.begin().then(function () {
//             var request = new sql.Request(transaction);

//             request.query( "INSERT INTO PriceEvent (creationDate,applicationDate,applicationTime) VALUES  ('" +order.creationdate+"','" +order.appdate+"','" +order.apptime+"')")
// 			.then(function 	() {
// 				transaction.commit().then(function (resp) {
//                     console.log(resp);
//                     dbConn.close();
//                 }).catch(function (err) {
//                     console.log("Error in Transaction Commit " + err);
//                     dbConn.close();
//                 });
// 			}).catch(function (err) {
//                 console.log("Error in Transaction Begin " + err);
//                 dbConn.close();
//             })
// 		}).catch(function (err) {
//             console.log(err);
//             dbConn.close();
//         }).catch(function (err) {
//         //12.
//         console.log(err);
//     });
//   });

// }

//add order test
async function insertOrders(order) {
  var dbConn = await sql.connect(config);
  dbConn.connect().then(function () {
    var transaction = new sql.Transaction(dbConn);
    transaction
      .begin()
      .then(function () {
        var request = new sql.Request(transaction);

        request
          .query(
            "INSERT INTO Orderss (Product,Message,City) VALUES  ('" +
              order.product +
              "','" +
              order.qty +
              "','" +
              order.msg +
              "','" +
              order.city +
              "')"
          )
          .then(function () {
            transaction
              .commit()
              .then(function (resp) {
                console.log(resp);
                dbConn.close();
              })
              .catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                dbConn.close();
              });
          })
          .catch(function (err) {
            console.log("Error in Transaction Begin " + err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
        dbConn.close();
      })
      .catch(function (err) {
        //12.
        console.log(err);
      });
  });
}

//api get productname
async function getProducts() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("Select * from Product");

    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

//join api report one
async function getStationLogReport() {
  try {
    let pool = await sql.connect(config);
    let stationsLogreport = await pool
      .request()
      .query(
        "SELECT StationsEventLog.id,StationsEventLog.stationID, StationsEventLog.RecieptDate,StationsEventLog.AppliedDate,StationsEventLog.Status, PriceEventDetailsLog.ProductID,PriceEventDetailsLog.FusionValidationStatus FROM StationsEventLog   FULL OUTER JOIN PriceEventDetailsLog ON StationsEventLog.id=PriceEventDetailsLog.stationLogId ORDER BY StationsEventLog.id"
      );

    return stationsLogreport.recordsets;
  } catch (error) {
    console.log(error);
  }
}

//join api report two
async function getPriceEventReport() {
  try {
    let pool = await sql.connect(config);
    let priceeventreport = await pool
      .request()
      .query(
        "SELECT PriceEvents.id,PriceEvents.creationDate, PriceEvents.applicationDate,PriceEvents.applicationTime,PriceEvents.[Description], priceEventDetails.ProductID,priceEventDetails.NewPrice  FROM PriceEvents FULL OUTER JOIN priceEventDetails ON PriceEvents.id=priceEventDetails.eventid   ORDER BY PriceEvents.id"
      );

    return priceeventreport.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getStationEventLog() {
  try {
    let pool = await sql.connect(config);
    let stationsLog = await pool
      .request()
      .query("SELECT * from StationsEventLog");
    return stationsLog.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getPriceEventLog() {
  try {
    let pool = await sql.connect(config);
    let priceEventdetailslog = await pool
      .request()
      .query("SELECT * from PriceEventDetailsLog");
    return priceEventdetailslog.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getPriceEvent() {
  try {
    let pool = await sql.connect(config);
    let priceEvent = await pool.request().query("SELECT * from PriceEvent");
    return priceEvent.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getPriceEventdetails() {
  try {
    let pool = await sql.connect(config);
    let priceEventDetails = await pool
      .request()
      .query("SELECT TOP 4 NewPrice FROM priceEventDetails  ORDER BY ID DESC");
    return priceEventDetails.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getlastPriceEvents() {
  try {
    let pool = await sql.connect(config);
    let priceEventDetails = await pool
      .request()
      .query(
        "SELECT TOP 1 applicationDate,applicationTime FROM PriceEvents   ORDER BY id DESC"
      );
    return priceEventDetails.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getOrders() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * from Orders");
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getOrder(orderId) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("input_parameter", sql.Int, orderId)
      .query("SELECT * from Orders where Id = @input_parameter");
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addOrder(order) {
  try {
    let pool = await sql.connect(config);
    let insertProduct = await pool
      .request()
      .input("Id", sql.Int, order.Id)
      .input("Title", sql.NVarChar, order.Title)
      .input("Quantity", sql.Int, order.Quantity)
      .input("Message", sql.NVarChar, order.Message)
      .input("City", sql.NVarChar, order.City)
      .execute("InsertOrders");
    //    .query("INSERT INTO  Orders VALUES (Id,'Title','Quantity','Message','City')");

    return insertProduct.recordsets;
  } catch (err) {
    console.log(err);
  }
}

//add api test

// async function addPrice() {
//     const { applicationDate, applicationTime } = req.body;
//     try {
//         let pool = await sql.connect(config);
//         let insertProduct = await pool.request()
//             //  .input('id', sql.Int,order.id)
//             //  .input('creationDate', sql.DateTime,order.creationDate)

//            .query("insert into PriceEventDetails (applicationDate, applicationTime) values ('" + applicationDate + "', '" + applicationTime + "')");
//             //.query("INSERT INTO  PriceEventDetails (NewPrice) VALUES (prod95,prod95,prod92,prod80,diesel)");

//         return insertProduct.recordsets;
//     }
//     catch (err) {
//         console.log(err);
//     }

// }

// app.post('/', function(req, res) {
//     res.set('Access-Control-Allow-Origin', '*');
//     const { FirstName, LastName } = req.body;
//     let connection = new sql.ConnectionPool(config, function(err) {
//         let request = new sql.Request(connection);
//         request.query("insert into persons (FirstName, LastName) values ('" + FirstName + "', '" + LastName + "')");
//     });
//     res.send({ message: 'Success'})
// });

async function getmyOrders() {
  try {
    let pool = await sql.connect(config);
    let myproducts = await pool.request().query("SELECT * from Orders");
    return myproducts.recordsets;
  } catch (error) {
    console.log(error);
  }
}

//login user
async function loginUser(info) {
  let action = "Login";
  const { email, password } = info;
  console.log("email --->" + email);
  console.log("password ---->" + password);
  try {
    //CONNECT TO MSSQL
    await sql.connect(config);
    //CHECK IF USER EXISTS
    const result = await sql.query`SELECT email, pswd FROM dbo.sec_users WHERE email=${email}`;
    if (result.recordset.length == 0)
      throw new Error("email does not belong to any user");

    //CHECK IF PASSWORD MATCH THE EMAIL
    if (password === result.recordset[0].pswd) {
      //ADD LOG TO sec_logs
      const date = new Date().toISOString();
      await sql.query`INSERT INTO dbo.sec_logs (email,time,action) Values(${email},${date},${action})`;

      //create a jsonwebtoken
      const payload = {
        email,
      };
      const token =  jwt.sign(payload, "process.env.jwt_secret");
      
      sql.close();
      //RETURN THE CREATED TOKEN
      return { token };
    } else {
      sql.close();
      //INVALID PASSWORD
      throw new Error("invalid password");
    }
  } catch (error) {
    switch (error.message) {
      case "email does not belong to any user":
        return { error: error.message };
      case "invalid password":
        return { error: error.message };
      default:
        return { error: "something went wrong" };
    }
  }
}
//check token
async function checkToken(info) {
  try {
    const decodedUser = await jwt.verify(info.token, "secret");
    if (decodedUser) {
      let pool = await sql.connect(config);
      let user = await pool
        .request()
        .query(`Select * from sec_users where email = ${decodedUser.email}`);
      return { user: user };
    }
  } catch (error) {
    console.log(error);
    return { error: "invalid token" };
  }
}
module.exports = {
  getOrders: getOrders,
  getOrder: getOrder,
  addOrder: addOrder,
  getStationEventLog: getStationEventLog,
  getPriceEventLog: getPriceEventLog,
  getPriceEvent: getPriceEvent,
  getPriceEventdetails: getPriceEventdetails,
  getStationLogReport: getStationLogReport,
  getPriceEventReport: getPriceEventReport,

  getmyOrders: getmyOrders,
  getProducts: getProducts,
  insertOrders: insertOrders,
  insertAppDate: insertAppDate,
  getLastEventID: getLastEventID,
  insertnewPrices: insertnewPrices,

  insertconfirm: insertconfirm,
  getUsers: getUsers,
  getlastPriceEvents: getlastPriceEvents,
  insertHO,
  insertHO,
  insertProduct: insertProduct,

  loginUser: loginUser,
  checkToken: checkToken,
};
