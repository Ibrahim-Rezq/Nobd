/**
 * Page: NotFound
 * Purpose: 404 error page with navigation back to home
 * Added: MVP0
 */

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
		<div className="flex min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] items-center justify-center px-4">
			<div className="text-center max-w-md mx-auto">
				<h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
				<p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
				<Button onClick={() => navigate('/')} variant="outline" size="lg">
					<SquareArrowLeft className="h-5 w-5" />
					Return to Home
				</Button>
			</div>
		</div>
	)
}

export default NotFound
