import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Autoplay } from 'swiper/modules'
import clsx from 'clsx'

interface IProps {
	className?: string
}
export function ReviewFilterSlider({ className }: IProps) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const arr = [
		'только комменты',
		'еще звезды ',
		'самые новые',
		'самые старые',
		'от лучших',
		'с плохих',
	]

	return (
		<div className={clsx(className || 'w-full ')}>
			<div className='w-full h-1/2 bg-theme-700 rounded-t-2xl p-2 text-center'>
				<p>Фильтрация</p>
			</div>
			<div className='w-full h-1/2 bg-theme-600 rounded-b-2xl border-solid border-b-2 border-theme-700 shadow-lg p-2'>
				<Swiper
					slidesPerView={isMobile ? 2 : 5}
					spaceBetween={10}
					className='w-full'
					freeMode={true}
					loop={isMobile}
					modules={[Autoplay]}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
				>
					{arr.map((text, i) => (
						<SwiperSlide key={i} className=' text-center'>
							<button>{text}</button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
