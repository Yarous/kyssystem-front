import { useState } from 'react'
// Pictures
import Logo from '../../assets/logo/logoWhite.svg'
import ThemeSwitcher from '../../assets/logo/themeSwitcherLight.svg'
import UserAvatar from '../../assets/logo/userAvatarLight.svg'
//Bootstrap + CSS components ( *︾▽︾)
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Header.css'

export default function Header() {
	const [expanded, setExpanded] = useState(false)

	return (
		<Navbar expand='lg' expanded={expanded}>
			<Container>
				<Navbar.Brand href='#home'>
					<img
						src={Logo}
						alt='Logo'
						height='50'
						className='d-inline-block align-top'
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => setExpanded(!expanded)}
					className='burger-toggler'
				/>

				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#olympiad'>Олимпиада</Nav.Link>
						<Nav.Link href='#help'>Помощь</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href='#themeSwitch' className='theme-switcher'>
							<img src={ThemeSwitcher} alt='Theme Switch' />
						</Nav.Link>
						<Nav.Link href='#userProfile' className='ml-auto user-avatar'>
							<img src={UserAvatar} alt='User' />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
