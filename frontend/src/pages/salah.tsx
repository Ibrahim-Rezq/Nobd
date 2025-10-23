import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useSalah } from '@/store/salahStore'
import { SalahCard } from '@/components/salah/salah-card'
type SalahItem = { name: string; done: boolean }
type SalahDay = { date: string; salah: SalahItem[] }
type FormValues = Record<string, boolean>

const Salah: React.FC = () => {
	const { salahData, today: maxDate, currentDate, minDate, goNextDay, goPrevDay, toggleSalah } = useSalah()

	const currentDay = useMemo(() => {
		return salahData.find((d) => d.date === currentDate) ?? salahData[salahData.length - 1]
	}, [salahData, currentDate])

	const { control, reset } = useForm<FormValues>({
		defaultValues: currentDay?.salah?.reduce((acc, s) => {
			acc[s.name] = !!s.done
			return acc
		}, {} as FormValues)
	})

	useEffect(() => {
		if (!currentDay) return
		const defaults = currentDay.salah.reduce((acc, s) => {
			acc[s.name] = !!s.done
			return acc
		}, {} as FormValues)
		reset(defaults)
	}, [currentDay, reset])

	const isAtMax = currentDate >= maxDate
	const isAtMin = currentDate <= minDate

	const handleToggle = (prayerName: string, checked: boolean) => {
		toggleSalah(currentDate, prayerName, checked)
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] px-4">
			<div className="w-full max-w-md mx-auto space-y-6">
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Salah Tracker</h1>
					<p className="text-base text-foreground">Keep tabs on your daily prayers—five times a day!</p>
					<p className="text-sm text-muted-foreground">
						Track them for this month and get ready for even more updates coming soon!
					</p>
					<p className="text-base text-muted-foreground">
						Selected Date: <span className="text-foreground">{new Date(currentDate).toDateString()}</span>
					</p>
					<div className="flex gap-4 justify-center mt-4">
						<button
							onClick={goPrevDay}
							disabled={isAtMin}
							className={`px-4 py-2 border rounded hover:bg-muted/50 ${isAtMin ? 'opacity-50 cursor-not-allowed' : ''}`}
						>
							Previous Day
						</button>
						<button
							onClick={goNextDay}
							disabled={isAtMax}
							className={`px-4 py-2 border rounded hover:bg-muted/50 ${isAtMax ? 'opacity-50 cursor-not-allowed' : ''}`}
						>
							Next Day
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4">
					{currentDay?.salah?.map((prayer) => (
						<SalahCard key={prayer.name} name={prayer.name} control={control} onToggle={handleToggle} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Salah
