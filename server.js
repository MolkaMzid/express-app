const express= require ('express');

const app= express();
//app.use(date=(req,res,next)=>{
    //let requestAt=new Date()
    //console.log(requestAt)
    //next()
    //})
//app.get('/home',(req,res)=>{
   // res.sendFile(__dirname +'/views/home.html')})
    //app.get('/home',(req,res)=>{
      //  res.sendFile(__dirname +'/views/contact.html')})
       // app.get('/home',(req,res)=>{
        //    res.sendFile(__dirname +'/views/services.html')})
//app.get('/home',(req,res)=>{res.send("hello , this the home page")})
//app.get('/contact',(req,res)=>{res.send("hello , this the contact page")})
//app.get('/services',(req,res)=>{res.send("hello , this the services page")})
app.use((req,res,next)=>{
    let date=new Date();
    let n = date.getHours();
   if(n<17 && n>8){
    // res.send('our office is work')
    app.use(express.static(__dirname+"/views"))
    next()   
        }
        else 
        res.send('our office is closed')
 
      
})

app.listen(4000, (err)=>{if(err)console.log("server is not running")
else console.log ("server is running on port 4000")})