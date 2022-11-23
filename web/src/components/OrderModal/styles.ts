import styled from 'styled-components'

export const OrderModalOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);

	inset: 0;
	position: fixed;

	width: 100%;
	height: 100%;

	z-index: 5;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const OrderModalContainer = styled.div`
	background-color: #fff;
	padding: 2rem;
	border-radius: 0.5rem;

	width: 100%;
	max-width: 30rem;
	margin: 0 1rem;

	section{
		margin-top: 2rem;

		.status {
			display: flex;
			gap: 0.5rem;
			margin-top: 0.5rem;
		}
	}

	footer{
		margin-top: 2rem;
	}

	h1 {
		font-weight: 600;
		font-size: 1.5rem;
	}

	h3{
		font-size: 1rem;
		font-weight: 600;
	}

	h4 {
		font-weight: 500;
		font-size: 0.875rem;
		opacity: 0.8;
	}
`

export const OrderModalHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;

	button {
		border: none;
		background-color: transparent;
		display: flex
	}
`

export const OrderModalDetails = styled.section`
	h4{
		margin-bottom: 1rem;
	}

	>div {
		.item {
			display: flex;
			margin-top: 1rem;
			gap: 0.75rem;

			figure {
				width: 3rem;
				height: 2.5rem;

				min-width: 3rem;
				min-height: 2.5rem;

				display: flex;

				border-radius: 0.5rem;
				overflow: hidden;

				img {
					object-fit: cover;
				}
			}

			>div{
				span {
					color: #666666;
					font-weight: 400;
				}
			}
		}
	}
`

export const OrderModalTotal = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const OrderModalOptions = styled.footer`

	display: flex;
	flex-direction: column;
	gap: 1rem;

	button{

		transition: transform 200ms;
		&:hover{
			transform: scale(1.05);
		}

		&:nth-child(1){
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.6875rem 0;
			border-radius: 3rem;

			background-color: #333333;
			border: none;

			color: #fff;
			font-weight: 600;
		}

		&:nth-child(2){
			border: none;
			color: #D73035;

			font-weight: 600;
			background-color: transparent;
		}
	}
`
