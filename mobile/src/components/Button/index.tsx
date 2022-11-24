import { THEME } from '../../theme'
import { Text } from '../Text'
import { ButtonContainer } from './styles'

export interface ButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
}

export function Button ({ title, disabled, onPress }: ButtonProps) {
  return (
		<ButtonContainer disabled={disabled} onPress={onPress}>
			<Text
				weight={THEME.FONT_WEIGHT[700]}
				color='#FFFfff'
			>
				{title}
			</Text>
		</ButtonContainer>
  )
}
