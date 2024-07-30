import React from 'react'
import { Container, Logo, LogoutBtn } from '../idex'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className='py-3 shadow bg-gray-800'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          <ul>
            {navItems.map((item)=>
            navItems.active ? 
            (<li key={item.name}>
              <button className='text-white hover:text-gray-300 focus:outline-none' onClick={()=> navigate(item.slug)}>
                {item.name}
              </button>
            </li>)
            : null)}
            {authStatus && (
              <li >
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header