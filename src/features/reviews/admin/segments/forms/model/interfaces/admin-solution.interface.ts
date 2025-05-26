export type ApprovementType = 'unapprove' | 'approve'

export interface IApprovementSolution {
	text: string
	id: string
	type: ApprovementType
}
