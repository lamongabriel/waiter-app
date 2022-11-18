import mongoose from 'mongoose'
import { Request, Response } from 'express'

import Product from '../../models/Product'

export async function listProductsByCategory (req: Request, res: Response) {
	try {
		const categoryId = req.params.categoryId

		const products = await Product.find({
			category: categoryId
		})

		if(products.length > 0) {
			return res.status(200).json(products)
		}

	} catch (error) {
		if(error instanceof mongoose.Error) {
			res.status(400).json({
				message: 'Invalid category ID code.'
			})
		} else {
			res.sendStatus(500)
		}
	}
}
