import bg from "../assets/bg.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="overlay">
          <div className="content">
            <span className="badge"> Premium Car Care Since 2009</span>
<span className="brand-texts">
  <h2 className="line1">PREMIUM CAR WASH</h2>
  <h2 className="line2">& DETAILING SERVICES</h2>
</span>


            <p>
              Professional care for your car fast, safe, and reliable.<br></br>
              Experience the luxury your vehicle deserves.
            </p>

            <div className="buttons">
            <Link to="/booknow" className="primary">Book Now</Link>

              <Link to="/services" className="secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .hero {
            height: 95vh;
            background: url(${bg}) center/cover no-repeat;
            position: relative;
          }

        .brand-texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
}

.brand-texts .line1 {
  font-family: "Playfair Display SC", serif;
  font-weight: 700;
  color: #f6efdf;
  font-size: 56px;
  margin: 0;
}

.brand-texts .line2 {
  font-family: "Playfair Display SC", serif;
  font-weight: 700;
  color: #f3d9a4;  
  font-size: 40px;
  margin: -2px 0 0 0;
}

          .overlay {
            background: rgba(92, 10, 20, 0.85);
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 80px;
          }

          .content {
            max-width: 600px;
            color: white;
          }

          .badge {
            background: #7c1220;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            color: #f3d9a4;
            display: inline-block;
            margin-bottom: 20px;
          }

          h1 {
            font-size: 54px;
            line-height: 1.1;
            font-family: 'Georgia', serif;
            margin-bottom: 20px;
          }

          h1 span {
            color: #f3d9a4;
          }

          p {
            color: #f3d9a4;
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 30px;
          }

          .buttons {
            display: flex;
            gap: 20px;
         
          }

          .primary {
            background: #f3d9a4;
            color: #6b0f14;
            border: none;
            padding: 12px 26px;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
             display: inline-block;
          }

          .secondary {
            background: transparent;
            color: #f3d9a4;
            border: 2px solid #f3d9a4;
            padding: 12px 26px;
            border-radius: 10px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            height: auto;
          }

          .primary:hover {
            background: #ffe4b5;
          }

          .secondary:hover {
            background: rgba(243, 217, 164, 0.15);
          }
        `}</style>
      </section>
    </>
  );
}

export default Home;