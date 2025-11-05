import "./GameControls.sass";

export const GameControlsComponent = () => {
  return (
    <div className="gamecontrols-component">
      <div className="controls-title">Controls</div>
      <div className="controls-grid">
        <div className="control-item">
          <span className="key">↑</span>
          <span className="key">W</span>
          <span className="label">Up</span>
        </div>
        <div className="control-item">
          <span className="key">↓</span>
          <span className="key">S</span>
          <span className="label">Down</span>
        </div>
        <div className="control-item">
          <span className="key">←</span>
          <span className="key">A</span>
          <span className="label">Left</span>
        </div>
        <div className="control-item">
          <span className="key">→</span>
          <span className="key">D</span>
          <span className="label">Right</span>
        </div>
      </div>
    </div>
  )
}
