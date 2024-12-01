import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    tags: [
        {
            type: String,
            trim: true,
        },
    ],
    category: {
        type: String,
        enum: ['Therapy', 'Resources', 'Personal stories', 'News', 'Advocacy'],
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    isFeatured: {
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

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;