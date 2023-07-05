exports.registerDataValidate=(req,res,next)=>{
    const {name,email,password} = req.body;

    if(req.body && name && email && password){
        next()
    }else{
        res.status(404).send({msg:"all input fields are required"})
    }
}