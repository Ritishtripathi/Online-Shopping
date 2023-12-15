const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const express=require('express');
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
    password:String
});

//Signup post API

app.post('/customer',async(req,res)=>{
    const{name,email,password}=req.body;
    try{
     const users= new User ({name,email,password});
     await users.save();
     res.json({message:'user added success'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'error during post data'});
    }
});

//login API

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user =await User.findOne({email});
        if(!user || user.password!==password){
           return res.status(401).json({message:'userid not match'});
        }
        else{
            res.json({message:'login successfull!'});
        }

    }
    catch(error){
      console.error(error);
      res.status(500).json({message:'error during signin'});
    }
})