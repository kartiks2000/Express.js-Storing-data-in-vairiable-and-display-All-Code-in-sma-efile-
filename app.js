

const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));

var allproducts =[];

app.use('/products',(req,res,next)=>{
    // console.log("products logged!!");
    res.send("<h1>All Products are -: </h1>");
    console.log("check the console for Products....");
    allproducts.map((i)=>{
        console.log(i);
    });
});

app.use("/addproduct",(req,res,next)=>{
    console.log("addproduct logged!!");
    res.send("<form action='/addpro' method='POST'><input type='text' name='proname'><input type='submit' value='ADD'></form>")
});

app.use("/addpro",(req,res,next)=>{
    // console.log("addingpro looged!!" , req.body.proname);
    allproducts.push(req.body.proname);
    res.redirect("/products");
});

// app.use('/',(req,res,next)=>{
//     // console.log("Sorry no page found!!");
//     res.send("<h1>Sorry no page found!!</h1>");
// });


app.listen(3000);