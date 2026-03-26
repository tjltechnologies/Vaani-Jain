import './LeftSidebar.css'

const PLACEHOLDER_IMG = 'https://picsum.photos/seed/vaani/400/400'

export default function LeftSidebar({ profile }) {
  const avatar = profile?.avatar_url || PLACEHOLDER_IMG;
  const subtitle = profile?.subtitle || "ARTIST & CODER";
  const location = profile?.location || "Earth";
  const age = profile?.age || "8";
  const hobbies = profile?.hobbies_text || "Lots of Hobbies!";

  return (
    <div className="left-sidebar">
      
      {/* Polaroid Box */}
      <div className="polaroid-container">
        <div className="photo-wrapper">
          <img src={avatar} alt="Vaani" className="profile-photo"/>
        </div>
        <div className="polaroid-text">
          <span className="star-icon">⭐</span>
          <span className="subtitle">{subtitle}</span>
          <span className="star-icon">⭐</span>
          <div className="purple-swirl">🌀</div>
        </div>
      </div>

      {/* Info Box */}
      <div className="info-section">
        <div className="pill-title pink">INFO</div>
        <ul className="info-list">
          <li>
            <span className="info-icon">📍</span> {location}
          </li>
          <li>
            <span className="info-icon">🎂</span> {age} Years Old
          </li>
          <li>
            <span className="info-icon" style={{color: 'purple'}}>🎨</span> {hobbies}
          </li>
        </ul>
      </div>

      {/* Laptop Graphic */}
      <div className="laptop-graphic">
        <div className="laptop-screen">
          <span className="laptop-heart">💖</span>
        </div>
        <div className="laptop-base"></div>
        <span className="floating-star left">⭐</span>
        <span className="floating-star right">⭐</span>
      </div>

    </div>
  )
}
