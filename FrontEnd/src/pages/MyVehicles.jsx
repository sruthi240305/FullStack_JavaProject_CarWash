import { useState } from "react";

const MyVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    model: "",
    color: "",
    number: ""
  });

  const handleAddVehicle = () => {
    if (!form.name || !form.model) return;

    setVehicles([...vehicles, { ...form, image }]);
    setForm({ name: "", model: "", color: "", number: "" });
    setImage(null);
  };

  return (
    <>
      <style>{`
        .vehicle-wrapper {
          background: #f6efdf;
          min-height: calc(100vh - 60px);
          padding: 40px 20px;
        }

        .vehicle-container {
          max-width: 900px;
          margin: auto;
        }

        .vehicle-title {
          color: #7b1e2b;
          margin-bottom: 28px;
        }

        .add-card {
          background: #ffffff;
          padding: 28px;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          margin-bottom: 36px;
        }

        .add-card h3 {
          margin-top: 0;
          color: #7b1e2b;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 18px;
        }

        .form-grid input {
          background: #f6efdf;
          border: none;
          padding: 12px;
          border-radius: 10px;
          outline: none;
          font-size: 14px;
        }

        .upload-box {
          margin-top: 18px;
          height: 180px;
          border: 2px dashed #7b1e2b;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f6efdf;
          cursor: pointer;
          overflow: hidden;
          font-weight: 600;
          color: #7b1e2b;
        }

        .upload-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .add-btn {
          margin-top: 22px;
          background: #7b1e2b;
          color: #fff;
          border: none;
          padding: 12px 26px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .vehicle-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }

        .vehicle-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .vehicle-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 14px;
          margin-bottom: 12px;
        }

        .vehicle-card h3 {
          color: #7b1e2b;
          margin: 6px 0;
        }

        .vehicle-info {
          font-size: 14px;
          color: #7b4b4b;
        }
      `}</style>

      <div className="vehicle-wrapper">
        <div className="vehicle-container">
          <h1 className="vehicle-title">My Vehicles</h1>

          <div className="add-card">
            <h3>Add New Vehicle</h3>

            <div className="form-grid">
              <input
                placeholder="Vehicle Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              <input
                placeholder="Model"
                value={form.model}
                onChange={(e) =>
                  setForm({ ...form, model: e.target.value })
                }
              />
              <input
                placeholder="Color"
                value={form.color}
                onChange={(e) =>
                  setForm({ ...form, color: e.target.value })
                }
              />
              <input
                placeholder="Vehicle Number"
                value={form.number}
                onChange={(e) =>
                  setForm({ ...form, number: e.target.value })
                }
              />
            </div>

            <label className="upload-box">
              {image ? (
                <img src={image} alt="Vehicle Preview" />
              ) : (
                "+ Upload Vehicle Image"
              )}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />
            </label>

            <button className="add-btn" onClick={handleAddVehicle}>
              Add Vehicle
            </button>
          </div>

          <div className="vehicle-list">
            {vehicles.map((v, i) => (
              <div className="vehicle-card" key={i}>
                {v.image && <img src={v.image} alt="Vehicle" />}
                <h3>{v.name}</h3>
                <div className="vehicle-info">Model: {v.model}</div>
                <div className="vehicle-info">Color: {v.color}</div>
                <div className="vehicle-info">No: {v.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyVehicles;
