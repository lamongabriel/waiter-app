import { useState } from 'react'
import { Modal, TouchableOpacity, Platform, ModalProps } from 'react-native'

import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'

import {
  TableModalOverlay,
  TableModalBody,
  TableModalHeader,
  TableModalForm,
  TableModalInput
} from './styles'
import { THEME } from '../../theme'

interface TableModalProps extends ModalProps {
  visible: boolean
  onClose: () => void
  onSave: (table: string) => void
}

export function TableModal ({ visible, onClose, onSave, ...rest }: TableModalProps) {
  const [tableNumber, setTableNumber] = useState('')

  function handleSave () {
    setTableNumber('')
    onSave(tableNumber)
    onClose()
  }

  return (
		<Modal
			transparent
			statusBarTranslucent={true}
			animationType='fade'
			visible={visible}
			{...rest}
		>
			<TableModalOverlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
				<TableModalBody>

					<TableModalHeader>
						<Text weight={THEME.FONT_WEIGHT[600]}>What's your table?</Text>
						<TouchableOpacity onPress={onClose}>
							<Close color='#666'/>
						</TouchableOpacity>
					</TableModalHeader>

					<TableModalForm>
						<TableModalInput
							placeholder='Type here'
							placeholderTextColor='#666'
							keyboardType='number-pad'
							maxLength={3}
							onChangeText={setTableNumber}
							value={tableNumber}
						/>
					</TableModalForm>

					<Button
						disabled={tableNumber.length === 0}
						title='Next'
						onPress={handleSave}
					/>

				</TableModalBody>
			</TableModalOverlay>
		</Modal>
  )
}
