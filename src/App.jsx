import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <>
      <div className='hero-div'>
        <Header />
        <Container>
          <div className='tag-line-div'>
            <h1>
              Your Partner in Commercial <br />
              Real Estate Success
            </h1>
          </div>
        </Container>
        <div className='bottom-hero'>
          <Container className='bottom-continer'>
            <div>
              <h1>Strategy</h1>
            </div>
            <div>
              <h1>Management</h1>
            </div>
            <div>
              <h1>Risk Management</h1>
            </div>
            <div>
              <h1>Growth</h1>
            </div>
          </Container>
        </div>
      </div>
      {/* About Us */}
      <div id="about-us" className='about-us'>
        <Container className='about-us-continer'>
          <div className='about-us-text-div'>
            <h1>About Us</h1>
            <p>
              Own Design is a trusted property management company based in London, specialising in commercial real estate across Greater London.
            </p>
            <p>
              Since our establishment in 1991, we have built a reputation for delivering tailored property management solutions to investors. From acquisitions and asset management to rent collection, financing, and development support, we provide a full-service approach that maximises value and ensures long-term growth.
            </p>
            <p>
              Headquartered in Wimbledon, we have over three decades of experience in the South London property market. Today, we manage close to 900 properties, generating more than £150M in annual rental income for our clients.
            </p>
          </div>
          <div className='about-us-image-div'></div>
        </Container>
      </div>
      {/* Investment Focus */}
      <div id="investment-focus" className='london-requirements'>
        <Container>
          <h1>Investment Focus</h1>
          <p>At Glasshouse, we are active buyers with a consistent track record of securing high-value opportunities throughout Greater London.</p>
          <p>Since 2009, our group has strategically acquired distressed and underperforming assets, committing over £200M to new acquisitions. With more than £100M allocated for investment this year, we continue to seek properties where we can unlock untapped potential.</p>
          <p>Our acquisition criteria include:</p>
          <ul>
            <li>Retail parades, mixed-use properties with upper parts, and single units across London suburbs (£200,000 – £10,000,000 lot sizes).</li>
            <li>Freehold and long leasehold leisure premises in Zones 1–6.</li>
            <li>Development sites and individual units with value-add potential.</li>
            <li>Properties suitable for commercial advertising.</li>
            <li>Retail or residential assets priced under £250 per sq. ft in London.</li>
          </ul>
          <p>Currently, we manage assets exceeding £1B in value, and our goal is to double this portfolio in the coming years.</p>
        </Container>
      </div>
      {/* Contact Us */}
      <div id="contact-us" className='contact-us'>
        <div className='map-background'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4963.390999999999!2d-0.210000!3d51.420000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876099e3b!2sWimbledon!5e0!3m2!1sen!2suk!4v00000000000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        <div className='contact-card'>
          <h2>Contact Us</h2>
          <div>
            <p className='mb-0'>📍 Wimbledon, London</p>
            <p className='mb-0'>📞 +44 20 1234 5678</p>
            <p className='mb-0'>✉️ info@owndesign.co.uk</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='footer-div'>
        <div>
          <a href="#about-us">About</a>
          <a href="#investment-focus">Investment Focus</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
    </>
  )
}

export default App;
