import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { getLocalDateString, addDays } from '@/lib/utils'
import { useEffect, useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { initialSalahData } from '@/mockData'
type SalahItem = { name: string; done: boolean }
type SalahDay = { date: string; salah: SalahItem[] }
type FormValues = Record<string, boolean>

const getFirstOfMonth = () => {
	const d = new Date()
	d.setDate(1)
	return d.toISOString().split('T')[0]
}

const Salah: React.FC = () => {
	const today = getLocalDateString(new Date()) // e.g. 2025-10-22
	const loadSalahFromLocalStorage = () => {
		const saved = localStorage.getItem('salah')
		return saved ? JSON.parse(saved) : initialSalahData
	}
	// Replace this with your API data / initial payload
	const [salahTracking, setSalahTracking] = useState<SalahDay[]>(loadSalahFromLocalStorage())

	// minDate rules:
	//  - if user has recorded days -> earliest recorded day
	//  - else, if you have user.firstSignIn -> that (you can plug it in)
	//  - fallback -> first of this month
	const minDate = useMemo(() => {
		if (salahTracking.length) return salahTracking[0].date
		// TODO: replace with user.firstSignIn when available
		return getFirstOfMonth()
	}, [salahTracking])

	const maxDate = today

	const [currentDate, setCurrentDate] = useState<string>(maxDate)

	const currentDay = useMemo(() => {
		return salahTracking.find((d) => d.date === currentDate) ?? salahTracking[salahTracking.length - 1]
	}, [salahTracking, currentDate])

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

	const goNextDay = () =>
		setCurrentDate((prev) => {
			const next = addDays(prev, 1)
			return next > maxDate ? prev : next
		})

	const goPrevDay = () =>
		setCurrentDate((prev) => {
			const prevDay = addDays(prev, -1)
			return prevDay < minDate ? prev : prevDay
		})

	// update the salahTracking day immutably when a prayer toggles
	const handleToggle = (prayerName: string, checked: boolean) => {
		setSalahTracking((prev) =>
			prev.map((d) =>
				d.date === currentDate
					? { ...d, salah: d.salah.map((s) => (s.name === prayerName ? { ...s, done: checked } : s)) }
					: d
			)
		)
		// Optionally call API/save here (debounced if needed)
	}
	useEffect(() => {
		localStorage.setItem('salah', JSON.stringify(salahTracking))
	}, [salahTracking])
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] px-4">
			<div className="w-full max-w-md mx-auto space-y-6">
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Salah Tracker</h1>
					<p className="text-base text-muted-foreground">Track your five daily prayers</p>
					<p className="text-base text-muted-foreground">
						Selected Date: {new Date(currentDate).toDateString()}
					</p>
					<div className="flex gap-4 justify-center mt-4">
						<button onClick={goPrevDay} className="px-4 py-2 border rounded hover:bg-muted/50">
							Previous Day
						</button>
						<button onClick={goNextDay} className="px-4 py-2 border rounded hover:bg-muted/50">
							Next Day
						</button>
					</div>
				</div>

				<Card className="w-full backdrop-blur-sm bg-opacity-50 border-opacity-40">
					<CardContent className="pt-6 space-y-6">
						{currentDay?.salah?.map((prayer) => (
							<div
								key={prayer.name}
								className="flex items-center justify-between p-3 rounded-lg select-none hover:bg-muted/50 transition-colors"
							>
								<div className="flex items-center space-x-3">
									{/* Controller adapts Radix's non-native API to RHF */}
									<Controller
										name={prayer.name}
										control={control}
										defaultValue={!!prayer.done}
										render={({ field }) => (
											<Checkbox
												id={prayer.name}
												// Radix shadcn Checkbox uses `checked` prop and calls `onCheckedChange(value)` with boolean | "indeterminate"
												checked={field.value}
												// IMPORTANT: use the Radix / shadcn callback name (onCheckedChange)
												onCheckedChange={(val: boolean | 'indeterminate') => {
													const checked = val === true
													field.onChange(checked) // update react-hook-form
													handleToggle(prayer.name, checked) // update app data once
												}}
											/>
										)}
									/>
									<label
										htmlFor={prayer.name}
										className="text-base font-medium leading-none cursor-pointer peer-disabled:opacity-70"
									>
										{prayer.name}
									</label>
								</div>
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Salah
