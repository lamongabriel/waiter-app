import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { THEME } from '../../theme'

const isAndroid = Platform.OS === 'android'

export const ProductImage = styled.ImageBackground`
	width: 100%;
	height: 200px;
`

export const CloseButton = styled.TouchableOpacity`
	width: 32px;
	height: 32px;

	align-items: center;
	justify-content: center;

	align-self: flex-end;
	margin: 24px;

	background: rgba(0, 0, 0, 0.5);
	border-radius: 16px;
`

export const ModalBody = styled.View`
	padding: 32px 24px 4px 24px;
	background-color: ${THEME.COLORS.BACKGROUND_COLOR};
	flex: 1;
`

export const ModalHeader = styled.View`
	margin-bottom: 32px;
`

export const ModalIngredient = styled.View`
	padding: 16px;
	border: 1px solid rgba(204, 204, 204, 0.3);
	border-radius: 8px;
	flex-direction: row;
	margin-top: 4px;
`

export const ModalFooter = styled.View`
	min-height: 110px;
	background-color: ${THEME.COLORS.FOOTER_COLOR};
	padding: ${isAndroid ? '24px' : '16px'} 24px;
`

export const ModalFooterContainer = styled.SafeAreaView`
	flex-direction: row;
	justify-content: space-between;
`
export const ModalPriceContainer = styled.View`
	margin-right: 62px;
`
