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
	flex: 1
`

export const CenteredContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const CategoriesContainer = styled.View`
	height: 73px;
	margin-top: 16px;
	margin-bottom: 16px;
`

export const Footer = styled.View`
	min-height: 90px;
	background-color: ${THEME.COLORS.FOOTER_COLOR};
	padding: 16px 24px 28px;
`

export const FooterContainer = styled.View`
`
