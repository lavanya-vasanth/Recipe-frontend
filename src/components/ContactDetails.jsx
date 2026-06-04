const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-overlay"></div>

      <div className="contact-card">
        <p className="contact-tag">GET IN TOUCH</p>

        <h1>
          Contact <span>Me</span>
        </h1>

        <p className="contact-desc">
          Have questions about recipes or cooking ideas?
          Feel free to connect with me anytime 🍴
        </p>

        <div className="contact-info">

          <div className="contact-box">
            <h3>📞 Phone</h3>
            <p>+91 9342201049</p>
          </div>

          <div className="contact-box">
            <h3>📧 Email</h3>
            <p>lavanya@email.com</p>
          </div>

          <div className="contact-box">
            <h3>📸 Instagram</h3>
            <a
              href="https://www.instagram.com/Lavanya"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Lavanya
            </a>
          </div>

          <div className="contact-box">
            <h3>📘 Facebook</h3>
            <a
              href="https://www.facebook.com/Lavanya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lavanya
            </a>
          </div>

          <div className="contact-box">
            <h3>🌐 Website</h3>
            <a
              href="https://www.yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.yourwebsite.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;