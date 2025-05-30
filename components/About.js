import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export default function AboutUs({ data }) {
  const styles = {
    section: {
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      padding: "6rem 1rem",
      fontFamily: "'Montserrat', sans-serif",
      borderTop: "4px solid #3498db",
      marginBottom: "8rem"
    },
    heading: {
      color: "#3498db",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      fontWeight: "700",
      textTransform: "uppercase"
    },
    highlight: {
      color: "#3498db",
      fontWeight: 600,
    },
    tableHeader: {
      background: "linear-gradient(to right, #3498db, #4aa8ff)",
      color: "#ffffff",
      textTransform: "uppercase"
    },
    tableCell: {
      fontWeight: 500,
      color: "#bdc3c7",
      backgroundColor: "#34495e"
    },
    shadow: {
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      borderRadius: "8px",
      overflow: "hidden"
    },
    secondaryText: {
      color: "#7f8c8d",
      fontSize: "1.1rem"
    }
  };

  return (
    <section style={styles.section} id="about">
      <div className="container About">
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown"
            style={styles.heading}
          >
            {data.title}
          </h2>
          <p
            className="lead animate__animated animate__fadeIn animate__delay-1s"
            style={styles.secondaryText}
          >
            {data.description}
          </p>
        </div>

        <div className="row align-items-center justify-content-between g-5">
          {/* Left Column: Features Table */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-2s">
            <h3 className="h4 fw-bold mb-4" style={{ color: "#3498db" }}>
              {data.whyChooseTitle}
            </h3>
            <div className="table-responsive" style={styles.shadow}>
              <table className="table table-borderless mb-0">
                <thead>
                  <tr>
                    <th colSpan="2" style={styles.tableHeader}>Premium Features</th>
                  </tr>
                </thead>
                <tbody>
                  {data.features.map((feature, idx) => (
                    <tr key={idx}>
                      <td style={styles.tableCell}>✔️ {feature.title}</td>
                      <td style={styles.tableCell}>{feature.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 animate__animated animate__zoomIn animate__delay-2s">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                width: "100%",
                height: "auto",
                border: "2px solid #3498db"
              }}
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp animate__delay-3s">
          <p style={styles.secondaryText}>
            {data.footerNote}
            <i className="bi bi-stars text-warning mx-2"></i>
          </p>
        </div>
      </div>
    </section>
  );
}
