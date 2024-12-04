import { Schema, model, models } from 'mongoose';

const ServiceSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        enum: ['Hydrotherapy', 'Speech therapy', 'Occupational therapy', 'Physiotherapy', 'Behavioral therapy'],
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // Duration in minutes, hours, or days
        required: false,
    },
    location: {
        type: String, // Could be 'Online' or a physical address
        required: false,
    },
    cost: {
        type: Number, // Cost in USD or another currency
        required: false,
    },
    contactEmail: {
        type: String,
        required: true,
        trim: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Service = models.Service || model('Service', ServiceSchema);

export default Service;
