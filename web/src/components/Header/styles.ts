import styled from 'styled-components'

export const HeaderContainer = styled.header`
	background-color: #D73035;
	color: #fff;
	width: 100%;
	height: 12.375rem;
	display: flex;
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
`
