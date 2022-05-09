import React from 'react'
import {FaTimes} from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const{isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? 'sidebar-opened' : 'sidebar-closed'}`}>
      
      <button
      className='sidebar-close-button'
      onClick={() => closeSidebar()}
      >
        <FaTimes />
      </button>

      {sublinks.map((object, index) => {
        const {links, page} = object
        return (
          <section key={index} className='sidebar-page'>
            <h4>{page}</h4>
            <div className='sidebar-links'>
              {links.map((link, index) => {
                const {url, icon, label} = link
                return (
                  <a className='sidebar-link'
                    key={index}
                    href={url}
                  >
                    {icon}
                    {label}
                  </a>
                )
              })}
            </div>

          </section>
        )
      })}
    </aside>
  )
}

export default Sidebar