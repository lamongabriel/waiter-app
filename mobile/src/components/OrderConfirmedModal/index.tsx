import { Modal } from 'react-native'

import { Button } from '../Button'
import { CheckCircle } from '../Icons/CheckCircle'
import { Text } from '../Text'

import { OCModalContainer, OCModalButtonContainer } from './styles'
import { THEME } from '../../theme'
import { useCart } from '../../hooks/useCart'

interface OrderConfirmedModalProps {
  visible: boolean
  hideModal: () => void
}

export function OrderConfirmedModal ({ visible, hideModal }: OrderConfirmedModalProps) {
  const { resetCart, setSelectedTable } = useCart()

  function resetAppToDefault () {
    hideModal()
    resetCart()
    setSelectedTable('')
  }

  return (
		<Modal
			visible={visible}
			animationType='slide'
			presentationStyle='fullScreen'
			onRequestClose={hideModal}
			statusBarTranslucent={true}
		>
			<OCModalContainer>
				<CheckCircle />
				<Text
					size={THEME.FONT_SIZE.XL}
					color={THEME.COLORS.BACKGROUND_COLOR}
					weight={THEME.FONT_WEIGHT[600]}
					style={{ marginTop: 12, marginBottom: 4 }}
				>
					Order confirmed
				</Text>
				<Text
					color={THEME.COLORS.BACKGROUND_COLOR}
					style={{ marginBottom: 24 }}
				>
					Your order is already being prepared!
				</Text>
				<OCModalButtonContainer>
					<Button
						title='OK'
						onPress={resetAppToDefault}
						bgColor={THEME.COLORS.BACKGROUND_COLOR}
						color={THEME.COLORS.PRIMARY_RED}
					/>
				</OCModalButtonContainer>
			</OCModalContainer>
		</Modal>
  )
}
