import React, { Component } from 'react'
 import "./header.css"
 import { NavLink,Link } from 'react-router-dom';
 import Navbar from "./Navbar"

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume:true,
    }
    this.video=React.createRef()
    

    }

    mute=e=>{

    // console.log(e.target)

    this.setState({volume:!this.state.volume})
    // console.log(this.video.current.muted)

    this.video.current.muted=!this.video.current.muted

    }
    render() {

        return (
            <div className="header">

                <Navbar color={"white"}/>
               <video autoplay="autoplay"  muted="mute"  loop="loop" class="video" ref={this.video} >
                   <source  src="https://player.vimeo.com/external/329779339.hd.mp4?s=28ddbca01aa8d56ebb2a5f8bb984839c1b02d565&profile_id=175" type="video/mp4"/>
		Your browser does not support HTML5 video.
	</video>

    <div className="submain col-sm-4"><p><strong>Digital Innovation Agency</strong></p>
    <p>Since 2010, we’ve helped bold companies design, build,
and launch digital products and services.</p></div>

    <div className="main">

<NavLink exact to="/AboutUs" className="item">About Us</NavLink>
<NavLink exact to="/Work" className="item">Work</NavLink>

<NavLink exact to="/Services" className="item">Services</NavLink>

<NavLink exact to="/Approach" className="item">Approach</NavLink>


</div>

<div className="row undernav">

<div className =" item"><Link  exact to="/">Team</Link></div>
<div className =" item"><Link  exact to="/" className =" line">Not Work</Link></div>

<div className =" item"><Link  exact to="/">Career</Link></div>

<div className =" item"><Link  exact to="/">Iternship</Link></div>

<div className =" item"><Link  exact to="/">News</Link></div>
<div className =" item"><Link  exact to="/">Canada</Link></div>

<div className =" item"><Link  exact to="/">Contact</Link></div>
<div className =" item"><Link  exact to="/">More Signfly</Link></div>

</div>

<i class={"fas fa-2x fa-volume-up volume  "+ (this.state.volume ? 'show' : 'hide')} onClick={this.mute}></i>
<i class={"fas fa-2x fa-volume-mute volume  "+ (this.state.volume ? 'hide' : 'show')} onClick={this.mute}></i>

            </div>
        )
    }
}
