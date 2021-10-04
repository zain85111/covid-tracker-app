import React from 'react'

const Nav = ()=> {
    return (
        <div>
            <nav>
                <div className="nav-wrapper black" >
                    <a href="#" className="brand-logo"><img className="" width="35" src="https://pentagram-production.imgix.net/3b6abdde-9ffb-4439-a571-6e96ac5ba8e7/emo_dcentertainment_02.jpg?rect=%2C%2C%2C&w=640&fm=jpg&q=70&auto=format" alt="" /></a>
                    <a href="#!" className="brand-logo center">Fanverse</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#" className=" btn indigo darken-3">SignUp</a></li>
                    </ul>
                </div>
            </nav>
            {/* <hr /> */}

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#">Characters</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#" className=" btn indigo darken-4">SignUp</a></li>
            </ul>
        </div>
    )
}

export default Nav
