/**
 * Component: TopNav
 * Purpose: Desktop top navigation bar with theme toggle
 * Added: MVP0
 */

import { Home, MapPinHouseIcon, BookOpen, Target, Info } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/layout/theme-toggle'

const navItems = [
	{ to: '/', icon: Home, label: 'Home' },
	{ to: '/salah', icon: MapPinHouseIcon, label: 'Salah' },
	{ to: '/adhkar', icon: BookOpen, label: 'Adhkar' },
	{ to: '/dunya', icon: Target, label: 'Dunya' },
	{ to: '/about', icon: Info, label: 'About' }
]

export const TopNav = () => {
	return (
		<nav className="hidden md:flex items-center justify-between px-6 py-4 bg-card border-b border-border shadow-sm">
			<div className="flex items-center gap-2">
				<MapPinHouseIcon className="h-6 w-6 text-primary" />
				<span className="text-xl font-semibold text-foreground">Nobd</span>
			</div>

			<div className="flex items-center gap-1">
				{navItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							cn(
								'flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-200 ease-in-out',
								isActive
									? 'text-primary bg-primary/10 font-medium'
									: 'text-muted-foreground hover:text-foreground hover:bg-muted'
							)
						}
					>
						<item.icon className="h-6 w-6" />
						<span>{item.label}</span>
					</NavLink>
				))}
			</div>

			<ThemeToggle />
		</nav>
	)
}
