import { MenuButton } from '@mui/base/MenuButton'
import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'

import { UseFormRegister } from 'react-hook-form'

import clsx from 'clsx'
import { SubjectsListBox } from './subjects-list-box'

import { ITeacherForm } from '@/features/teachers/admin'

interface IProps {
	buttonText: string
	register?: UseFormRegister<ITeacherForm>
	isRequired?: boolean
	className?: string
}

export function SubjectsSelectButton({
	buttonText,
	register,
	isRequired,
	className,
}: IProps) {
	return (
		<Dropdown>
			<MenuButton className={clsx('w-40 p-2 rounded-xl', className)}>
				{buttonText}
			</MenuButton>
			<Menu className='pt-3 z-[1301]'>
				<SubjectsListBox register={register} isRequired={isRequired} />
			</Menu>
		</Dropdown>
	)
}
