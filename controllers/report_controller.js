const Report = require('../modals/report');


//get/fetch all reports by using status
module.exports.fetchReports = async function(req, res){
   
console.log(req.params.status);

    try{
        let reportstatus = await Report.find({status: req.params.status});

            return res.status(200).json({
                data: {reportstatus},
                message: 'All report of this status'
            });
        }
    catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error'
        });
    }
}

