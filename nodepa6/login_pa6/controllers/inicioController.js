
module.exports = {
    getAll: async function (req,res, next){
        var data = await users.get
        console.log("data",data)
        res.status(200).json(data)},
    
get: async function (req,res, next){
    var data = await users.get
    console.log("data",data)
    res.status(200).json(data)}
}