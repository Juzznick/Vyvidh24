import './footer.css'
function Footer() {
    return (
        <div className="footer-div" id='contact'>
            <div className="footer-sub">
                <h1>Contact</h1>
                <p>Thalakottukara P.O<br />Kecheri, Thrissur 680501, Kerala, India<br />Phone: +91 4885 287751, 287752<br />Email: principal@vidyaacademy.ac.in</p>
            </div>
            <div className="footer-sub">
                <img  alt="vyvidh_logo"  src='../img/eventlogo.png' />
                <h3 className='copyright'>© Copyright Vyvidh24. All rights reserved.</h3>
            </div>
            <div className="footer-sub">
                <h1>Socials</h1>
                <div className="logo-div">
                <a href='https://www.instagram.com/vidmediavast/' target='_blank'><img className='logo'  alt="instagram_logo"   src='../img/insta.png' /></a>
                    <a href='https://www.linkedin.com/school/vidyatcr/' target='_blank'><img className='logo'  alt="linkedin_logo"  src='../img/linkedin.png' /></a>
                    <a href='https://www.facebook.com/vidyatcr/' target='_blank'><img className='logo' alt="facebook_logo"  src='../img/fb.png' /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer; 