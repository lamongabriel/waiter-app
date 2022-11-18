import mongoose from 'mongoose'
import { Request, Response } from 'express'

import Product from '../../models/Product'

export async function createProduct (req: Request, res: Response) {
	try {

		const imagePath = req.file?.filename
		const { name, description, price, ingredients, category } = req.body

		const createdProduct = await Product.create({
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients: ingredients ? JSON.parse(ingredients) : []
		})

		res.status(201).json(createdProduct)

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
