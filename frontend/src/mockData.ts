type SalahItem = { name: string; done: boolean }
type SalahDay = { date: string; salah: SalahItem[] }

export const initialSalahData: SalahDay[] = [
	{
		date: '2025-10-15',
		salah: [
			{ name: 'Fajr', done: true },
			{ name: 'Dhuhr', done: false },
			{ name: 'Asr', done: true },
			{ name: 'Maghrib', done: false },
			{ name: 'Isha', done: true }
		]
	},
	{
		date: '2025-10-16',
		salah: [
			{ name: 'Fajr', done: false },
			{ name: 'Dhuhr', done: true },
			{ name: 'Asr', done: false },
			{ name: 'Maghrib', done: true },
			{ name: 'Isha', done: false }
		]
	},
	{
		date: '2025-10-17',
		salah: [
			{ name: 'Fajr', done: true },
			{ name: 'Dhuhr', done: true },
			{ name: 'Asr', done: false },
			{ name: 'Maghrib', done: false },
			{ name: 'Isha', done: true }
		]
	},
	{
		date: '2025-10-18',
		salah: [
			{ name: 'Fajr', done: false },
			{ name: 'Dhuhr', done: false },
			{ name: 'Asr', done: true },
			{ name: 'Maghrib', done: true },
			{ name: 'Isha', done: false }
		]
	},
	{
		date: '2025-10-19',
		salah: [
			{ name: 'Fajr', done: true },
			{ name: 'Dhuhr', done: false },
			{ name: 'Asr', done: true },
			{ name: 'Maghrib', done: false },
			{ name: 'Isha', done: true }
		]
	},
	{
		date: '2025-10-20',
		salah: [
			{ name: 'Fajr', done: false },
			{ name: 'Dhuhr', done: true },
			{ name: 'Asr', done: false },
			{ name: 'Maghrib', done: true },
			{ name: 'Isha', done: true }
		]
	},
	{
		date: '2025-10-21',
		salah: [
			{ name: 'Fajr', done: true },
			{ name: 'Dhuhr', done: true },
			{ name: 'Asr', done: true },
			{ name: 'Maghrib', done: false },
			{ name: 'Isha', done: false }
		]
	},
	{
		date: '2025-10-22',
		salah: [
			{ name: 'Fajr', done: false },
			{ name: 'Dhuhr', done: true },
			{ name: 'Asr', done: true },
			{ name: 'Maghrib', done: true },
			{ name: 'Isha', done: true }
		]
	}
]
