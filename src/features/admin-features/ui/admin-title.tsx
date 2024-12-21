interface IProps {
	children: string
}

export function AdminTitle({ children }: IProps) {

	const name =
		{
			Dima: 'Димасик',
			Stas: 'Стасик',
		}[children] || 'Бро'

	return (
		<h1 className='text-[50px] sm:text-[100px] mb-40'>
			Добро <br /> пожаловать {name} !
		</h1>
	)
}
