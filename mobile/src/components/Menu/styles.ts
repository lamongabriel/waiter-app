import styled from 'styled-components/native'

export const Product = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`

export const ProductImage = styled.Image`
	height: 96px;
	width: 120px;
	border-radius: 8px;
`

export const ProductDetails = styled.View`
	margin-left: 16px;
	flex: 1;
`

export const Separator = styled.View`
	width: 100%;
	height: 2px;
	background-color: rgba(204, 204, 204, 0.3);
	margin: 24px 0;
`

export const ProductAddToCartButton = styled.TouchableOpacity`
	align-self: flex-end;
`
