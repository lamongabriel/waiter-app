import styled from 'styled-components/native'
import { THEME } from '../../theme'

export const ButtonContainer = styled.TouchableOpacity`
	height: 44px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	background-color: ${({ disabled }) => disabled ? '#999' : THEME.COLORS.PRIMARY_RED};
	filter:	brightness(50%);
	border-radius: 48px;
`
