import './MainContent.css'

export default function MainContent() {
  return (
    <div className="main-content">
      
      <div className="header-section">
        <h1 className="name-title">VA<span className="heart-letter">❤</span>NI JAIN</h1>
        <p className="about-text">
          Hi! I am 8 years old and I love learning new things. I specialize in trying my best at all my hobbies! Welcome to my portfolio where I share my skills and fun projects.
        </p>
      </div>

      <div className="skills-section">
        <div className="pill-title pink skills-pill">SKILLS</div>
        
        <div className="skills-cloud">
          
          <div className="skill-shape ribbon teal">
            <span className="skill-text-large">Bharatnatyam</span>
            <span className="skill-text-small">(lvl 3)</span>
          </div>
          
          <div className="skill-shape badge pink">
            <span className="skill-text-script">Artist</span>
          </div>

          <div className="skill-shape arch green">
            <span className="skill-text-cursive">Programming</span>
            <span className="skill-text-caps">SCRATCH</span>
          </div>

          <div className="skill-shape starburst yellow">
            <span className="skill-text-serif">Karate</span>
            <span className="skill-text-tiny">sky blue belt</span>
          </div>

          <div className="skill-shape pill purple">
            <span className="skill-text-script">Crafts & Arts</span>
          </div>

          <div className="skill-shape rectangle red">
            <span className="skill-text-serif">Reading Books</span>
          </div>

          {/* Decorative stars */}
          <span className="decor-star s1">⭐</span>
          <span className="decor-star s2">⭐</span>
          
        </div>
      </div>
      
      {/* Footer / Favorites */}
      <div className="favorites-section">
        <div className="pill-title pink">FAVORITES</div>
        <div className="icons-row">
          <div className="icon-box blue">🐱</div> {/* Scratch Cat */}
          <div className="icon-box yellow">🥋</div> {/* Karate */}
          <div className="icon-box purple">📚</div> {/* Books */}
          <div className="icon-box green">✂️</div> {/* Crafts */}
          <div className="icon-box purple2">🖌️</div> {/* Art */}
          <div className="icon-box pink">💃</div> {/* Dance */}
        </div>
      </div>

    </div>
  )
}
