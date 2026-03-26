import './TopTabs.css'

export default function TopTabs({ tabs, activeTab, setActiveTab }) {
  const getTabColor = (index) => {
    if (index === 0) return 'var(--color-tab-pink)'; // fallback if ABOUT ME wasn't first
    const colors = [
      'var(--color-tab-purple)', 
      'var(--color-tab-cyan)', 
      'var(--color-tab-green)', 
      'var(--color-tab-pink)'
    ];
    return colors[(index - 1) % colors.length];
  }

  return (
    <div className="top-tabs-container">
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            className={`tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            style={{ 
              backgroundColor: isActive 
                ? 'var(--color-inner-cream)' 
                : (index === 0 ? 'var(--color-tab-pink)' : getTabColor(index)) 
            }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
