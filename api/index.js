const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs')
const user =require('./models/user.js');
require('dotenv').config()

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
 credentials:true,
 origin:'http://localhost:5173',
}));

app.get('/test',(req,res)=>{
    res.json('test ok');
} );

mongoose.connect('process.env.MONGO_URL')

// ZT9x28hPbwOLIUIkmongodb+srv://kaif54312:ZT9x28hPbwOLIUIk@booking.szduqll.mongodb.net/

app.post('/register', async(req, res) => {
const {name,email, password} = req.body;
try{

    const userDoc= await user.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt),
    })
    res.json(userDoc);
}
catch (e){
    res.status(422).json(e);

}
});

app.post('/login', async(req,res)=>{
    const {email,password} = req.body;
    const userDoc= await User.findOne({email});
    if(userDoc){
    res.json('found');
    }
    else{
        res.json('not found');
    }
})

app.listen(4000);
