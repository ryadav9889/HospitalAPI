const Report = require('../modals/report');
const Doctor = require('../modals/doctorSignUp');
const Patient = require('../modals/patients');

// registering the patient
module.exports.createPatient = async function (req, res) {
    try {
      let patient = await Patient.findOne({ phoneNumber: req.body.phoneNumber });
      if (!patient) {
        patient = await Patient.create({
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
        });
        return res.status(200).json({
          message: "patient successfully registered",
          patient: patient,
        });
      }
      return res.status(200).json({
        message: "patient Already registered",
        patient: patient,
      });
    }
    catch (err) {
      console.log(err);
      return res.status(401).json({
        message: "Internal Server Error",
      });
    }
  }


 
//create new report
module.exports.create = async function (req, res) {
  let patientId = req.params.id;
  console.log("patient",patientId);
  let docId = req.body.doctor;
  console.log("doctorID:",docId);

  if(patientId==undefined || docId==undefined){
      return res.status(206).json({
          message: 'Incomplete data provided'
      });
  }
try{
      let patient = await Patient.findById(req.params.id);
      let doctor = await Doctor.findById(req.body.doctor);

      //If the patient and doctor ids both exist only
      //then report created
      if(patient && doctor){
         
          let report = await Report.create({
            status:req.body.status,
            doctor:req.body.doctor,
            patient:req.params.id
          });
          // if(report){
          //     //pushing the new report in the patients report array
          //     await patient.reports.push(report);
          //     await patient.save();
          // }
         
          return res.status(200).json({
          
              data:{
                  report:report
              },
              message: 'Report successfully Created'
          })
      }
      else{
          return res.status(401).json({
              message: 'Patient/Doctor is not Registered'
          });
      }
  }
  catch(err){
    console.log(err)
      return res.status(500).json({
          message: 'Oops!! Eror'
      });
  }
}


//fetchall reports of a patient 
module.exports.allReports = async function(req, res){
    
  try{
      let report=await Report.find({ patient:req.params.id });
      
      return res.status(200).json({
          data:{
                  report
          },
          message:'All reports of the patient',
        //details:report
      })
    }
    catch(err){
      console.log(err);
        return res.status(500).json({
        message:'OOPS!! Error Occured!'
      })
    }
  };
