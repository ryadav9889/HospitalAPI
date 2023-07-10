const Doctor = require('../modals/doctorSignUp');
  const jwt = require("jsonwebtoken");


  // sign up controller
module.exports.signUp =  async function(req,res){
    try {
    const doctor = await Doctor.findOne({email:req.body.email});
    if(doctor){
        return res.status(200).send({
            "message":"Already Register",
            data:{
                doctor:doctor
            }
        });
    }
    else{

        doctor1 = await Doctor.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        return res.status(200).json({
            message: 'You are registered Successfully!!',
            data: {
              doctor: doctor1
            }
          });
    }
    
   } catch (error) {
    console.log(error);
    return res.status(401).json({

      message: 'Internal Server Error',
    });
   }
}



// ====== Sign in   Controller ======== //
module.exports.signIn = async function(req,res){
  
    try {
        let doctor = await Doctor.findOne({email:req.body.email});
        // console.log(doctor);
        if (!doctor || doctor.password != req.body.password) {
            return res.status(422).json({
              message: "Invalid username or password",
            });
          }
          return res.status(200).json({
            message: "loged in successfully",
            data: {
              token: jwt.sign(doctor.toJSON(), 'secret', { expiresIn: '2000000' }),
            }
          })
        
    } catch (error) {
        return res.status(401).json({
            message: 'Internal Server Error',
          })
    }

}

