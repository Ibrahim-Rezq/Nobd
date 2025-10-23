import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const areDatesEqual = (date1: Date, date2: Date): boolean => {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	)
}

export const getLocalDateString = (date: Date) => {
	return date.toLocaleDateString('en-CA')
}
export const addDays = (isoDate: string, days: number) => {
	const [yStr, mStr, dStr] = isoDate.split('-')
	const year = Number(yStr)
	const monthIndex = Number(mStr) - 1 // JS months are 0-based
	const day = Number(dStr)

	// Create a local date at the correct local day and add delta days
	const dt = new Date(year, monthIndex, day + days)

	const y = dt.getFullYear()
	const m = (dt.getMonth() + 1).toString().padStart(2, '0')
	const d = dt.getDate().toString().padStart(2, '0')

	return `${y}-${m}-${d}`
}
