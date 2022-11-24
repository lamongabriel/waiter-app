import { THEME } from '../../theme'
import { Text } from '../Text'
import { Container } from './styles'

export function Header () {
  return (
		<Container>

			<Text size={THEME.FONT_SIZE.MD} opacity={0.9}>
				Welcome to the
			</Text>

			<Text size={THEME.FONT_SIZE.XL} weight={THEME.FONT_WEIGHT[700]}>
				WAITER
				<Text size={THEME.FONT_SIZE.XL}>APP</Text>
			</Text>

		</Container>
  )
}
