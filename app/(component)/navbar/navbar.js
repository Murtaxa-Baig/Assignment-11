'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    // var navLinks = document.getElementById("navLinks");

    function showMenu() {
        // navLinks.style.right = "0";
    }

    function hideMenu() {
        // navLinks.style.right = "-200px";
    }
    return (
        <>
            <nav>
                <Link href="/" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </Link>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times" onClick={hideMenu}></i>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/course">Course</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
            </nav>

        </>
    )
}


// CHAT GBT Code
// import Link from 'next/link';
// import React, { useState } from 'react'; // Import useState

// export default function Navbar() {
//     const [navOpen, setNavOpen] = useState(false); // Initialize state for the navbar

//     function showMenu() {
//         setNavOpen(true); // Update the state to open the menu
//     }

//     function hideMenu() {
//         setNavOpen(false); // Update the state to close the menu
//     }

//     return (
//         <>
//             <nav>
//                 <Link href="/" className="logo">Xplore
//                     <i className="fab fa-staylinked"></i>kill
//                 </Link>
//                 <div className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks"> {/* Apply 'open' class conditionally */}
//                     <i className="fa fa-times" onClick={hideMenu}></i>
//                     <ul>
//                         <li><Link href="/">Home</Link></li>
//                         <li><Link href="/course">Course</Link></li>
//                         <li><Link href="/blog">Blog</Link></li>
//                         <li><Link href="/about">About</Link></li>
//                         <li><Link href="/contact">Contact</Link></li>
//                     </ul>
//                 </div>
//                 <i className="fa fa-bars" onClick={showMenu}></i>
//             </nav>
//         </>
//     );
// }
