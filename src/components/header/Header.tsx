import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LogoWhite from '../../assets/logo/logoWhite.svg'
import LogoDark from '../../assets/logo/logoDark.svg'
import UserAvatarLight from '../../assets/logo/userAvatarLight.svg'
import UserAvatarDark from '../../assets/logo/userAvatarDark.svg'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Header.css'

export default function Header() {
	const [expanded, setExpanded] = useState(false)
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

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
