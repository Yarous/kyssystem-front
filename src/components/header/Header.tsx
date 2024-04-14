import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Container, Navbar, Nav } from 'react-bootstrap'
import LogoWhite from '../../assets/logo/logoWhite.svg'
import LogoDark from '../../assets/logo/logoDark.svg'
import UserAvatarLight from '../../assets/logo/userAvatarLight.svg'
import UserAvatarDark from '../../assets/logo/userAvatarDark.svg'
import './Header.css'

interface HeaderProps {
	theme: 'light' | 'dark'
	toggleTheme: () => void
}

// Использование интерфейса для аннотации типов пропсов
const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
	const [expanded, setExpanded] = useState(false)

	// Выбор лого и аватара в зависимости от темы
	const logo = theme === 'light' ? LogoWhite : LogoDark
	const userAvatar = theme === 'light' ? UserAvatarLight : UserAvatarDark

	return (
		<div className={`main-header ${theme}`}>
			<Navbar expand='lg' expanded={expanded}>
				<Container>
					<Navbar.Brand href='#home'>
						<img
							src={logo}
							alt='Logo'
							height='50'
							className='d-inline-block align-top'
						/>
					</Navbar.Brand>
					<Navbar.Toggle
						onClick={() => setExpanded(!expanded)}
						aria-controls='responsive-navbar-nav'
						className='burger-toggler'
					/>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#olympiad' className={`${theme}-link`}>
								Олимпиада
							</Nav.Link>
							<Nav.Link href='#help' className={`${theme}-link`}>
								Помощь
							</Nav.Link>
						</Nav>
						<Nav>
							<ThemeToggle toggleTheme={toggleTheme} theme={theme} />
							<Nav.Link href='#userProfile' className='ml-auto user-avatar'>
								<img src={userAvatar} alt='User' />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default Header
