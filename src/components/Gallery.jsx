import './Gallery.css'

export default function Gallery({ category }) {
  // Simple array of 6 placeholders for a gallery looking effect
  const images = Array.from({ length: 6 }).map((_, i) => 
    `https://picsum.photos/seed/${category.replace(/\s+/g, '')}${i}/400/400`
  )

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">{category} COLLECTION</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`${category} item ${i}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
