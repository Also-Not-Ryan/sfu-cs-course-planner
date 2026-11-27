import type { Course } from '../../types/Course'

export type Term = 'Fall' | 'Spring' | 'Summer'
export type SemesterCourses = Record<string, Course[]>
export type SemesterOption = { key: string; label: string }
