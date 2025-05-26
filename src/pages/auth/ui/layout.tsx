import { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='text-white backdrop-blur-3xl bg-theme-authform w-full min-[500px]:w-[400px] h-full min-[500px]:h-5/6 max-h-[700px] min-[500px]:rounded-2xl '>
			{children}
		</div>
	)
}
