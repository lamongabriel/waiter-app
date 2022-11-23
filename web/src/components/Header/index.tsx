import { HeaderContainer, HeaderWrapper } from './styles'

import logo from '../../assets/images/logo.svg'

export function Header () {
  return (
		<HeaderContainer>
			<HeaderWrapper>
				<div>
					<h2>Orders</h2>
					<p>Manage your client's orders</p>
				</div>
				<div>
					<img src={logo} alt="Waiter APP Logo" />
				</div>
			</HeaderWrapper>
		</HeaderContainer>
  )
}
