import './CardBody.css'

export type CardBodyProps = {
	colSize?: number
	children?: React.ReactNode
}

export default function CardBody({
	colSize,
	children,
}: Readonly<CardBodyProps>) {
	return (
		<div className={`col-${colSize ?? 5}`}>
			<div className='cardBody'>
				<div className='card-body'>{children}</div>
			</div>
		</div>
	)
}
