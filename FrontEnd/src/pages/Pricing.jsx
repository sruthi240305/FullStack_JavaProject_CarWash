import { Link } from "react-router-dom";
export default function Pricing() {
  const plans = [
    {
      title: "Basic Wash",
      subtitle: "Essential exterior cleaning",
      price: "₹599",
      time: "30 min",
      features: [
        "Exterior foam wash",
        "Wheel & tire cleaning",
        "Window cleaning",
        "Hand dry finish",
      ],
      popular: false,
    },
    {
      title: "Premium Wash",
      subtitle: "Complete interior & exterior care",
      price: "₹999",
      time: "1.5 hours",
      features: [
        "Everything in Basic",
        "Interior vacuum",
        "Dashboard & console wipe",
        "Leather conditioning",
        "Tire shine",
        "Air freshener",
      ],
      popular: true,
    },
    {
      title: "Ultimate Detail",
      subtitle: "Full professional detailing",
      price: "₹2999",
      time: "3+ hours",
      features: [
        "Everything in Premium",
        "Clay bar treatment",
        "Hand wax protection",
        "Engine bay cleaning",
        "Headlight restoration",
        "Paint sealant",
        "Odor elimination",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <section className="pricing">
        <h2>Transparent Pricing</h2>
        <p className="subtitle">
          Choose the package that fits your needs. All services include premium
          products and satisfaction guarantee.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`price-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <div className="badge">★ Most Popular</div>}

              <h3>{plan.title}</h3>
              <p className="plan-sub">{plan.subtitle}</p>

              <div className="price">Just {plan.price}</div>
              <div className="time">⏱ {plan.time}</div>

              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <Link to="/booknow" className="book-now-btn">Book Now</Link>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .pricing {
          background: #f7efdd;
          padding: 80px 10%;
          text-align: center;
        }

        .pricing h2 {
          font-size: 42px;
          color: #6b0f14;
        }

        .subtitle {
          max-width: 700px;
          margin: 15px auto 60px;
          color: #7b3a3a;
          font-size: 16px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .price-card {
          background: #f5ecd3;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          position: relative;
          text-align: center;
        }

        .price-card.popular {
          background: #f9efd9;
          transform: scale(1.05);
        }

        .badge {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: #7b1e2b;
          color: #fff;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
        }

        .price-card h3 {
          color: #6b0f14;
          font-size: 26px;
          margin-top: 10px;
        }

        .plan-sub {
          color: #7b3a3a;
          margin-bottom: 20px;
        }

        .price {
          font-size: 36px;
          color: #7b1e2b;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .time {
          color: #7b3a3a;
          margin-bottom: 25px;
        }

        ul {
          list-style: none;
          padding: 0;
          text-align: left;
          margin-bottom: 30px;
        }

        ul li {
          margin-bottom: 10px;
          color: #5c0a14;
          font-size: 14px;
        }

       .book-now-btn{
          background: #7b1e2b;
          border: none;
          padding: 12px 30px;
          border-radius: 12px;
          color: white;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
        }

        .price-card:not(.popular) button-now-btn {
          background: transparent;
          border: 2px solid #7b1e2b;
          color: #7b1e2b;
        }

        button-now-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
