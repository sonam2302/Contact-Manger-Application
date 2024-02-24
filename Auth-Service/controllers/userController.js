import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function login(req,res) {
    let result = await User.findOne({
        where: {
            email: req.body.email
        }
    })
    console.log(result, 'result')
    if(result != null) {
        if(bcrypt.compareSync(req.body.password, result.password)){
            let token = jwt.sign(req.body,"this is my secret for authentication api", {
              expiresIn: '1h'  
            });

            res.status(200).send({status:200, token:token})
        }
        else {
            res.status(401).send({status:401,message:"Invalid credentials"})
        }
    }
    else {
        res.status(401).send({status:401,message:"Invalid credential"})
 
    }
    
}


async function Register(req,res){
   
    let result = await User.findOne({
        where: {
            email:req.body.email
        }});
    if(result == null) {
        await User.create({...req.body,password: bcrypt.hashSync(req.body.password)});

        res.status(200).send({status:200,message:"User RegisteRED Succesfully"})
    }
    else {
        res.status(409).send({
            status:409,
            message:"User with specified email address already exist"
        });
    }
}

export {login, Register};