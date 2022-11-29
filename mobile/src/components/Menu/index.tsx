import { useState } from 'react'
import { FlatList } from 'react-native'

import { Text } from '../Text'
import { ProductModal } from '../ProductModal'
import { PlusCircle } from '../Icons/PlusCircle'

import { useCart } from '../../hooks/useCart'

import { convertToMonetary } from '../../utils/convertToMonetary'

import { ProductImage, Product, ProductDetails, Separator, ProductAddToCartButton } from './styles'
import { THEME } from '../../theme'

import { IProduct } from '../../types/product'

interface MenuProps {
  openTableModal: () => void
  products: IProduct[]
}

export function Menu ({ openTableModal, products }: MenuProps) {
  const [isProductModalVisible, setIsProductModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<IProduct>({} as IProduct)

  const { addProduct, selectedTable } = useCart()

  function handleOpenProductModal (product: IProduct) {
    setIsProductModalVisible(true)
    setSelectedProduct(product)
  }

  function handleAddProduct (product: IProduct) {
    if (!selectedTable) {
      openTableModal()
    }
    addProduct(product)
  }

  return (
		<>
			<ProductModal
				visible={isProductModalVisible}
				onClose={() => setIsProductModalVisible(false)}
				product={selectedProduct}
				openTableModal={openTableModal}
			/>
			<FlatList
				data={products}
				contentContainerStyle={{ paddingBottom: 32, paddingTop: 8 }}
				keyExtractor={product => product._id}
				ItemSeparatorComponent={Separator}
				showsVerticalScrollIndicator={false}
				renderItem={({ item: product }) => (
					<Product onPress={() => handleOpenProductModal(product)}>

						<ProductImage
							source={{
							  uri: `http://192.168.101.7:3001/uploads/${product.imagePath}`
							}}
						/>

						<ProductDetails>
							<Text weight={THEME.FONT_WEIGHT[600]}>{product.name}</Text>
							<Text color={THEME.COLORS.LIGHT_GRAY} size={THEME.FONT_SIZE.MD} style={{ marginVertical: 8 }}>{product.description}</Text>
							<Text weight={THEME.FONT_WEIGHT[600]} size={THEME.FONT_SIZE.MD}>{convertToMonetary(product.price)}</Text>
						</ProductDetails>

						<ProductAddToCartButton onPress={() => handleAddProduct(product)}>
							<PlusCircle />
						</ProductAddToCartButton>

					</Product>
				)}
			/>
		</>
  )
}
