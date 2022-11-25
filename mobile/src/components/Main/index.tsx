import { useState } from 'react'
import { ActivityIndicator } from 'react-native'

import { useCart } from '../../hooks/useCart'

import { Button } from '../Button'
import { Cart } from '../Cart'
import { Categories } from '../Categories'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { TableModal } from '../TableModal'
import { Text } from '../Text'

// import { products } from '../../mocks/products'

import {
  Container,
  CategoriesContainer,
  Footer,
  FooterContainer,
  ContainerMargin,
  CenteredContainer
} from './styles'
import { THEME } from '../../theme'
import { Empty } from '../Icons/Empty'

export function Main () {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false)
  const [isLoading] = useState(false)

  const { resetCart, selectedTable, setSelectedTable } = useCart()

  function handleSaveselectedTable (table: string) {
    setSelectedTable(table)
  }

  function handleNewOrder () {
    resetCart()
    setIsTableModalVisible(true)
  }

  const products = []

  return (
		<>
			<Container>
				<ContainerMargin>

					<Header />

					{isLoading && (
						<CenteredContainer>
							<ActivityIndicator color={THEME.COLORS.PRIMARY_RED} size='large' />
						</CenteredContainer>
					)}

					{!isLoading && (
						<>
							<CategoriesContainer>
								<Categories />
							</CategoriesContainer>

							{products.length > 0
							  ? <Menu
										openTableModal={() => setIsTableModalVisible(true)}
										products={products}
									/>
							  :	<CenteredContainer>
										<Empty/>
										<Text
											color={THEME.COLORS.LIGHT_GRAY}
											style={{ marginTop: 24 }}
										>
											No products were found.
										</Text>
									</CenteredContainer>
							}
						</>
					)}

				</ContainerMargin>
			</Container>

			<Footer>
				<FooterContainer>
					{!selectedTable && <Button onPress={handleNewOrder} disabled={isLoading} title='New order'/>}
					{selectedTable && <Cart />}
				</FooterContainer>
			</Footer>

			<TableModal
				visible={isTableModalVisible}
				onClose={() => setIsTableModalVisible(false)}
				onSave={handleSaveselectedTable}
			/>
		</>
  )
}
