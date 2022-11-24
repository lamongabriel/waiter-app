import { FlatList } from 'react-native'
import { Text } from '../Text'

import { ProductImage, Product, ProductDetails, Separator, ProductAddToCartButton } from './styles'

import { products } from '../../mocks/products'
import { THEME } from '../../theme'
import { convertToMonetary } from '../../utils/convertToMonetary'
import { PlusCircle } from '../Icons/PlusCircle'

export function Menu () {
  return (
		<FlatList
			data={products}
			style={{ marginTop: 32 }}
			keyExtractor={product => product._id}
			ItemSeparatorComponent={Separator}
			renderItem={({ item: product }) => (
				<Product>

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

					<ProductAddToCartButton>
						<PlusCircle />
					</ProductAddToCartButton>

				</Product>
			)}
		/>
  )
}
