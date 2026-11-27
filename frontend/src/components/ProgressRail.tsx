type RequirementRowProps = {
  icon: string
  iconClass: string
  title: string
  detail: string
}

function RequirementRow({
  icon,
  iconClass,
  title,
  detail,
}: RequirementRowProps) {
  return (
    <div className="requirement-row">
      <span className={`requirement-icon ${iconClass}`} aria-hidden="true">
        {icon}
      </span>
      <span className="requirement-copy">
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
      <span className="requirement-count">To track</span>
    </div>
  )
}

export function ProgressRail({ plannedUnits }: { plannedUnits: number }) {
  const progress = Math.min((plannedUnits / 120) * 100, 100)

  return (
    <aside className="progress-rail" aria-labelledby="progress-heading">
      <div className="rail-heading">
        <p className="section-kicker">Your degree</p>
        <h1 id="progress-heading">Progress</h1>
        <p className="rail-description">
          A snapshot of your path to graduation.
        </p>
      </div>

      <section className="degree-card" aria-label="Degree progress summary">
        <div className="degree-card-top">
          <span className="degree-icon" aria-hidden="true">✦</span>
          <span className="degree-label">Computing Science</span>
        </div>
        <div className="credit-count">
          <strong>{plannedUnits}</strong>
          <span>units planned</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Degree units planned"
          aria-valuenow={Math.min(plannedUnits, 120)}
          aria-valuemin={0}
          aria-valuemax={120}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="degree-footnote">Add courses to see your progress here.</p>
      </section>

      <section className="requirements" aria-labelledby="requirements-heading">
        <div className="section-title-row">
          <h2 id="requirements-heading">Requirement groups</h2>
          <button
            className="text-button"
            type="button"
            aria-label="View all degree requirements"
          >
            View all
          </button>
        </div>
        <RequirementRow icon="◈" iconClass="breadth" title="Lower division" detail="Core foundations" />
        <RequirementRow icon="⌘" iconClass="depth" title="Upper division" detail="Advanced courses" />
        <RequirementRow icon="✳" iconClass="electives" title="Electives" detail="Explore your interests" />
      </section>

      <div className="rail-tip">
        <span className="tip-icon" aria-hidden="true">✦</span>
        <p>
          <strong>Make it yours</strong>
          <br />
          Build a plan that fits your goals and pace.
        </p>
      </div>
      <p className="requirements-note">
        Requirements can vary by calendar year. Always confirm with the SFU Calendar.
      </p>
    </aside>
  )
}
