import Startup from "../models/Startup.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Investor from "../models/Investor.js";

export const createSession = function(request,response){
    console.log(request.body);
    console.log("investor Signed In");
    
    response.json({
        status: "ok"
    })
}
export const register = async function(req,res){
  console.log(req.body);
    try {
        const { email, password, Name, phone, company } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newInvestor = new Investor({          
          Name,          
          email,
          company,
          password: passwordHash,
          phone
         
        });
        const savedUser = await newInvestor.save();
    
        res.status(201).json(savedUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const getInvestors = async (req, res) => {
  try {
    //console.log(req.body);
    const investor = await Investor.find();
    res.status(200).json(investor);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};