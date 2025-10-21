import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { SquareArrowLeft } from 'lucide-react'

const NotFound = () => {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		console.error('404 Error: User attempted to access non-existent route:', location.pathname)
	}, [location.pathname])

	return (
		<div className="flex min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] items-center justify-center ">
			<div className="text-center">
				<h1 className="mb-4 text-4xl font-bold">404</h1>
				<p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
				<Button onClick={() => navigate('/')} variant="secondary" size="lg" className="rounded-2xl">
					<SquareArrowLeft />
					Return to Home
				</Button>
			</div>
		</div>
	)
}

export default NotFound
