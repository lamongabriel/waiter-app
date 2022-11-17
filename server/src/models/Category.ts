import { model, Schema } from 'mongoose'

interface ICategory {
	name: string
	icon: string
}

const CategorySchema = new Schema<ICategory>({
	name: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	}
})

export default model<ICategory>('Category', CategorySchema)
