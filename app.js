const express=require("express");
const app=express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('colorGame');
});

app.listen(process.env.PORT,process.env.ID,()=>{
    console.log("connected");
});