import styled from 'styled-components'

export const Container = styled.main`
	max-width: 74rem;
	width: 100%;
	padding: 0rem 2rem;
	margin: 0 auto;

	margin: 3rem auto;

	display: flex;
	gap: 2rem;

	@media (max-width: 768px){
		flex-direction: column;
		padding: 0rem 1rem;
	}
`
