import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export default function ContactSection() {
  const styles = {
    section: {
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      padding: "6rem 1rem",
      fontFamily: "'Montserrat', sans-serif",
      borderTop: "4px solid #3498db"
    },
    heading: {
      color: "#3498db",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      fontWeight: "700",
      textTransform: "uppercase"
    },
    label: {
      fontWeight: "500",
      marginBottom: "0.75rem",
      color: "#bdc3c7",
      textTransform: "uppercase",
      fontSize: "0.9rem"
    },
    input: {
      borderRadius: "4px",
      border: "2px solid #34495e",
      padding: "1rem",
      width: "100%",
      backgroundColor: "#34495e",
      color: "#ecf0f1",
      transition: "all 0.3s ease",
      '&:focus': {
        borderColor: "#3498db",
        boxShadow: "none"
      }
    },
    button: {
      background: "linear-gradient(to right, #3498db, #4aa8ff)",
      color: "#fff",
      border: "none",
      padding: "1rem 2.5rem",
      borderRadius: "4px",
      marginTop: "1.5rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "1px",
      '&:hover': {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 15px rgba(52, 152, 219, 0.4)"
      }
    },
    secondaryText: {
      color: "#7f8c8d",
      fontSize: "1.1rem"
    }
  };

  return (
    <section style={styles.section} id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold animate__animated animate__fadeInDown"
            style={styles.heading}
          >
            Contact Us
          </h2>
          <p className="lead animate__animated animate__fadeIn" style={styles.secondaryText}>
            Connect with our premium support team 24/7
          </p>
        </div>

        <div className="row justify-content-center animate__animated animate__fadeInUp animate__delay-1s">
          <div className="col-lg-6">
            <form>
              <div className="mb-4">
                <label style={styles.label}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  style={styles.input}
                  className="focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label style={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  style={styles.input}
                />
              </div>
              <div className="mb-4">
                <label style={styles.label}>Message</label>
                <textarea 
                  placeholder="Type your message here..." 
                  rows="5" 
                  style={styles.input}
                ></textarea>
              </div>
              <button 
                type="submit" 
                style={styles.button} 
                className="animate__animated animate__pulse animate__infinite"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}