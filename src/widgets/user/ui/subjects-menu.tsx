import { MyListBox } from '../../../widgets/user'
import { MenuButton } from '@mui/base/MenuButton'
import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'
import { ITeacherForm, useGetSubjects } from '../../../shared'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface IProps {
	buttonText: string
	register?: UseFormRegister<ITeacherForm>
}

export function SubjectsMenu({ buttonText, register }: IProps) {
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
			<MenuButton className='bg-zinc-700 w-40 p-2 rounded-xl'>
				{buttonText}
			</MenuButton>
			<Menu className='pt-3 z-[2]'>
				<MyListBox subjectsArray={data?.pages} register={register}>
					<option disabled className='h-0 w-0' ref={ref}>
						⠀
					</option>
				</MyListBox>
			</Menu>
		</Dropdown>
	)
}
