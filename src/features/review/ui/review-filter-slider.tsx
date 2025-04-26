import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Autoplay } from 'swiper/modules'
import clsx from 'clsx'
import { REWIEV_FILTER_ARR } from '../model/review-consts'

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

	return (
		<div className={clsx(className || 'w-full ')}>
			<div className='w-full bg-zinc-600 rounded-b-2xl p-2 h-[50px] border-solid border-b-[3px] border-zinc-700'>
				<Swiper
					slidesPerView={isMobile ? 3 : 5}
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
					{REWIEV_FILTER_ARR.map((text, i) => (
						<SwiperSlide key={i} className=' text-center'>
							<button>{text}</button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
