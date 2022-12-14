import mongoose from 'mongoose'
import { Request, Response } from 'express'
import { io } from '../../server'

import Order from '../../models/Order'

export async function createOrder (req: Request, res: Response) {
	try {
		const { table, products } = req.body

		const createdOrder = await Order.create({
			table,
			products
		})

		const orderDetails = await createdOrder.populate('products.product')

		io.emit('orders@new', orderDetails)
		res.status(201).json(createdOrder)

	} catch (error) {
		if(error instanceof mongoose.Error) {
			res.status(400).json({
				message: error.message
			})
		} else {
			res.sendStatus(500)
		}
	}
}
