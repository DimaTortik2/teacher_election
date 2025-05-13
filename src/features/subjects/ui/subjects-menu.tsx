import { MenuButton } from '@mui/base/MenuButton'
import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useGetSubjects } from '../../../shared/api/queries/subject.queries'

import { ITeacherForm } from '../../teachers'
import { SubjectListBox } from './subject-list-box'
import clsx from 'clsx'

interface IProps {
	buttonText: string
	register?: UseFormRegister<ITeacherForm>
	isRequired?: boolean
	className?: string
}

export function SubjectsMenu({ buttonText, register, isRequired, className }: IProps) {
	const {
		data,
		hasNextPage,
		refetchSubjects,
		fetchNextPage,
		getSubjectsIsSuccess,
	} = useGetSubjects()
	if (getSubjectsIsSuccess) console.log(data?.pages)
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('inview')
			fetchNextPage()
		}
	}, [inView, fetchNextPage, refetchSubjects, hasNextPage])

	return (
		<Dropdown>
			<MenuButton className={clsx('w-40 p-2 rounded-xl', className)}>
				{buttonText}
			</MenuButton>
			<Menu className='pt-3 z-[51]'>
				<SubjectListBox
					subjectsArray={data?.pages}
					register={register}
					isRequired={isRequired}
				>
					<option disabled className='h-0 w-0' ref={ref}>
						⠀
					</option>
				</SubjectListBox>
			</Menu>
		</Dropdown>
	)
}
