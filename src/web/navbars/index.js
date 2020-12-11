import React from 'react'
import {MdReorder} from 'react-icons/md';
import './styles.css'
export default function Navbar() {
    return (
        <>
        <nav>
            <input type="checkbox" id="check"/>
            <label htmlFor="check"></label>
            <i className="checkbtn"><MdReorder/></i>
            <label htmlFor="" className="logo">EMPRESA></label>
            <ul>
                <li>
               <a href="" className="active">
                Página inicial
                </a>     
                </li>
                <li>
               <a href="">
                Quem somos
                </a>     
                </li>
                <li>
               <a href="">
                Projetos
                </a>     
                </li>
                <li>
              <button>
              Contato
              </button>    
                </li>
            </ul>
        </nav>
        </>
    )
}
