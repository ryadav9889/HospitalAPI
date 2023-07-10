# HospitalAPI
Hospital API
**This is hospital Api for doctors of hospital where doctor can register them self then register there patients and create report of there patients after checkup.**
# Software Required
**Nodejs**
**Mongo DB**
# For Local System
for this objective user can download the repository from git and then extract the folder and then type **npm start** command to run this api.
# Routes
**1.Register a Doctor:** [POST]:/doctors/register
**2.Login for Doctor:** [POST]: /doctors/login
**3.Register a patient:** [POST]: /patients/register
**4.Create Patient report:** [POST]: /patients/:id/create_report
**5.Fetch All Reports of a Patient** [POST]: /patients/:id/get_allReport
**6.Fetch All Reports Based on a Status**: [GET]: /report/:status

#
***to get register as a doctor need email,name,password***
#
***to register patient doctor need patient's phone number,name and his own  id***
