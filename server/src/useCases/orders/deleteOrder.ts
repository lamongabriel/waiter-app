import { Request, Response } from 'express'

import Order from '../../models/Order'

export async function deleteOrder (req: Request, res: Response) {
	try {
		const { orderId } = req.params

		await Order.findByIdAndDelete(orderId)

		res.sendStatus(204)
	} catch (error) {
		res.status(500).json({
			message: 'Error retrieving data from the database.'
		})
	}
}
