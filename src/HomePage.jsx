import Hero from './components/Hero.jsx';
import AboutVidya from './components/about.jsx';
import Footer from './components/Footer.jsx';
import CollectorMsg from './components/collector.jsx';
import MainEvents from './components/mainevents.jsx';



function HomePage(){
    return(
        <div>
            <Hero/>
            <AboutVidya/>
            <MainEvents/>
            <CollectorMsg/>
            <Footer/>
        </div>
    );
}

export default HomePage;