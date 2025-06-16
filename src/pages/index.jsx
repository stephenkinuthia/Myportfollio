import Button from './components/button';
import './styles/index.css'; // Assuming you have a CSS file for styles

function Home() {

  return (
    <main className='main-home'>
      <section className='home-description'>
        <h1 className='heading'>
          Hi 👋 there, I'm <span>Stephen ngugi</span>
          <br />
          <p className='paragraph'>
            A passionate <span>Web Developer</span> with a knack for creating stunning websites and applications.
          </p>
        </h1>

       <div className="button-container">
                 <Button
        label=" 📞 contact me"
        onClick={() => alert('Booking clicked!')}
        className="book-now-button"
      />

       <Button
        label="Download my cv"
        onClick={() => alert('Services clicked!')}
        className="my-Cv"
      />
      </div>
      </section>

      <section className="my-picture">
        <div className="overlay">
          <div className="social-media-icon">
            <div className="icons">
              <img src='/src/assets/icons/facebook.png' alt='facebook' />
            </div>
            <div className="icons">
              <img src='/src/assets/icons/instagram.png' alt='instagram' />
            </div>
            <div className="icons">
              <img src='/src/assets/icons/x.png' alt='twitter' />
            </div>
            <div className="icons">
              <img src='/src/assets/icons/linkein.png' alt='Linkedin' />
            </div>
            <div className="icons">
              <img src='/src/assets/icons/github.png' alt='github' />
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
