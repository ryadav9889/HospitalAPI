const mongooose = require('mongoose');

const reportSchema = new mongooose.Schema({
  status: {
    type: String,
    required: true,
    enum: ['Negative', 'Postive', 'Quarantine']
  },
  doctor: {
    type:Object,
    required:true
  },
  patient:{
    type:Object,
    required:true
  }

}, {
  timestamps: true,
})

const Report = mongooose.model('Report', reportSchema);
module.exports = Report;