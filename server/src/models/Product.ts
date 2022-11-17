import { model, Schema } from 'mongoose'

interface Ingredient {
	name: string
	icon: string
}

interface IProduct {
	name: string
	description: string
	imagePath: string
	price: number
	ingredients: Ingredient[]
	category: Schema.Types.ObjectId
}

const ProductSchema = new Schema<IProduct>({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	imagePath: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	ingredients: {
		type: [
			{
				name: String,
				icon: String
			}
		],
		required: true
	},
	category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category'
	}
})

export default model<IProduct>('Product', ProductSchema)
