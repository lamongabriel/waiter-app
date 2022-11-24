import styled from 'styled-components/native'
import { Platform } from 'react-native'

const isAndroid = Platform.OS === 'android'

export const Category = styled.TouchableOpacity`
	margin-right: 36px;
	align-items: center;
`

export const Icon = styled.View`
	background-color: #fff;

	width: 44px;
	height: 44px;
	border-radius: 22px;
	margin-bottom: 8px;
	box-shadow: ${isAndroid ? '0px 2px 1px rgba(0, 0, 0, 1)' : '0px 2px 1px rgba(0, 0, 0, 0.1)'};
	elevation: 2;

	align-items: center;
	justify-content: center;
`
