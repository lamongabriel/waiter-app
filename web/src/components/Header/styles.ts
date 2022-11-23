import styled from 'styled-components'

export const HeaderContainer = styled.header`
	background-color: #D73035;
	color: #fff;
	width: 100%;
	height: 12.375rem;
	display: flex;

	padding: 1.75rem 0;

	@media (max-width: 768px){
		height: 7.5rem;
		padding: 1rem 0;

		div{
			&:nth-child(2){
				height: 100%;

				img{
					height: 100%;
					width: auto;
				}
			}
		}
	}
`

export const HeaderWrapper = styled.div`
	max-width: 74rem;
	width: 100%;
	padding: 0rem 2rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h2{
		font-size: 2rem;
		font-weight: 600;
	}
	p{
		font-size: 1rem;
		font-weight: 400;
		margin-top: 0.5rem;
	}

	@media (max-width: 768px){

		padding: 0rem 1rem;

		h2{
			font-size: 1.125rem;
		}
		p{
			font-size: 0.75rem;
		}
	}
`
