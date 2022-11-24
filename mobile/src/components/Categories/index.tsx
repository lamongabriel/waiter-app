import { FlatList } from 'react-native'
import { useState } from 'react'
import { Text } from '../Text'

import { categories } from '../../mocks/categories'

import { Category, Icon } from './styles'
import { THEME } from '../../theme'

export function Categories () {
  const [selectedCategory, setSelectedCategory] = useState('')

  function handelSelectCategory (categoryId: string) {
    if (categoryId === selectedCategory) {
 	   return setSelectedCategory('')
    }
    setSelectedCategory(categoryId)
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
					<Category onPress={() => handelSelectCategory(category._id)}>

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
