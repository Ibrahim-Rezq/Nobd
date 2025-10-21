/**
 * Page: Adhkar
 * Purpose: Adhkar tracking page (placeholder for MVP0)
 * Added: MVP0
 */

import { BookOpen } from 'lucide-react'
import { PlaceholderCard } from '@/components/ui/placeholder-card'

const Adhkar = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] px-4">
			<div className="w-full max-w-md mx-auto space-y-6">
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Adhkar Tracker</h1>
					<p className="text-base text-muted-foreground">Remember Allah with daily adhkar</p>
				</div>

				<PlaceholderCard icon={BookOpen} title="Adhkar Practice" />
			</div>
		</div>
	)
}

export default Adhkar
