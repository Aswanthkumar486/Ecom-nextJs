

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  
export default function HeroCarousel({data}) {
  useEffect(() => {
    const loadBootstrap = async () => {
      const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      // Initialize carousel manually
      const carousel = new bootstrap.Carousel('#mainCarousel', {
        interval: 5000,
        wrap: true
      });
    };
    loadBootstrap();
  }, []);

  const scrollToContent = () => {
    document.getElementById('content-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const carouselStyles = {
    control: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(52, 152, 219, 0.3)',
      borderRadius: '50%',
      margin: '0 1rem',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#3498db'
      }
    },
    caption: {
      bottom: '25%',
      textAlign: 'left',
      padding: '2rem',
      background: 'rgba(44, 62, 80, 0.8)',
      borderRadius: '8px'
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      margin: '0 8px',
      cursor: 'pointer'
    },
    scrollButton: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'none',
      border: 'none',
      color: '#3498db',
      fontSize: '2.5rem',
      animation: 'bounce 2s infinite',
      cursor: 'pointer'
    }
  };

  return (
    <div className="position-relative">
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ borderBottom: '4px solid #3498db' }}
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              style={{
                ...carouselStyles.indicator,
                backgroundColor: index === 0 ? '#3498db' : '#7f8c8d'
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {data.map((slide, index) => (
            <div key={slide.title} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div style={{ position: 'relative', height: '80vh' }}>
                <img
                  src={slide.img}
                  className="d-block w-100"
                  alt={slide.title}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7)'
                  }}
                />
                <div className="carousel-caption d-none d-md-block" style={carouselStyles.caption}>
                  <h2 className="display-4 fw-bold mb-3" style={{ color: '#3498db' }}>
                    {slide.title}
                  </h2>
                  <p className="lead" style={{ color: '#ecf0f1', fontSize: '1.5rem' }}>
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
          style={carouselStyles.control}
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
          style={carouselStyles.control}
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Scroll Down Button */}
      <button 
        onClick={scrollToContent}
        style={carouselStyles.scrollButton}
        aria-label="Scroll down"
      >
        <i className="bi bi-chevron-down" />
      </button>

      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}