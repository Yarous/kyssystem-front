import React from 'react'
import CardBody from './common/CardBody/CardBody'
import Header from './components/header/Header'

const App: React.FC = () => {
	return (
		<div className='app-container'>
			<Header />
			<div className='content'>
				<CardBody theme='light'>{/* Контент CardBody */}</CardBody>
			</div>
		</div>
	)
}

export default App
