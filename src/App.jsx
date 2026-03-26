import { useState } from 'react'
import './App.css'
import TopTabs from './components/TopTabs'
import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import Gallery from './components/Gallery'

function App() {
  const [activeTab, setActiveTab] = useState('ABOUT ME')

  const tabs = ['ABOUT ME', 'ART', 'DANCE', 'KARATE', 'CODING', 'CRAFTS', 'READING']

  return (
    <div className="app-wrapper">
      <div className="main-container">
        <TopTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="content-container">
          <LeftSidebar />
          
          <div className="right-panel">
            {activeTab === 'ABOUT ME' ? (
              <MainContent />
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
