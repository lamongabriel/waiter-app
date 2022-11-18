import mongoose from 'mongoose'
import { Request, Response } from 'express'

import Category from '../../models/Category'

export async function createCategory (req: Request, res: Response) {
	try {
		const { name, icon } = req.body
		const createdCategory = await Category.create({
			name,
			icon
		})
		res.status(201).json(createdCategory)
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
