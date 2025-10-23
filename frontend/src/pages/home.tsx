/**
 * Page: Home
 * Purpose: Landing page with app introduction
 * Added: MVP0
 */

import { MapPinHouseIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] px-4">
			<div className="text-center space-y-6 max-w-2xl mx-auto">
				<div className="flex justify-center mb-4">
					<div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm">
						<MapPinHouseIcon className="h-10 w-10 text-primary" />
					</div>
				</div>

				<h1 className="text-3xl md:text-5xl font-bold text-foreground">Nobd</h1>

				<p className="text-base md:text-xl text-muted-foreground leading-relaxed">
					A calm and minimal routine tracker for your spiritual and daily habits. Track your Salah, Adhkar,
					and Dunya goals with peace and intention.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button onClick={() => navigate('/salah')} size="lg">
						Start with Salah
					</Button>
					<Button onClick={() => navigate('/adhkar')} variant="outline" size="lg">
						Explore Adhkar
					</Button>
				</div>

				<p className="text-sm text-muted-foreground pt-8">نُبْد — "We worship"</p>
			</div>
		</div>
	)
}

export default Home
