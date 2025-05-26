import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'

import { IconButton } from '@mui/material'

export function ApprovementTools({
	onApprove,
	onDeny,
	ApprovementId,
	text,
}: {
	onApprove: ({ id, text }: { id: string; text: string }) => void
	onDeny: ({ id, text }: { id: string; text: string }) => void
	ApprovementId: string
	text: string
}) {
	return (
		<div className='h-full flex flex-col justify-center'>
			<IconButton onClick={() => onApprove({ id: ApprovementId, text })}>
				<ThumbUpOffAltIcon />
			</IconButton>
			<IconButton onClick={() => onDeny({ id: ApprovementId, text })}>
				<ThumbDownOffAltIcon />
			</IconButton>
		</div>
	)
}
