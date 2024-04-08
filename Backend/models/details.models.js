import { model,Schema } from "mongoose";

const healthDetails=new Schema({


    BP:{
        type:String,
        
    },
    sugar:{
        type:Number,
        },
    symptoms:{
        type:String,
    },
    diagnosis:{
        type:String,
    },
    notes:{
        type:String,
    },
    appointmentDate:{
        type:Date,
    },
    docid:{
        type:String,
        required:[true,'Doc id is required']
    },
    patientid:{
        type:String,
        required:[true,'Patient ID is required']
    }

})

const HDetails=model('HealthDetails',healthDetails);
export default HDetails;