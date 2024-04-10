import React from 'react'
import { Nav } from 'react-bootstrap'
import ThemeSwitcherLight from '../../assets/logo/themeSwitcherLight.svg'
import ThemeSwitcherDark from '../../assets/logo/themeSwitcherDark.svg'

interface ThemeToggleProps {
	toggleTheme: () => void
	theme: 'light' | 'dark'
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {
	return (
		<Nav.Link
			href='#themeSwitch'
			className='theme-switcher'
			onClick={toggleTheme}
		>
			<img
				src={theme === 'light' ? ThemeSwitcherLight : ThemeSwitcherDark}
				alt='Theme Switch'
				style={{
					transition: 'transform 0.3s',
				}}
			/>
		</Nav.Link>
	)
}

export default ThemeToggle
