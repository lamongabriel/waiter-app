import { Request, Response } from 'express'

import Product from '../../models/Product'

export async function listProducts (req: Request, res: Response) {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({
			message: 'Error retrieving data from the database.'
		})
	}
}
