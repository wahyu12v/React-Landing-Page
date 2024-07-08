import Navbar  from '../components/Navbar.jsx'
import Footer  from '../components/Footer.jsx'
import { homeSection } from '../data/HomeSection.jsx'
import { coursesSection } from '../data/CourserSection.jsx'
import { tutorsSection } from '../data/TutorsSection.jsx'
import { partnerSection } from '../data/PartnersSection.jsx'
import { contactSection } from '../data/ContactSection.jsx'

import parse from 'html-react-parser'
import '../styles/Home.css'
import '../styles/Footer.css'
import '../styles/Tutors.css'
import '../styles/Partner.css'
import '../styles/Contact.css'
function Home() {
  return (
    <>
        <Navbar/>

        <div className='wrapper'>
          
              <section id="home">
                  <img src={homeSection.image} />
                  <div className="kolom">
                    {parse(homeSection.content)}
                  </div>
              </section>

              <section id="courses">
                <div className="kolom">
                    {parse(coursesSection.content)}
                </div>
                <img src={coursesSection.image}/>
              </section>

              <section id='tutors'>
                <div className="tengah">
                  <div className="kolom">
                  {parse(tutorsSection.content)}
                  </div>

                  <div className="tutor-list">
                  {parse(tutorsSection.list)}
                  </div>
              </div>
              </section>

              <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                    {parse(partnerSection.content)}
                    </div>

                    <div className="partner-list">
                        {parse(partnerSection.list)}
                    </div>
                </div>
            </section>
        </div>


        <div id="contact">
          {parse(contactSection.content)}
        </div>


        <Footer/>
    </>
  )
}

export default Home
