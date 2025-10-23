import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { initialSalahData, initialSalahDataTemplate } from '@/mockData'

type SalahItem = { name: string; done: boolean }
type SalahDay = { date: string; salah: SalahItem[] }
import { getLocalDateString, addDays } from '@/utils/utils'

type SalahState = {
	salahData: SalahDay[]
	currentDate: string
	today: string
	minDate: string
	setCurrentDate: (date: string) => void
	setToday: (date: string) => void
	goNextDay: () => void
	goPrevDay: () => void
	toggleSalah: (date: string, prayerName: string, done: boolean) => void
}

const getFirstOfMonth = () => {
	const d = new Date()
	d.setDate(1)
	return getLocalDateString(d)
}

export const useSalah = create<SalahState>()(
	persist(
		(set, get) => {
			const data = initialSalahData
			const today = new Date().toLocaleDateString('en-CA')
			const minDate = data.length ? data[0].date : getFirstOfMonth()

			const ensureDayExists = (arr: SalahDay[], date: string) => {
				if (arr.find((d) => d.date === date)) return arr
				return [...arr, initialSalahDataTemplate(date)].sort((a, b) => (a.date < b.date ? -1 : 1))
			}

			const initialData = ensureDayExists(data, today)

			return {
				salahData: initialData,
				currentDate: today,
				today,
				minDate,

				setCurrentDate: (date: string) => {
					set((state) => ({
						salahData: ensureDayExists(state.salahData, date),
						currentDate: date
					}))
				},
				setToday: (date: string) => {
					set((state) => ({
						salahData: ensureDayExists(state.salahData, date),
						currentDate: date,
						today: date
					}))
				},
				goNextDay: () => {
					set((state) => {
						const next = addDays(state.currentDate, 1)
						const maxDate = state.today
						const newDate = next > maxDate ? state.currentDate : next
						const newSalahData = ensureDayExists(state.salahData, newDate)
						return { salahData: newSalahData, currentDate: newDate }
					})
				},

				goPrevDay: () => {
					set((state) => {
						const prev = addDays(state.currentDate, -1)
						const newDate = prev < state.minDate ? state.currentDate : prev
						const newSalahData = ensureDayExists(state.salahData, newDate)
						return { salahData: newSalahData, currentDate: newDate }
					})
				},

				toggleSalah: (date: string, prayerName: string, done: boolean) => {
					set((state) => {
						const newSalahData = state.salahData.map((d) =>
							d.date === date
								? { ...d, salah: d.salah.map((s) => (s.name === prayerName ? { ...s, done } : s)) }
								: d
						)
						return { salahData: newSalahData }
					})
				}
			}
		},
		{ name: 'salahData', storage: createJSONStorage(() => localStorage) }
	)
)
