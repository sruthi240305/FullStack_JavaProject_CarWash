import LuxeLogo from '../assets/LuxeLogo.png';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="grid">

          <div className="brand-box">
            <div className="brand-row">
              <img src={LuxeLogo} alt="Luxe Logo" />
              <div>
                <h3>LuxeWash</h3>
                <span className="tagline">Premium Car Care</span>
              </div>
            </div>
            <p>Premium car washing and detailing services.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Home<br />Services<br />Pricing<br />Book Now</p>
          </div>

          <div>
            <h4>Services</h4>
            <p>Exterior Wash<br />Interior Cleaning<br />Detailing</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>(555) 123-4567<br />help@luxewash.com</p>
          </div>
        </div>

        <p className="bottom">© 2026 LuxeWash. All rights reserved.</p>

        <style>{`
          .footer {
            background: #620414;
            color: white;
            padding: 50px 80px 20px;
          }

          .grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
          }

          .brand-row {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 12px;
          }

          img {
            height: 45px;
            width: 45px;
            object-fit: contain;
          }

          h3 {
            margin: 0;
            color: #f6efdf;
            font-size: 22px;
          }

          .tagline {
            font-size: 12px;
            color: #f3d9a4;
          }

          h4 {
            color: #f6efdf;
            margin-bottom: 10px;
          }

          p {
            color: #ead6a9;
            font-size: 14px;
            line-height: 1.8;
          }

          .bottom {
            text-align: center;
            border-top: 1px solid #79612c;
            margin-top: 40px;
            padding-top: 15px;
            font-size: 13px;
            color: #f3d9a4;
          }
        `}</style>
      </footer>
    </>
  );
}

export default Footer;
