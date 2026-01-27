import wash from "../assets/exterior.png";
import interior from "../assets/Interior.png";
import detailing from "../assets/Full Detailing.png";
import ceramic from "../assets/Ceramic Coating.png";
import engine from "../assets/Engine Wash.png";
import paint from "../assets/Paint Correction.png";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Exterior Wash",
      price: "₹299",
      img: wash,
      desc: "Complete exterior cleaning with premium foam wash and hand dry finish."
    },
    {
      title: "Interior Cleaning",
      price: "₹499",
      img: interior,
      desc: "Deep vacuum, dashboard wipe, seat cleaning, and air freshening."
    },
    {
      title: "Full Detailing",
      price: "₹999",
      img: detailing,
      desc: "Complete interior and exterior detailing with paint protection."
    },
    {
      title: "Ceramic Coating",
      price: "₹599",
      img: ceramic,
      desc: "Professional ceramic coating for long-lasting paint protection."
    },
    {
      title: "Engine Wash",
      price: "₹399",
      img: engine,
      desc: "Washing an engine bay improves aesthetics and aids maintenance."
    },
    {
      title: "Paint Correction",
      price: "₹299",
      img: paint,
      desc: "Eliminate surface scratches and restore a showroom shine."
    }
  ];

  return (
    <>
      <section className="services">
        <h2>Our Services</h2>
        <h1>Premium Care for Your Vehicle</h1>
        <p>
          From quick washes to full detailing, we offer comprehensive car care solutions.
        </p>

        <div className="grid">
          {services.map((s, i) => (
            <div className="card" key={i}>
              <img src={s.img} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span>From {s.price}</span>
             <Link to="/booknow" className="book-now-btn">Book Now</Link>

            </div>
          ))}
        </div>
      </section>

      <style>{`
        .services {
          padding: 80px;
          background: #f6efdf;
          text-align: center;
        }
          .services h2{
           color: #6b0f14;
      }

      .services h1{
 font-size: 42px;
          color: #6b0f14;

      }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .book-now-btn {
  display: inline-block;
  background: #6b0f14;
  color: white;
  padding: 8px 18px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin-left : 125px;
}

.book-now-btn:hover {
  background: #4a0c0c;
}

        .card {
          background: #f9f0da;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: left;
        }
          .card img {
  height: 40px;
  margin-bottom: 15px;
  border-radius: 10px;  
}


        .card img {
          height: 40px;
          margin-bottom: 15px;
        }

        .card h3 {
          color: #6b0f14;
        }

        .card span {
          font-weight: bold;
          color: #6b0f14;
        }

        .card button {
          float: right;
          border: 2px solid #6b0f14;
          background: transparent;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          Color: #6b0f14;
          font-weight: bold;
    
        }
      `}</style>
    </>
  );
}

export default Services;
