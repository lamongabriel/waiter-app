import { FlatList, Modal } from 'react-native'

import { Text } from '../Text'
import { Close } from '../Icons/Close'
import { Button } from '../Button'

import { useCart } from '../../hooks/useCart'

import { convertToMonetary } from '../../utils/convertToMonetary'

import {
  CloseButton,
  ProductImage,
  ModalHeader,
  ModalBody,
  ModalIngredient,
  ModalFooter,
  ModalFooterContainer,
  ModalPriceContainer
} from './styles'
import { THEME } from '../../theme'

import { IProduct } from '../../types/product'

interface ProductModalProps {
  visible: boolean
  onClose: () => void
  product: IProduct
  openTableModal: () => void
}

export function ProductModal ({ visible, onClose, product, openTableModal }: ProductModalProps) {
  if (!product._id) {
    return null
  }

  const { addProduct, selectedTable } = useCart()

  function handleAddToCart (product: IProduct) {
    if (!selectedTable) {
      openTableModal()
    }
    addProduct(product)
    onClose()
  }

  return (
		<Modal
			visible={visible}
			animationType='slide'
			presentationStyle='pageSheet'
			onRequestClose={onClose}
		>
			<ProductImage source={{ uri: `http://192.168.101.7:3001/uploads/${product.imagePath}` }}>
				<CloseButton onPress={onClose}>
					<Close />
				</CloseButton>
			</ProductImage>
			<ModalBody>

				<ModalHeader>
					<Text
						color={THEME.COLORS.DARK_GRAY}
						weight={THEME.FONT_WEIGHT[600]}
						size={THEME.FONT_SIZE.XL}
					>
						{product.name}
					</Text>

					<Text
						color={THEME.COLORS.LIGHT_GRAY}
						style={{ marginTop: 8 }}
					>
						{product.description}
					</Text>
				</ModalHeader>

				{product.ingredients.length > 0 &&
					<>
						<Text
							color={THEME.COLORS.LIGHT_GRAY}
							weight={THEME.FONT_WEIGHT[600]}
							style={{ marginBottom: 16 }}
						>
							Ingredients
						</Text>

						<FlatList
							data={product.ingredients}
							keyExtractor={item => item._id}
							showsVerticalScrollIndicator={false}
							renderItem={({ item: ingredient }) => (
								<ModalIngredient>
									<Text>{ingredient.icon}</Text>
									<Text
										color={THEME.COLORS.LIGHT_GRAY}
										size={THEME.FONT_SIZE.MD}
										style={{ marginLeft: 20 }}
									>
										{ingredient.name}
									</Text>
								</ModalIngredient>
							)}
						/>
					</>
				}
			</ModalBody>
			<ModalFooter>
				<ModalFooterContainer>
					<ModalPriceContainer>
						<Text
							color={THEME.COLORS.LIGHT_GRAY}
						>
							Price
						</Text>
						<Text
							weight={THEME.FONT_WEIGHT[600]}
						>
							{convertToMonetary(product.price)}
						</Text>
					</ModalPriceContainer>
					<Button
						title='Add to cart'
						onPress={() => handleAddToCart(product)}
					/>
				</ModalFooterContainer>
			</ModalFooter>
		</Modal>
  )
}
