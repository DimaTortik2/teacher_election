export function TestPage() {
	const messages = ['']

	return (
		<div className='w-full flex flex-col justify-start gap-6 p-2 mt-10'>
			{messages?.map(el => (
				<div className=' w-full flex flex-col gap-[5px] items-start text-xl px-2'>
					<div className='w-full  flex word-wrap bg-zinc-700 rounded-2xl p-2 items-center justify-between'>
						<p className='w-full mr-2 word-wrap'> {el}</p>
					</div>
				</div>
			))}
		</div>
	)
}
