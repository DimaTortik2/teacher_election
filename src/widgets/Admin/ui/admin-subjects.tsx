import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
	AdminSubjectCardsList,
	SubjectForm,
} from '../../../features/admin-features'


import { ChangeEvent } from 'react'

import { usePostSubject, useGetSubjects } from '../../../shared'

export function AdminSubjects() {
	const {
		data,
		hasNextPage,
		refetchSubjects,
		fetchNextPage,
	} = useGetSubjects()

	const {
		postSubject,
		postSubjectIsSuccess,
	} = usePostSubject()

	const [inputText, setInputText] = useState('')

	const handleButtonClick = () => {
		postSubject({ title: inputText })
		setInputText('')
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
	}

	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('inview')
			fetchNextPage()
		}

		if (postSubjectIsSuccess) {
			refetchSubjects()
			console.log('data', data)
		}
	}, [
		inView,
		fetchNextPage,
		postSubjectIsSuccess,
		refetchSubjects,
		data,
		hasNextPage,
	])

	return (
		<div
			className='w-screen md:w-[80vw]
		 h-[90vh]handleClick
		 bg-zinc-600 flex flex-col items-center justify-start rounded-xl relative border-4 border-zinc-500 p-2'
		>
			<SubjectForm
				handleClick={handleButtonClick}
				value={inputText}
				onChange={handleInputChange}
			/>

			<AdminSubjectCardsList
				refetchSubjects={refetchSubjects}
				subjectsArray={data?.pages}
			>
				<li ref={ref}></li>
			</AdminSubjectCardsList>
		</div>
	)
}
