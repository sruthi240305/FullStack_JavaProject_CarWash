import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookNow2() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [time, setTime] = useState("");

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleContinue = () => {
    localStorage.setItem("selectedDate", date);
    localStorage.setItem("pickup", pickup);
    localStorage.setItem("selectedTime", time);

    navigate("/booknow3");
  };

  return (
    <>
       
    <div className="booknow2-container">
    

      <div className="card">
        <h2 className="card-title">Select Date & Time</h2>
       <div className="stepper">
  <div className="step completed">1</div>
  <div className="line completed"></div>

  <div className="step completed">2</div>
  <div className="line completed"></div>

  <div className="step">3</div>
  <div className="line"></div>

  <div className="step">4</div>
</div>


        <div className="section">
          <label>Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="curved-input"
          />
        </div>
        <div className="section">
          <p>Do you want pickup service?</p>
          <label>
            <input
              type="radio"
              name="pickup"
              onChange={() => setPickup("Yes")}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="pickup"
              onChange={() => setPickup("No")}
            />
            No
          </label>
           <p class="subtitle">
          If yes, we’ll pick up your vehicle 30 minutes before <br/>
          the selected time and drop it off after the service.
           </p>
        </div>
        <div className="section">
          <p>Select Time</p>
          <div className="time-grid curved-box">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={time === slot ? "selected" : ""}
                onClick={() => setTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="buttons">
          <button onClick={() => navigate("/booknow")}>Back</button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>

      <style>
        {`
        .booknow2-container{
min-height:100vh;
background-color:#f6f0e1;
display:flex;
justify-content:center;
align-items:center;
padding:80px 20px;
box-sizing:border-box;
font-family:Georgia,serif
}

.card{
background-color:#f7edd2;
width:100%;
max-width:980px;
flex-shrink:0;
padding:40px;
border-radius:28px;
box-shadow:0 14px 35px rgba(0,0,0,.18);
box-sizing:border-box
}
.curved-input{
background-color:#fff;
box-shadow:0 4px 10px rgba(0,0,0,.08);
}

.card-title{
text-align:center;
color:#7b4a3f;
font-size:32px;
margin-bottom:30px;
}


.center-heading{
text-align:center;
margin-bottom:30px;
background-color:#f6f0e1
}

.center-heading h2{
color:#6b0f14;
font-size:36px;
margin-bottom:8px
}

.subtitle{
color:#7a142c;
font-size:14px
}

.section{
margin-bottom:18px;
color:#6b0f14;
font-weight:600
}

.curved-input{
width:100%;
padding:14px 16px;
margin-top:8px;
border:1px solid #6b0f14;
border-radius:14px;
outline:none;
font-size:14px;
background-color:#fff;
box-sizing:border-box
}

input[type=radio]{
accent-color:#6b0f14;
margin-right:6px
}

.radio-group{
margin-top:10px
}

.pickup-note{
margin-top:10px;
font-size:14px;
color:#6b0f14;
background-color:#f6e8c8;
padding:12px 16px;
border-left:4px solid #6b0f14;
border-radius:10px
}

.curved-box{
border:1px solid #6b0f14;
border-radius:20px;
padding:18px;
margin-top:12px
}

.time-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:16px
}

.time-grid button{
padding:14px;
border:1px solid #6b0f14;
background-color:#7a142c;
color:#fff;
cursor:pointer;
border-radius:18px;
font-weight:600;
transition:background-color .25s ease,transform .15s ease
}

.time-grid button:not(.selected):hover{
background-color:#f0e2c4;
color:#6b0f14;
}

.time-grid .selected{
background-color:#6b0f14;
color:#f0e2c4;
cursor:default;
}

.buttons{
display:flex;
justify-content:space-between;
margin-top:32px
}

.buttons button{
padding:14px 34px;
background-color:#6b0f14;
color:#fff;
border:none;
border-radius:30px;
font-weight:600;
cursor:pointer;
transition:background-color .25s ease,transform .15s ease
}

.buttons button:hover{
background-color:#8a1c23;
transform:translateY(-1px)
}

.stepper{
display:flex;
align-items:center;
justify-content:center;
margin:20px 0 30px
}

.step{
width:34px;
height:34px;
border-radius:50%;
background:#e6d8b3;
color:#6b0f14;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
font-size:14px
}

.step.completed{
background:#6b0f14;
color:#fff
}

.step.active{
background:#7a142c;
color:#fff;
box-shadow:0 0 4px 4px rgba(122,20,44,.2)
}

.line{
width:40px;
height:3px;
background:#e6d8b3
}

.line.completed{
background:#6b0f14
}

@media(max-width:768px){
.card{
padding:28px
}
.time-grid{
grid-template-columns:repeat(2,1fr)
}
.center-heading h2{
font-size:28px
}
}

@media(max-width:480px){
.time-grid{
grid-template-columns:1fr
}
.buttons{
flex-direction:column;
gap:16px
}
}


        `}
      </style>
    </div></>
  );
}
