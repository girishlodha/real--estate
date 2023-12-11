import React , {useState}from 'react'
import './header.styles.css'
import {BiMenuAltRight} from "react-icons/bi"
const Header = () => {
    const  getMenuStyles=(menuOpened)=>{
        if(document.documentElement.clientWidth<=800){
            return {right:!menuOpened && "-100%"}
        }
    }
    const [menuOpened , setMenuOpened] = useState(false)
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./../../../public/logo.png" alt="logo" width={100} />
                <div className=" flexCenter h-menu "
                style = {getMenuStyles(menuOpened)}
                >
                    <a href="">residencies</a>
                    <a href="">Our value</a>
                    <a href="">contact us</a>
                    <a href="">Get started</a>
                    <button className='button'>
                        <a href="">contact</a>
                    </button>
                </div>
                <div className="menu-icon" onClick = {()=>setMenuOpened((prev)=>!prev)} >
                <BiMenuAltRight size={30}/>
                </div>
            </div>
           
        </section>
    )
}

export default Header
