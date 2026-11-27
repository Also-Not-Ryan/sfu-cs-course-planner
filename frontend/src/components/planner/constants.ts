import type { Term } from './types'

export const concentrations = [
  'Artificial Intelligence',
  'Visual & Interactive Computing',
  'Computing Systems',
  'Information Systems',
  'Programming Languages & Software',
  'Theoretical Computing Science',
]

export const terms: Term[] = ['Fall', 'Spring', 'Summer']

export const termDates: Record<Term, string> = {
  Fall: 'Sep – Dec',
  Spring: 'Jan – Apr',
  Summer: 'May – Aug',
}
