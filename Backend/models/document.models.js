import { Schema, model } from 'mongoose';

const documentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    patientId: {
        type: String,
    },
    thumbnail: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }
    }
}, {
    timestamps: true
});

const Document = model('Document', documentSchema);

export default Document;