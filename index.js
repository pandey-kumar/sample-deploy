require("dotenv").config();

const express=require("express");

const app=express();

const port=2000;

// Lets handle get request from client

app.get("/",(req,res)=>{
    res.send("This is a Home Directory");
})

app.get("/login",(req,res)=>{
    res.send("Welocome to my login page");
})

// you can also send  html contents as response.

app.get("/home",(req,res)=>{
    res.send(`<h1>Welcome to my website<h1>`);
})


app.get("/youtube",(req,res)=>{
    res.send("<h2>Hey gys this is Basic Youtube </h2>");
})


// Listening the given requests on given port of our choice

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port:- ${port}`);
});