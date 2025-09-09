import User from "../models/user.js"

export async function handleGetAllusers(req,res) {
    const allUsers = await User.find({});
    return res.json(allUsers);
    
}

export async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"User not found!"});
    return res.json(user);
    
}

export async function handleCreateNewUser(req, res) {

     const body = req.body;
    if(
        !body ||
        !body.name ||
        !body.email ||
        !body.gender 

    ){
        return res.status(400).json({msg: "All fields are req..."});
    }

    const result = await User.create({
        name: body.name,
        email: body.email,
        gender: body.gender
    });
    return res.status(201).json({msg:"success", id: result._id});
    
}



// export default {handleGetAllusers, handleGetUserById, handleCreateNewUser};