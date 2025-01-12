import React from 'react'

const Header = () => {
  return (
    <header className="text-center py-10 ">
      <ul className='flex justify-center gap-10 items-center mx-10'>

        <li>
          <a href="#about" className="font-semibold text-gray-600 hover:text-gray-900">À Propos</a>
        </li>
        <li>
          <a href="#skills" className="font-semibold text-gray-600 hover:text-gray-800">Compétences</a>
        </li>
        <li>
          <a href="#projects" className="font-semibold text-gray-600 hover:text-gray-800">Projets</a>
        </li>
        <li>
          <a href="#contact" className="font-semibold text-gray-600 hover:text-gray-800">Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Header