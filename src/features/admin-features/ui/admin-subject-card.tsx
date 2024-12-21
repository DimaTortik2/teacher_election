import clsx from "clsx"

interface IProps{
  subject : string
  className ?: string
}

export function AdminSubjectCard({subject,className}:IProps) {
	return (
		<div className={clsx(className,'py-4 bg-zinc-700 transition-colors text-white px-10 rounded-xl text-xl w-full flex items-start')}>
			{subject}
		</div>
	)
}
