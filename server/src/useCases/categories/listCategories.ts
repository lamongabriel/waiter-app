import { Request, Response } from 'express'

import Category from '../../models/Category'

export async function listCategories (req: Request, res: Response) {
	try {
		const categories = await Category.find()
		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json({
			message: 'Error retrieving data from the database.'
		})
	}
}
