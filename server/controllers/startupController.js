import Startup from "../models/Startup.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createSession = async function (req, res) {
  //console.log(req.body);
  //console.log("startup Signed In");
  try {
    const { email, password } = req.body;
    const user = await Startup.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async function (req, res) {
  //console.log(req.body);
  //console.log("startup Registered");
  try {
    const { email, password, Name, description, phone, company } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newStartUp = new Startup({
      company,
      Name,
      phone,
      email,
      password: passwordHash,
      description,
    });
    const savedUser = await newStartUp.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
