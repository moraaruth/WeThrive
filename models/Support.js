import { Schema, model, models } from 'mongoose';

const SupportSchema = new Schema({
    blog: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    images: [
        {
            type: String, // Array of image file names or URLs
            required: true,
        },
    ],
    is_featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Support = models.Support || model('Support', SupportSchema);

export default Support;
