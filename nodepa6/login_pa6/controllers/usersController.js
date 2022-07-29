var users = require("../models/userModel")
const userTable = require('../models/userModel.js')


/*const createUser = async ({ name, password }) => { 
    return await User.create({ name, password });
  };*/
  const getAllUsers = async () => {
    return await User.findAll();
  };
  const getUser = async obj => {
    return await User.findOne({
    where: obj,
  });
  };

module.exports = { getUser, getAllUsers}





/*{
    getAll: async function (req,res, next){
        var data = await users.getAll
        console.log("data",data)
        res.status(200).json(data)
    },
    get: async function (req,res, next){
        var data = await users.get
        console.log("data",data)
        res.status(200).json(data)
    },
    login: async function(req,res,next){
        try{
            const user = userModel.findOne({login:req.body.usuario})
            if(!user){
                res.json({error:true, message:"usuario incorrecto"})
                return
            }
            else {

            }
        }catch{
            res.status(500).json({status:"error",mensaje:e.message})
            return
        }
        next(e)

    }

}
*/
