const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const express=require('express');
const jwt=require('jsonwebtoken');
const port=3001;
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());

//conection of mongodb 

mongoose.connect('mongodb://127.0.0.1:27017/OnlineShopping').then(()=>{
    console.log('database is connected');
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    });
})
.catch((error)=>{
    console.error('dataase connection feild!',error);
});

app.use(bodyParser.json());


//create model of Signup

const User= mongoose.model('User',{
    name:String,
    email:String,
    password:String,
    Key:String
});

// middleware for authentcation 
const authenticateToken= (req,res,next)=>{
    const token =req.header('Authorization');
    if(!token) return res.status(401).json({message:'Access is Denied No token provided.'});

    jwt.verify(token.split('')[1],'your_secret_key',(err,)=>{
        if(err) return res.status(403).json({message:'Invalid Token'})
        req.user=user;
    next();

    });
};





//Signup post API

app.post('/Signup', async(req,res)=>
{
const{name,email,password,Key}=req.body;
try{
const users=new User ({name,email,password,Key});
await users.save();
res.json({ Key:users.key,message:"Signup successFull "});
}
catch (error){
console.error(error);
res.status(500).json({messagge:"Error during Post data on signup"});
}
})


// Login api 
app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    try{
    const user=await User.findOne({email});
    if(!user || user.password!==password){
    return res.status(401).json({Messge:"Invalid credential "})
    } 

 else{

// Gentare JWT Token 

     const token=jwt.sign({userId:user._id,email:user.email},'your sectre_key',{expiresIn:'5s'});
     res.status(200).json({Message:"Login Succesfull",token});

    }
}
    catch (error){
console.error(error);
    res.status(500).json({Message:"Error during login"});
    }
});

// Protect Route Examplle 
app.get('/protected-route',authenticateToken,(req,res)=>{
    res.json({Message:"This is Protected Rpute ",user:req.user});
});








