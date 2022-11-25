import { TouchableOpacity } from 'react-native'
import { Text } from '../Text'

import { useCart } from '../../hooks/useCart'

import { Container, Content, OrderHeader, Table } from './styles'
import { THEME } from '../../theme'

export function Header () {
  const { selectedTable, resetCart, setSelectedTable } = useCart()

  function handleCancelOrder () {
    resetCart()
    setSelectedTable('')
  }

  return (
		<Container>

			{selectedTable.length === 0 &&
				<>
					<Text size={THEME.FONT_SIZE.MD} opacity={0.9}>
						Welcome to the
					</Text>

					<Text size={THEME.FONT_SIZE.XL} weight={THEME.FONT_WEIGHT[700]}>
						WAITER
						<Text size={THEME.FONT_SIZE.XL}>APP</Text>
					</Text>
				</>
			}

			{selectedTable.length !== 0 &&
				<Content>

					<OrderHeader>
						<Text weight={THEME.FONT_WEIGHT[600]} size={THEME.FONT_SIZE.XL}>
							Your order
						</Text>
						<TouchableOpacity onPress={handleCancelOrder}>
							<Text
								weight={THEME.FONT_WEIGHT[600]}
								color={THEME.COLORS.PRIMARY_RED}
								size={THEME.FONT_SIZE.MD}
							>
								cancel order
							</Text>
						</TouchableOpacity>
					</OrderHeader>

					<Table>
						<Text color={THEME.COLORS.LIGHT_GRAY}>
							Table {selectedTable}
						</Text>
					</Table>

				</Content>
			}

		</Container>
  )
}
