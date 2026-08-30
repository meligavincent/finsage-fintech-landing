import React from 'react'

function Header() {
  return (
    <nav>
      <div>
        <h1>Finsage</h1>
      </div>
      <div>
        <ul>
          <li><a href="#favorites">Favorites</a></li>
          <li><a href="#marketmovers">Market Movers</a></li>
          <li><a href="#aipicks">AI Picks</a></li>
          <li><a href="#tradealerts">Trade alerts</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#explore">Explore</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
