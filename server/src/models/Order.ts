import { model, Schema } from 'mongoose'

interface Product {
	product: Schema.Types.ObjectId
	quantity: number
}

interface IOrder {
	table: string
	status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
	createdAt: Date
	products: Product[]
}

const OrderSchema = new Schema<IOrder>({
	table: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: [
			'WAITING',
			'IN_PRODUCTION',
			'DONE'
		],
		default: 'WAITING',
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	products: {
		type: [
			{
				product: {
					type: Schema.Types.ObjectId,
					required: true,
					ref: 'Product'
				},
				quantity: {
					type: Number,
					default: 1
				}
			}
		],
		required: true
	}
})

export default model<IOrder>('Order', OrderSchema)
