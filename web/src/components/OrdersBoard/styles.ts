import styled from 'styled-components'

export const Board = styled.div`
	padding: 1rem;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius: 1rem;

	flex: 1;
`

export const BoardHeader = styled.header`
	padding: 0.5rem;
	font-size: 0.875rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`

export const BoardData = styled.div`
	button{
		border: none;
		border: 1px solid rgba(204, 204, 204, 0.4);
		border-radius: 0.5rem;

		background-color: #FFFFFF;

		height: 8rem;
		width: 100%;
		margin-top: 1.5rem;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 0.25rem;

		overflow: hidden;

		transition: transform 200ms;
		&:hover {
			transform: scale(1.05);
		}

		strong {
			font-weight: 500;
			font-size: 1rem;
		}

		span {
			font-size: 0.875rem;
			color: #666;
		}
	}
`
