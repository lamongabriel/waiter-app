import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'
import { THEME } from '../../theme'

const isAndroid = Platform.OS === 'android'

export const Container = styled.SafeAreaView`
	margin-top: ${isAndroid ? `${StatusBar.currentHeight as number}px` : 0};
	background-color: ${THEME.COLORS.BACKGROUND_COLOR};
	flex: 1
`

export const ContainerMargin = styled.View`
	margin-left: 24px;
	margin-right: 24px;
`

export const CategoriesContainer = styled.View`
	height: 73px;
	margin-top: 34px;
`

export const Footer = styled.View`
	min-height: 110px;
	background-color: ${THEME.COLORS.FOOTER_COLOR};
	padding: ${isAndroid ? '24px' : '16px'} 24px;
`

export const FooterContainer = styled.SafeAreaView`
`
