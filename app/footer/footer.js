import React from 'react'

export default function Footer() {
    var num = new Date().getFullYear()
    return (
        <>
            <section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                    Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
                </p>

                <div className="icons">
                    <a href="https://www.facebook.com/murtaxa.baig.1?mibextid=LQQJ4d" target='blank'>
                        <i className="fab fa-facebook-f" ></i>
                    </a>
                    <a href="https://www.instagram.com/murtaxabaig_/" target='blank'>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/MurtaxaBaig" target='blank'>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/murtaxa-baig-a39684246/s" target='blank'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <p>Made with <i className="fas fa-heart"></i> by <a href="https://github.com/Murtaxa-Baig" target='blank'>Murtaxa Baig</a></p>
                <p>Copyright © {num} <a href="https://github.com/Murtaxa-Baig" target='blank'>Xplore Skill</a>. All Rights Reserved</p>
            </section>

        </>
    )
}
