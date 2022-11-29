import {
  OrderModalContainer,
  OrderModalOverlay,
  OrderModalHeader,
  OrderModalDetails,
  OrderModalTotal,
  OrderModalOptions
} from './styles'

import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from '../../types/Order'
import { convertToMonetary } from '../../utils/convertToMonetary'
import React, { useEffect } from 'react'

interface OrderModalProps {
  visible: boolean
  order: Order
  onClose: () => void
  onCancelOrder: () => Promise<void>
  onChangeOrderStatus: () => Promise<void>
  isLoading: boolean
}

export function OrderModal ({ visible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {
  if (!visible || !order) {
    return null
  }

  useEffect(() => {
    function handleKeyDown (e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    function handleMousePress (e: any) {
      if (e.target.dataset?.type === 'overlay') {
        onClose()
      }
    }

    document.addEventListener('keyup', handleKeyDown)
    document.addEventListener('click', handleMousePress)

    return () => {
      document.removeEventListener('keyup', handleKeyDown)
      document.removeEventListener('click', handleMousePress)
    }
  }, [onClose])

  return (
		<OrderModalOverlay data-type='overlay'>
			<OrderModalContainer>

				<OrderModalHeader>
					<h2>Table {order.table}</h2>
					<button type='button' onClick={onClose}>
						<img src={closeIcon} alt="Close modal button" />
					</button>
				</OrderModalHeader>

				<section>
					<h4>Order status</h4>
					<div className='status'>
						<span>
							{order.status === 'WAITING' && '🕑'}
							{order.status === 'IN_PRODUCTION' && '👩‍🍳'}
							{order.status === 'DONE' && '✅'}
						</span>
						<strong>
							{order.status === 'WAITING' && 'Waiting...'}
							{order.status === 'IN_PRODUCTION' && 'Cooking...'}
							{order.status === 'DONE' && 'Done!'}
						</strong>
					</div>
				</section>

				<OrderModalDetails>
					<h4>Itens</h4>

					<div>
						{order.products.map(({ _id, product, quantity }) => (
							<div className='item' key={_id}>
								<figure>
									<img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} />
								</figure>
								<span>{quantity}x</span>
								<div>
									<strong>{product.name}</strong>
									<br />
									<span>{convertToMonetary(product.price)}</span>
								</div>
							</div>
						))}
					</div>
				</OrderModalDetails>

				<OrderModalTotal>
					<h4>Total</h4>
					<strong>
						{
							convertToMonetary(order.products.reduce((acc, cur) => (
							  acc += (cur.product.price * cur.quantity)
							), 0))
						}
					</strong>
				</OrderModalTotal>

				<OrderModalOptions>
					{order.status !== 'DONE' && (
						<button
							type='button'
							disabled={isLoading}
							onClick={onChangeOrderStatus}
						>
							{order.status === 'WAITING' && '👩‍🍳 Start cooking'}
							{order.status === 'IN_PRODUCTION' && '✅ Order is ready!'}
						</button>
					)}

					<button
						type='button'
						onClick={onCancelOrder}
						disabled={isLoading}
					>
						Cancel order
					</button>
				</OrderModalOptions>

			</OrderModalContainer>
		</OrderModalOverlay>
  )
}
