import { useState } from 'react'
import { FlatList } from 'react-native'
import { Text } from '../Text'

import { Category, Icon } from './styles'
import { THEME } from '../../theme'

import { ICategory } from '../../types/category'

interface CategoriesProps {
  categories: ICategory[]
  onSelectCategory: (categoryId: string) => Promise<void>
}

export function Categories ({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleSelectCategory (categoryId: string) {
    const newCategory = categoryId === selectedCategory ? '' : categoryId

    onSelectCategory(newCategory)
    setSelectedCategory(newCategory)
  }

  return (
		<FlatList
			data={categories}
			keyExtractor={category => category._id}
			horizontal
			contentContainerStyle={{ paddingRight: 24 }}
			showsHorizontalScrollIndicator={false}
			renderItem={({ item: category }) => {
			  const isSelected = selectedCategory === category._id

			  return (
					<Category onPress={() => handleSelectCategory(category._id)}>

						<Icon>
							<Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
						</Icon>

						<Text
							size={THEME.FONT_SIZE.MD}
							weight={THEME.FONT_WEIGHT[600]}
							opacity={isSelected ? 1 : 0.5}
						>
							{category.name}
						</Text>

					</Category>
			  )
			}}
		/>
  )
}
