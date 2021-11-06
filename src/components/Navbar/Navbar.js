import React , {useEffect} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';


const Navbar = () => {

  function animation(){
    let tabsNewAnim = $('#navbarSupportedContent');
    let activeItemNewAnim = tabsNewAnim.find('.active');
    let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    let itemPosNewAnimTop = activeItemNewAnim.position();
    let itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      let activeWidthNewAnimHeight = $(this).innerHeight();
      let activeWidthNewAnimWidth = $(this).innerWidth();
      let itemPosNewAnimTop = $(this).position();
      let itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">

      <div 
        className="collapse navbar-collapse  in-middle" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
            
            <div className="hori-selector">
              <div className="left "></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/" exact>
                  Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" exact>
                About
              </Link> 
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" exact>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employees" exact>
                Employees
              </Link>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;