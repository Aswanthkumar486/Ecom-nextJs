import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      padding: "4rem 1rem 2rem",
      fontFamily: "'Montserrat', sans-serif",
      borderTop: "4px solid #3498db"
    },
    brand: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#3498db",
      marginBottom: "1.5rem",
      textTransform: "uppercase"
    },
    link: {
      display: "block",
      color: "#bdc3c7",
      textDecoration: "none",
      marginBottom: "0.75rem",
      fontWeight: "500",
      transition: "all 0.3s ease"
    },
    heading: {
      fontWeight: "600",
      color: "#3498db",
      marginBottom: "1.5rem",
      fontSize: "1.2rem",
      textTransform: "uppercase"
    },
    text: {
      fontSize: "0.9rem",
      marginTop: "2rem",
      color: "#7f8c8d"
    },
    icon: {
      marginRight: "0.75rem",
      color: "#3498db"
    },
    socialIcon: {
      fontSize: "1.5rem",
      color: "#bdc3c7",
      marginRight: "1rem",
      transition: "all 0.3s ease"
    },
    newsletterInput: {
      backgroundColor: "#34495e",
      border: "none",
      color: "#ecf0f1",
      borderRadius: "0"
    },
    subscribeBtn: {
      backgroundColor: "#3498db",
      color: "white",
      borderRadius: "0",
      fontWeight: "600",
      textTransform: "uppercase",
      border: "none",
      padding: "0.75rem 2rem"
    }
  };

  return (
    <footer
      style={styles.footer}
      className="animate__animated animate__slideInUp"
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand and Newsletter */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div style={styles.brand}>ShopNex</div>
            <p className="mb-4">Premium e-commerce solutions for modern shoppers.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={styles.newsletterInput}
                className="form-control mb-3"
              />
              <button style={styles.subscribeBtn} className="w-100">
                Subscribe to Newsletter
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-5">
            <div style={styles.heading}>Explore</div>
            <a href="#" style={styles.link}>New Arrivals</a>
            <a href="#" style={styles.link}>Best Sellers</a>
            <a href="#" style={styles.link}>Clearance</a>
            <a href="#" style={styles.link}>Blog</a>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 mb-5">
            <div style={styles.heading}>Support</div>
            <a href="#" style={styles.link}>Order Tracking</a>
            <a href="#" style={styles.link}>FAQs</a>
            <a href="#" style={styles.link}>Privacy Policy</a>
            <a href="#" style={styles.link}>Terms of Service</a>
          </div>

          {/* Contact & Social */}
          <div className="col-lg-3 col-md-6 mb-5">
            <div style={styles.heading}>Connect</div>
            <p><i className="bi bi-geo-alt-fill" style={styles.icon}></i>New York, USA</p>
            <p><i className="bi bi-envelope-fill" style={styles.icon}></i>support@shopnex.com</p>
            <p><i className="bi bi-telephone-fill" style={styles.icon}></i>+1 (555) 123-4567</p>
            <div className="mt-4">
              <a href="#" style={styles.socialIcon} className="bi bi-facebook"></a>
              <a href="#" style={styles.socialIcon} className="bi bi-twitter"></a>
              <a href="#" style={styles.socialIcon} className="bi bi-instagram"></a>
              <a href="#" style={styles.socialIcon} className="bi bi-linkedin"></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p style={styles.text}>
            © {new Date().getFullYear()} ShopNex. All rights reserved. | 
            Designed with <i className="bi bi-heart-fill text-danger"></i> by Vivid Labs
          </p>
        </div>
      </div>
    </footer>
  );
}