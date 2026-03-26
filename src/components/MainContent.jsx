import './MainContent.css'

export default function MainContent({ profile, skills }) {
  
  const name = profile?.name || 'VA❤NI JAIN';
  const nameParts = name.split('❤');
  
  const aboutText = profile?.about_text || 'Hi! I am testing my portfolio.';

  return (
    <div className="main-content">
      
      <div className="header-section">
        <h1 className="name-title">
          {nameParts.map((part, index) => (
            <span key={index}>
              {part}
              {index < nameParts.length - 1 && <span className="heart-letter">❤</span>}
            </span>
          ))}
        </h1>
        <p className="about-text">
          {aboutText}
        </p>
      </div>

      <div className="skills-section">
        <div className="pill-title pink skills-pill">SKILLS</div>
        
        <div className="skills-cloud">
          {skills && skills.map((skill) => {
            // "type" stores the css class names (e.g. "ribbon teal")
            // We use the shape to determine which typography classes to apply
            let textClass1 = "skill-text-serif";
            let textClass2 = "skill-text-small";

            if (skill.type.includes('ribbon')) {
              textClass1 = "skill-text-large";
              textClass2 = "skill-text-small";
            } else if (skill.type.includes('badge') || skill.type.includes('pill')) {
              textClass1 = "skill-text-script";
              textClass2 = ""; 
            } else if (skill.type.includes('arch')) {
              textClass1 = "skill-text-cursive";
              textClass2 = "skill-text-caps";
            } else if (skill.type.includes('starburst')) {
              textClass1 = "skill-text-serif";
              textClass2 = "skill-text-tiny";
            }

            return (
              <div key={skill.id} className={`skill-shape ${skill.type}`}>
                <span className={textClass1}>{skill.name}</span>
                {skill.subtitle && (
                  <span className={textClass2}>{skill.subtitle}</span>
                )}
              </div>
            )
          })}

          {/* Decorative stars */}
          <span className="decor-star s1">⭐</span>
          <span className="decor-star s2">⭐</span>
          
        </div>
      </div>
      
      {/* Footer / Favorites */}
      <div className="favorites-section">
        <div className="pill-title pink">FAVORITES</div>
        <div className="icons-row">
          <div className="icon-box blue">🐱</div>
          <div className="icon-box yellow">🥋</div>
          <div className="icon-box purple">📚</div>
          <div className="icon-box green">✂️</div>
          <div className="icon-box purple2">🖌️</div>
          <div className="icon-box pink">💃</div>
        </div>
      </div>

    </div>
  )
}
