import { Card, CardContent } from '@/components/ui/card'
import { Sun, Sunrise, Sunset, Moon, Star } from 'lucide-react'
import { Control, Controller } from 'react-hook-form'

type SalahCardProps = {
	name: string
	control: Control<Record<string, boolean>>
	onToggle: (name: string, checked: boolean) => void
}

export function SalahCard({ name, control, onToggle }: SalahCardProps) {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={false}
			render={({ field }) => {
				const activeClass = field.value ? 'bg-muted/50 ring-2 ring-accent' : ''
				return (
					<Card
						className={`w-full backdrop-blur-sm bg-opacity-50 border-opacity-40 transition-transform duration-300 cursor-pointer select-none ${activeClass}`}
						role="button"
						aria-label={`Toggle ${name} prayer completion`}
						aria-pressed={field.value}
						onClick={() => {
							const next = !field.value
							field.onChange(next)
							onToggle(name, next)
						}}
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								const next = !field.value
								field.onChange(next)
								onToggle(name, next)
							}
						}}
					>
						<CardContent className="pt-4 pb-4 px-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-3">
									<div className="p-2 rounded-md bg-muted/20">
										{(() => {
											const map: Record<string, React.ComponentType<{ className?: string }>> = {
												Fajr: Sunrise,
												Dhuhr: Sun,
												Asr: Sun,
												Maghrib: Sunset,
												Isha: Moon
											}
											const Icon = map[name] ?? Star
											return (
												<Icon
													className={`w-5 h-5 text-foreground transform transition-all duration-200 ${
														field.value ? 'scale-110 rotate-6' : 'group-hover:scale-105'
													}`}
													aria-hidden="true"
												/>
											)
										})()}
									</div>
									<span className="text-base font-medium">{name}</span>
								</div>
								<div aria-hidden className="ml-2">
									{field.value ? (
										<span className="text-sm text-foreground font-medium">Done</span>
									) : null}
								</div>
							</div>
						</CardContent>
					</Card>
				)
			}}
		/>
	)
}
