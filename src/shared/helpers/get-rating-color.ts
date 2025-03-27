export function getRatingColor(rating:number):string | undefined{
  return {
		1: '#fd9c47',
		2: '#fdbd47',
		3: '#fde047',
		4: '#ebfd47',
		5: '#d0fd47',
	}[rating]
}