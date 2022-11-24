import { useState } from 'react'

import {
  Container,
  CategoriesContainer,
  Footer,
  FooterContainer,
  ContainerMargin
} from './styles'

import { Button } from '../Button'
import { Categories } from '../Categories'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { TableModal } from '../TableModal'

export function Main () {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false)
  const [tableNumber, setTableNumber] = useState('')

  function handleSaveTableNumber (table: string) {
    setTableNumber(table)
  }

  return (
		<>
			<Container>
				<ContainerMargin>

					<Header />

					<CategoriesContainer>
						<Categories />
					</CategoriesContainer>

					<Menu />

				</ContainerMargin>
			</Container>

			<Footer>
				<FooterContainer>
					{!tableNumber && <Button onPress={() => setIsTableModalVisible(true)} title='New order'/>}
				</FooterContainer>
			</Footer>

			<TableModal
				visible={isTableModalVisible}
				onClose={() => setIsTableModalVisible(false)}
				onSave={handleSaveTableNumber}
				/>
		</>
  )
}
