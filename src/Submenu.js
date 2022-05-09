import React, {useRef, useEffect} from 'react'
import {useGlobalContext} from './context'


const Submenu = () => {
  const {isSubmenuOpen, page:{links}} = useGlobalContext() 
  
  return (
    <aside className={`${isSubmenuOpen ? 'submenu-opened' : 'submenu-closed'}`}>
      <div className={`submenu-links`}>
        {links.map((link, index) => {
          const {label, icon, url} = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>

  )
}

export default Submenu