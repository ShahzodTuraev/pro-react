import React, { useEffect, useState } from 'react'
import { Brand, Container, Iframe, Logo, Nav, NavItem,} from './style'
import { data } from './data'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navId, setNavId] = useState();
  const [brand, setBrand] = useState(true)
  const onSelect =(index)=>{
    setNavId(index)
    if(data[index].link.includes('matterport')){
      setBrand(true);
      setTimeout(()=>{
        setBrand(false)
      }, 3000)
    }else{setBrand(false)}
  //   data[index].link.includes('matterport')?
  //   (setBrand(true)&&
  //   setTimeout(()=>{
  //     setBrand(false)
  //   }, 3000))
  // :(console.log('ss'))
  }
  useEffect(()=>{
    setTimeout(()=>{
      setBrand(false)
    }, 3000)
  },[])
  const onMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <Container>
      <Nav>
      {data.map((page, index)=>(
        <NavItem onClick={()=>{onSelect(index)}} key={page.id}>{page.name}</NavItem>
        ))}
        </Nav>
        <Logo>OP</Logo>
        <Iframe className='iframe' src={data[navId?navId:0].link} title="sketchfab" frameBorder="0" allow="autoplay; fullscreen; xr-spatial-tracking" allowFullScreen></Iframe>
        {/* MENU BUTTON */}
        <div onClick={onMenu} className="menu_wrap">

          <div className={menuOpen? "menu-btn open" : "menu-btn"}>
            <div className="menu-btn_burger"></div>
          </div>
        </div>
        {/* MENU BOX */}
        <div className={menuOpen?'menu_box active' : 'menu_box'}>
        {data.map((page, index)=>(
        <NavItem onClick={()=>{onSelect(index)}} key={page.id}>{page.name}</NavItem>
        ))}
        </div>
        {/* BRAND HIDER */}
        <Brand style={brand?{display:'flex'}:{display: 'none'}}>meVer</Brand>

    </Container>
  )
}

export default App
