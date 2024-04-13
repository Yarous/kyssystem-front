import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './CardBody.css'

export type CardBodyProps = {
	colSize?: number
	children?: React.ReactNode
	theme: 'light' | 'dark'
}

export default function CardBody({
	colSize = 5,
	children,
	theme,
}: CardBodyProps) {
	const backgroundColor = theme === 'light' ? '#C7C6C6' : '#1F2428'
	const borderColor = theme === 'light' ? '#D9D9D9' : '#24292E'

	return (
		<div className='cardBody'>
			<Col md={colSize}>
				<Card
					style={{
						backgroundColor,
						borderColor,
						borderRadius: '17px',
						borderWidth: '1px',
						overflow: 'hidden',
					}}
				>
					<Card.Body>{children}</Card.Body>
				</Card>
			</Col>
		</div>
	)
}
