import { MenuButton } from '@mui/base/MenuButton'
import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useGetSubjects } from '../../../shared/api/queries/subject.queries'

import { ITeacherForm } from '../../teachers'
import { SubjectListBox } from './subject-list-box'

interface IProps {
	buttonText: string
	register?: UseFormRegister<ITeacherForm>
	isRequired?: boolean
}

export function SubjectsMenu({ buttonText, register, isRequired }: IProps) {
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
			<MenuButton className='bg-theme-700 w-40 p-2 rounded-xl'>
				{buttonText}
			</MenuButton>
			<Menu className='pt-3 z-[2]'>
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
