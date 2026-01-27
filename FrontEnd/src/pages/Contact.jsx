import Footer from "../components/Footer";
import video1 from "../assets/Carwash1.mp4";
import video2 from "../assets/carwash2.mp4";

export default function Contact() {
  return (
    <div className="page">
      <section className="contact-section">
        <div className="video-area">
          <div className="video-card">
            <video src={video1} controls />
          </div>

          <div className="video-card">
            <video src={video2} controls />
          </div>
        </div>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <Footer />

      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .contact-section {
          flex: 1; 
          background: linear-gradient(to bottom, #6b0f14, #4a0c0c);
          color: #f3d9a4;
          padding: 60px 80px 40px;
        }

        .video-area {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .video-card {
          width: 420px;
          height: 240px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          background: black;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin: 25px 0 60px;
        }

        .dots span {
          width: 35px;
          height: 6px;
          border-radius: 10px;
          background: rgba(255,255,255,0.3);
          transition: 0.3s;
        }

        .dots .active {
          background: #f3d9a4;
        }
      `}</style>
    </div>
  );
}
