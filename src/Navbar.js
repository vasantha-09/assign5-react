import Logo from './images/logo192.png';
function Navbar(props){
    return(
        <header>
        <nav>
            
            <b>
                <a href=""><img src={Logo} alt="" /></a>React
            </b>
            <ul>
                < li className='item'>Docs</li>
                <li className='item'>Tutorial</li>
                <li className='item'>Blog</li>
                <li className='item'>Community</li>
                <li className='item'>Search</li>
              </ul>
              <ul>
               
                <li className='item'>v17.0.2</li>
                <li className='item'><summary>_</summary>X<sub>A</sub></li>
                <li className='item'>Language</li>
                <li className='item'>GitHub</li>
            </ul>
        </nav>
        </header>
    )
}
export default Navbar;