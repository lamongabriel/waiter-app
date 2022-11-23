import { Order } from '../../types/Order'
import { Board, BoardData, BoardHeader } from './styles'
import { OrderModal } from '../OrderModal'
import { useState } from 'react'

interface OrderBoardProps {
  emoji: string
  title: string
  orders: Order[]
}

export function OrdersBoard ({ emoji, title, orders }: OrderBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order>({} as Order)

  function handleOpenOrderModal (order: Order) {
    setIsModalOpen(true)
    setSelectedOrder(order)
  }

  function closeModal () {
    setIsModalOpen(false)
  }

  return (
		<Board>
			<OrderModal visible={isModalOpen} order={selectedOrder} onClose={closeModal}/>
			<BoardHeader>
				<span>{emoji}</span>
				<strong>{title}</strong>
				<span>({orders.length})</span>
			</BoardHeader>
			<BoardData>
				{orders.map(order => (
					<button type='button' key={order._id} onClick={() => handleOpenOrderModal(order)}>
						<strong>Table {order.table}</strong>
						<span>{order.products.length} {order.products.length === 1 ? 'item' : 'itens'}</span>
					</button>
				))}
			</BoardData>
		</Board>
  )
}
