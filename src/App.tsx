import { useState } from 'react'
import Header from './components/header/Header'
import './styles/main.css'
import CardBody from './common/CardBody/CardBody'

function App() {
	// Указываем тип состояния theme как 'light' | 'dark'
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		document.documentElement.className = theme === 'light' ? 'dark' : 'light'
	}

	return (
		<div className='App'>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<CardBody theme={theme}>
				<p>
					In adipisicing esse cillum amet anim. Ex anim deserunt aliquip in
					dolor minim eiusmod. Ex ex incididunt tempor et ea dolore deserunt
					adipisicing ea excepteur commodo sit. Ullamco enim irure non velit
					consequat nisi sunt enim enim ea.
				</p>
			</CardBody>
		</div>
	)
}

export default App
