import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import { useCart } from '../../hooks/useCart'

import { Text } from '../Text'
import { Button } from '../Button'
import { PlusCircle } from '../Icons/PlusCircle'
import { MinusCircle } from '../Icons/MinusCircle'
import { OrderConfirmedModal } from '../OrderConfirmedModal'

import { CartItem } from '../../types/cartItem'

import { convertToMonetary } from '../../utils/convertToMonetary'

import {
  Actions,
  Item,
  ProductItem,
  ImageItem,
  ProductItemInfo,
  ItemSummary,
  TotalContainer
} from './styles'
import { THEME } from '../../theme'

import { api } from '../../lib/api'

export function Cart () {
  const { cart, addProduct, removeProduct, selectedTable } = useCart()

  const [isOCModalOpen, setIsOCModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const cartIsEmpty = cart.length === 0

  function calculateOrderTotal (items: CartItem[]) {
    return items.reduce((acc, cur) => (acc += cur.quantity * cur.product.price), 0)
  }

  async function handleConfirmOrder () {
    try {
      setIsLoading(true)
      const payload = {
        table: selectedTable,
        products: cart.map(cartItem => ({
          product: cartItem.product._id,
          quantity: cartItem.quantity
        }))
      }

      await api.post('/orders', payload)
      setIsOCModalOpen(true)
    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
		<>
			<OrderConfirmedModal visible={isOCModalOpen} hideModal={() => setIsOCModalOpen(false)}/>
			{
				!cartIsEmpty &&
				<FlatList
					data={cart}
					keyExtractor={cartItem => cartItem.product._id}
					showsVerticalScrollIndicator={false}
					style={{ marginBottom: 20, maxHeight: 150 }}
					renderItem={({ item: cartItem }) => (
						<Item>
							<ProductItem>
								<ImageItem source={{ uri: `http://192.168.101.7:3001/uploads/${cartItem.product.imagePath}` }} />

								<Text style={{ marginHorizontal: 12 }}>{cartItem.quantity}x</Text>

								<ProductItemInfo>
									<Text
										size={THEME.FONT_SIZE.MD}
										weight={THEME.FONT_WEIGHT[600]}
										numberOfLines={1}
										style={{ flexShrink: 1, flexWrap: 'wrap' }}
									>
										{cartItem.product.name}
									</Text>
									<Text
										size={THEME.FONT_SIZE.MD}
										color={THEME.COLORS.LIGHT_GRAY}
									>
										{convertToMonetary(Number(cartItem.quantity) * Number(cartItem.product.price))}
									</Text>
								</ProductItemInfo>

							</ProductItem>
							<Actions>
								<TouchableOpacity onPress={() => removeProduct(cartItem.product)} style={{ marginRight: 16 }}>
									<MinusCircle />
								</TouchableOpacity>
								<TouchableOpacity onPress={() => addProduct(cartItem.product)}>
									<PlusCircle />
								</TouchableOpacity>
							</Actions>
						</Item>
					)}
				/>
			}
			<ItemSummary>
				<TotalContainer>
					<Text color={THEME.COLORS.LIGHT_GRAY}>
						{cartIsEmpty ? 'Your cart is \n now empty :(' : 'Total'}
					</Text>
					{!cartIsEmpty &&
						<Text
							size={THEME.FONT_SIZE.LG}
							weight={THEME.FONT_WEIGHT[600]}
						>
							{convertToMonetary(calculateOrderTotal(cart))}
						</Text>
					}
				</TotalContainer>
				<Button loading={isLoading} disabled={cartIsEmpty} onPress={handleConfirmOrder} title='Confirm order'/>
			</ItemSummary>
		</>
  )
}
