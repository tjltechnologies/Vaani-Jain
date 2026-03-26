import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import './Gallery.css'

export default function Gallery({ category }) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true)
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false })

      if (error) {
        console.error("Error fetching gallery:", error)
      } else if (data && data.length > 0) {
        setImages(data.map(item => item.image_url))
      } else {
        // Fallback placeholders if DB is empty for this category
        const placeholders = Array.from({ length: 6 }).map((_, i) => 
          `https://picsum.photos/seed/${category.replace(/\s+/g, '')}${i}/400/400`
        )
        setImages(placeholders)
      }
      setLoading(false)
    }
    fetchGallery()
  }, [category])

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">{category} COLLECTION</h2>
      {loading ? (
        <p style={{textAlign: 'center', fontFamily: 'var(--font-rounded)'}}>Loading {category}...</p>
      ) : (
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`${category} item ${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
