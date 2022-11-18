import mongoose from 'mongoose'
import { Request, Response } from 'express'

import Order from '../../models/Order'

export async function updateOrderStatus (req: Request, res: Response) {
	try {
		const { orderId } = req.params
		const { status } = req.body

		const possibleStatusValue = [
			'WAITING',
			'IN_PRODUCTION',
			'DONE'
		]

		if(!status || !possibleStatusValue.includes(status)) {
			return res.status(400).json({
				message: 'Error: status property is required and should be one of these: WAITING, IN_PRODUCTION, DONE'
			})
		}

		await Order.findByIdAndUpdate(orderId, { status })

		res.sendStatus(204)

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
