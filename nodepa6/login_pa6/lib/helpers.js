    const bcrypt = require('bcryptjs');
    
    
    const helpers = {};

    helpers.encryptPassword = async(password) => {
        const salt = await bcrypt.genSalt(31);
        const hash = await bcrypt.hash(password, salt);
        console.log (hash,);
        return hash

        
        

    }
    

    helpers.matchPassword = async (password, hash, savedHash) => {
       try{
        return await bcrypt.compare(password, hash, savedHash);
       } catch(e){
        console.log(e);
       }
    }

    module.exports=
        helpers
    ;