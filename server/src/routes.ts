import { Router } from 'express'
import path from 'node:path'
import multer from 'multer'

import { listCategories } from './useCases/categories/listCategories'
import { createCategory } from './useCases/categories/createCategory'
import { listProductsByCategory } from './useCases/categories/listProductsByCategory'

import { listProducts } from './useCases/products/listProducts'
import { createProduct } from './useCases/products/createProduct'

import { listOrders } from './useCases/orders/listOrders'
import { createOrder } from './useCases/orders/createOrder'
import { updateOrderStatus } from './useCases/orders/updateOrderStatus'
import { deleteOrder } from './useCases/orders/deleteOrder'

const router = Router()

const upload = multer({
	storage: multer.diskStorage({
		destination (req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'))
		},
		filename (req, file, callback) {
			callback(null, Date.now() + '-' + file.originalname )
		}
	})
})

// [GET] - List all categories
router.get('/categories', listCategories)

// [POST] - Create a new category
router.post('/categories', createCategory)

// [GET] - List all products
router.get('/products', listProducts)

// [POST] - Create a new product
router.post('/products', upload.single('image'), createProduct)

// [GET] - List products by category ID
router.get('/categories/:categoryId/products', listProductsByCategory)

// [GET] - List all currently pending orders
router.get('/orders', listOrders)

// [POST] - Create a new order
router.post('/orders', createOrder)

// [PATCH] - Update created order status
router.patch('/orders/:orderId', updateOrderStatus)

// [DELETE] - Delete or cancel an order
router.delete('/orders/:orderId', deleteOrder)

export default router
