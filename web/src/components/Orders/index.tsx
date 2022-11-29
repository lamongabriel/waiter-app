import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { Order } from '../../types/Order'
import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'

export function Orders () {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    api.get('/orders').then(({ data }) => setOrders(data))
  })

  const waiting = orders.filter(order => order.status === 'WAITING')
  const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION')
  const done = orders.filter(order => order.status === 'DONE')

  function handleCancelOrder (orderId: string) {
    setOrders(prevState => prevState.filter(order => order._id !== orderId))
  }

  function handleStatusUpdate (orderId: string, status: Order['status']) {
    setOrders(prev => prev.map(order => (
      order._id === orderId ? { ...order, status } : order
    )))
  }

  return (
		<Container>
			<OrdersBoard
				emoji='⏰'
				title='Waiting list'
				orders={waiting}
				onCancelOrder={handleCancelOrder}
				onUpdateOrderStatus={handleStatusUpdate}
			/>
			<OrdersBoard
				emoji='👩‍🍳'
				title='Cooking'
				orders={inProduction}
				onCancelOrder={handleCancelOrder}
				onUpdateOrderStatus={handleStatusUpdate}
			/>
			<OrdersBoard
				emoji='✅'
				title='Ready'
				orders={done}
				onCancelOrder={handleCancelOrder}
				onUpdateOrderStatus={handleStatusUpdate}
			/>
		</Container>
  )
}
