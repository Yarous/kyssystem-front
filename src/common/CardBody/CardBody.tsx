import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import './CardBody.css'

export type CardBodyProps = {
	colSize?: number
	children?: React.ReactNode
	theme: 'light' | 'dark'
}

export default function CardBody({
	colSize = 12,
	children,
	theme,
}: CardBodyProps) {
	const backgroundColor = theme === 'light' ? '#C7C6C6' : '#1F2428'

	return (
		<div className={`cardBody ${theme}`}>
			<Container>
				<Col md={colSize}>
					<Card
						style={{
							backgroundColor,
							borderRadius: '17px',
							borderWidth: '1px',
							overflow: 'hidden',
						}}
					>
						<Card.Body>{children}</Card.Body>
					</Card>
				</Col>
			</Container>
		</div>
	)
}
