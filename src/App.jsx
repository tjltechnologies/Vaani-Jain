import { useState, useEffect } from 'react'
import './App.css'
import TopTabs from './components/TopTabs'
import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import Gallery from './components/Gallery'
import { supabase } from './lib/supabaseClient'

function App() {
  const [activeTab, setActiveTab] = useState('ABOUT ME')
  const [profile, setProfile] = useState(null)
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const { data: profileData, error: profileError } = await supabase
          .from('profile')
          .select('*')
          .single()
        
        if (profileError) console.error(profileError)
        if (profileData) setProfile(profileData)

        const { data: skillsData, error: skillsError } = await supabase
          .from('skills')
          .select('*')
          .order('order_index', { ascending: true })
        
        if (skillsError) console.error(skillsError)
        if (skillsData) setSkills(skillsData)
      } catch (err) {
        console.error("Error loading data:", err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="app-wrapper" style={{alignItems: 'center'}}>
        <h1 style={{color: 'white', fontFamily: 'var(--font-rounded)'}}>Loading Vaani's World... 🌸</h1>
      </div>
    )
  }

  // Derive tabs from skills
  const tabs = ['ABOUT ME', ...skills.map(s => s.name)]

  return (
    <div className="app-wrapper">
      <div className="main-container">
        <TopTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="content-container">
          <LeftSidebar profile={profile} />
          
          <div className="right-panel">
            {activeTab === 'ABOUT ME' ? (
              <MainContent profile={profile} skills={skills} />
            ) : (
              <Gallery category={activeTab} />
            )}
          </div>
        </div>
        
        <div className="heart-icon-top-right">🤍</div>
      </div>
    </div>
  )
}

export default App
