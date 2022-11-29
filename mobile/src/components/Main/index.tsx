import { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { useCart } from '../../hooks/useCart'

import { Button } from '../Button'
import { Cart } from '../Cart'
import { Categories } from '../Categories'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { TableModal } from '../TableModal'
import { Text } from '../Text'
import { Empty } from '../Icons/Empty'

import { ICategory } from '../../types/category'
import { IProduct } from '../../types/product'

import { api } from '../../lib/api'

import {
  Container,
  CategoriesContainer,
  Footer,
  FooterContainer,
  ContainerMargin,
  CenteredContainer
} from './styles'
import { THEME } from '../../theme'

export function Main () {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)

  const [categories, setCategories] = useState<ICategory[]>([])
  const [products, setProducts] = useState<IProduct[]>([])

  const { resetCart, selectedTable, setSelectedTable } = useCart()

  function handleSaveselectedTable (table: string) {
    setSelectedTable(table)
  }

  function handleNewOrder () {
    resetCart()
    setIsTableModalVisible(true)
  }

  useEffect(() => {
    try {
      Promise.all([
        api.get<ICategory[]>('/categories'),
        api.get<IProduct[]>('/products')
      ]).then(([categoriesResponse, productsResponse]) => {
        setCategories(categoriesResponse.data)
        setProducts(productsResponse.data)
        setIsLoading(false)
      })
    } catch {}
  }, [])

  async function handleSelectCategory (categoryId: string) {
    setIsLoadingProducts(true)
    const url = categoryId
      ? `/categories/${categoryId}/products`
      : '/products'

    try {
      const response = await api.get(url)
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingProducts(false)
    }
  }

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
								<Categories categories={categories} onSelectCategory={handleSelectCategory} />
							</CategoriesContainer>

							{isLoadingProducts
							  ? <CenteredContainer>
										<ActivityIndicator color={THEME.COLORS.PRIMARY_RED} size='large' />
									</CenteredContainer>
							  : (
									<>
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
							    )
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
