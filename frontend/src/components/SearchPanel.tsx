import { CourseSearch } from './CourseSearch/CourseSearch'
import { formatTermLabel } from './planner/plannerUtils'
import type { Course } from '../types/Course'

type SearchPanelProps = {
  selectedTerm: string
  plannedCoursesCount: number
  onSelectCourse: (course: Course) => void
}

export function SearchPanel({
  selectedTerm,
  plannedCoursesCount,
  onSelectCourse,
}: SearchPanelProps) {
  return (
    <aside className="search-panel" aria-labelledby="search-heading">
      <div className="search-panel-heading">
        <div>
          <p className="section-kicker">Build your plan</p>
          <h2 id="search-heading">Find a course</h2>
        </div>
        <span className="search-count">{plannedCoursesCount} added</span>
      </div>
      <p className="search-target">Adding to {formatTermLabel(selectedTerm)}</p>
      <CourseSearch onSelect={onSelectCourse} />
      <div className="search-panel-footer">
        <span className="footer-sparkle" aria-hidden="true">✦</span>
        <p>Choose a term, then use Add course in a search result.</p>
      </div>
    </aside>
  )
}
