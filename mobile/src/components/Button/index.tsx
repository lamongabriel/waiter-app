import { ActivityIndicator } from 'react-native'
import { Text } from '../Text'

import { ButtonContainer } from './styles'
import { THEME } from '../../theme'
export interface ButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  color?: string
  bgColor?: string
  loading?: boolean
}

export function Button ({
  title,
  disabled = false,
  onPress,
  color = '#FFF',
  bgColor = THEME.COLORS.PRIMARY_RED,
  loading = false
}: ButtonProps) {
  return (
		<ButtonContainer disabled={disabled || loading} onPress={onPress} bgColor={bgColor} >
			{!loading && (
				<Text
					weight={THEME.FONT_WEIGHT[600]}
					color={color}
				>
					{title}
				</Text>
			)}
			{loading && (
				<ActivityIndicator color={color}/>
			)}
		</ButtonContainer>
  )
}
