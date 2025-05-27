import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { IFetchNextPage } from "../../interfaces/interfaces"

export function useInfiniteScroll<T>({
	fetchNextPage,
	hasNextPage,
}: {
	fetchNextPage: IFetchNextPage<T>
	hasNextPage: boolean
}) {
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

  return ref
}