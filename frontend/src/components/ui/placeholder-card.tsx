/**
 * Component: PlaceholderCard
 * Purpose: Placeholder card for features in development
 * Added: MVP0
 */

import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface PlaceholderCardProps {
	icon: LucideIcon
	title: string
}

export const PlaceholderCard = ({ icon: Icon, title }: PlaceholderCardProps) => {
	return (
		<Card className="shadow-sm rounded-2xl">
			<CardContent className="flex flex-col items-center justify-center text-center p-8 space-y-4">
				<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm">
					<Icon className="h-8 w-8 text-primary" />
				</div>
				<h2 className="text-2xl font-semibold text-foreground">{title}</h2>
				<p className="text-base text-muted-foreground max-w-md">This feature will be added in a later MVP.</p>
			</CardContent>
		</Card>
	)
}
