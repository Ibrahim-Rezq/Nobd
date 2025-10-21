/**
 * Component: BottomNav
 * Purpose: Mobile bottom navigation bar with icons
 * Added: MVP0
 */

import { Home, MapPinHouseIcon, BookOpen, Target, Info } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navItems = [
	{ to: '/', icon: Home, label: 'Home' },
	{ to: '/salah', icon: MapPinHouseIcon, label: 'Salah' },
	{ to: '/adhkar', icon: BookOpen, label: 'Adhkar' },
	{ to: '/dunya', icon: Target, label: 'Dunya' },
	{ to: '/about', icon: Info, label: 'About' }
]

export const BottomNav = () => {
	return (
		<nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
			<div className="flex items-center justify-around h-16 px-2">
				{navItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							cn(
								'flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-200 ease-in-out min-w-[60px]',
								isActive
									? 'text-primary bg-primary/10'
									: 'text-muted-foreground hover:text-foreground hover:bg-muted'
							)
						}
					>
						{({ isActive }) => (
							<>
								<item.icon className={cn('h-6 w-6', isActive && 'fill-primary/20')} />
								<span className="text-xs font-medium">{item.label}</span>
							</>
						)}
					</NavLink>
				))}
			</div>
		</nav>
	)
}
