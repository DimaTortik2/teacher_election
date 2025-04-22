interface IProps {
	className?: string
}

export function SendIcon({ className = '' }: IProps) {
	return (
		<div
			className={`inline-flex items-center justify-center rounded-full p-2 ${className}`}
		>
			<svg viewBox='0 0 744 744' className='w-full h-full' fill='currentColor'>
				<polygon points='121.16,345.8 590.12,197.94 443.87,671.03 319.7,473.26' />
				<line x1='200.41' y1='356.18' x2='535.09' y2='253.5' />
				<polyline points='256.78,389.06 342.57,443.85 431.63,585.2 501.89,370.33' />
				<line x1='509.05' y1='349.08' x2='512.1' y2='338.47' />
				<line x1='515.77' y1='323.77' x2='526.4' y2='290.88' />
			</svg>
		</div>
	)
}
