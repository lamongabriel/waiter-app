import { useState } from 'react'

import { Order } from '../../types/Order'
import { OrderModal } from '../OrderModal'

import { toast } from 'react-toastify'

import { api } from '../../lib/api'

import { Board, BoardData, BoardHeader } from './styles'
interface OrderBoardProps {
  emoji: string
  title: string
  orders: Order[]
  onCancelOrder: (orderId: string) => void
  onUpdateOrderStatus: (id: string, status: Order['status'],) => void
}

export function OrdersBoard ({ emoji, title, orders, onCancelOrder, onUpdateOrderStatus }: OrderBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order>({} as Order)
  const [isLoading, setIsLoading] = useState(false)

  function handleOpenOrderModal (order: Order) {
    setIsModalOpen(true)
    setSelectedOrder(order)
  }

  function closeModal () {
    setIsModalOpen(false)
  }

  async function deleteOrder () {
    try {
      setIsLoading(true)
      await api.delete(`/orders/${selectedOrder._id}`)

      toast.success(`Order ${selectedOrder._id.slice(0, 5)} from table ${selectedOrder.table} was succesfully deleted.`)

      onCancelOrder(selectedOrder._id)
      setIsModalOpen(false)
    } catch {} finally {
      setIsLoading(false)
    }
  }

  async function changeOrderStatus () {
    try {
      setIsLoading(true)
      const status = selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'

      await api.patch(`/orders/${selectedOrder._id}`, { status })

      toast.success('Order updated!')
      onUpdateOrderStatus(selectedOrder._id, status)
      setIsModalOpen(false)
    } catch {
      toast.error('Something went wrong! ')
    } finally {
      setIsLoading(false)
    }
  }

  return (
		<Board>
			<OrderModal
				onChangeOrderStatus={changeOrderStatus}
				isLoading={isLoading}
				onCancelOrder={deleteOrder}
				visible={isModalOpen}
				order={selectedOrder}
				onClose={closeModal}
			/>
			<BoardHeader>
				<span>{emoji}</span>
				<strong>{title}</strong>
				<span>({orders.length})</span>
			</BoardHeader>
			<BoardData>
				{orders.map(order => (
					<button type='button' key={order._id} onClick={() => handleOpenOrderModal(order)}>
						<small>Order ID {order._id.slice(0, 5)}</small>
						<strong>Table {order.table}</strong>
						<span>{order.products.length} {order.products.length === 1 ? 'item' : 'itens'}</span>
					</button>
				))}
			</BoardData>
		</Board>
  )
}
