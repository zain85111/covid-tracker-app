import React from 'react'

const Home = ()=> {
    return (
        <div style={{ minHeight: "80vh"}}>
            <div className="row center" >
                <div className="col s4">
                    <div className="row">
                        <div className="col s12 ">
                            <div className="card">
                                <div className="card-image">
                                <img src="https://www.comicbasics.com/wp-content/uploads/2018/10/DC-Characters-That-Need-Their-Own-Movie.jpg"/>
                                <span className="card-title">Characters</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light indigo darken-3"><i className="material-icons">chevron_right</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div className="row">
                        <div className="col s12 ">
                            <div className="card">
                                <div className="card-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2YnhF5UdPF9_dsKu1sBhF9o7gz8kQaGCvg&usqp=CAU"/>
                                <span className="card-title">Teams</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light indigo darken-3"><i className="material-icons">chevron_right</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div className="row">
                        <div className="col s12 ">
                            <div className="card">
                                <div className="card-image">
                                <img src="https://www.funzen.net/wp-content/uploads/2020/12/1607183791_Android-games-Download-Download-Batman-vs-Superman-for-AndroidThe-Batman.jpg"/>
                                <span className="card-title">Movies</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light indigo darken-3"><i className="material-icons">chevron_right</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
