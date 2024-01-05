import { Schema, model, models } from "mongoose";


export interface ITopic {
    title: string;
    description: string;
}

const topicSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
})


const Topic = models.Topic || model('Topic', topicSchema)

export default Topic;