import { useState } from 'react'
import './Navbar.css'

export function Navbar () {

    const [menuOpen, setMenuOpen] = useState(false)
    
    const text = menuOpen ? 'side-Bar menu-open' : 'side-Bar'

    const handleClick = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    return (
       <nav>
            <ul className={text}>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="">About me</a></li>
                <li><a href="">Skills</a></li>  
                <li><a href="">Projects</a></li>  
                <li><a href="">Experience</a></li>
                <li><a href="">Contact me</a></li>     
            </ul>
            
            <ul>
                <li><a href="">Daniel Barri</a></li>
                <li className='hide-OnMobile-NavBar'><a href="">About me</a></li>
                <li className='hide-OnMobile-NavBar'><a href="">Skills</a></li>  
                <li className='hide-OnMobile-NavBar'><a href="">Projects</a></li>  
                <li className='hide-OnMobile-NavBar'><a href="">Experience</a></li>
                <li className='hide-OnMobile-NavBar'><a href="">Contact me</a></li>
                <li onClick={handleClick} className='menu-Button-NavBar' aria-label='Toggle menu'>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black">
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </a>
                </li>       
            </ul>
       </nav>
    )
}

