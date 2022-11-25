import styled from 'styled-components/native'

interface ButtonStyleProps {
  disabled: boolean
  bgColor: string
}

export const ButtonContainer = styled.TouchableOpacity<ButtonStyleProps>`
	height: 44px;
	align-self: stretch;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	background-color: ${({ disabled, bgColor }) => disabled ? '#999' : bgColor};
	filter:	brightness(50%);
	border-radius: 48px;
`
