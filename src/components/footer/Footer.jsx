import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>JioCinema</h3>
          <p>Watch your favorite movies and shows anytime, anywhere.</p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>Home</a></li>
            <li><a href="#" style={styles.link}>Movies</a></li>
            <li><a href="#" style={styles.link}>Shows</a></li>
            <li><a href="#" style={styles.link}>About Us</a></li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.heading}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>📘</a>
            <a href="#" style={styles.icon}>🐦</a>
            <a href="#" style={styles.icon}>📷</a>
            <a href="#" style={styles.icon}>▶️</a>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} JioCinema. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Inline CSS styles
const styles = {
  footer: {
    backgroundColor: "#0D0E10",
    color: "white",
    padding: "30px 0",
    textAlign: "center",
    width: "100%",
  },
  footerContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  },
  footerSection: {
    flex: "1",
    margin: "10px",
    minWidth: "200px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
    display: "block",
    margin: "8px 0",
  },
  linkHover: {
    color: "#FF5A5F",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  icon: {
    color: "white",
    fontSize: "20px",
    textDecoration: "none",
    transition: "0.3s",
  },
  footerBottom: {
    backgroundColor: "#15171B",
    padding: "10px 0",
    marginTop: "20px",
  },
};

export default Footer;
