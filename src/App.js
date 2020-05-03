import React, { useState } from "react";
import RangeSlider from "./components/RangeSlider";
import "./App.css";

const App = () => {
  const [slider, setSlider] = useState({
    value: 10,
    max: 100,
    min: 0,
    step: 1,
    name: "rangeslider",
  });

  return (
    <div className="container">
      <h2 className="text-primary">Range Slider</h2> <hr></hr>
      <div className="row">
        <div className="col-3 bg-light p-5">
          {Object.keys(slider).map((k) => {
            return (
              <div class="form-group">
                <label
                  for=""
                  style={{ textTransform: "capitalize", fontWeight: "bold", color: "#999" }}
                >
                  {k}
                </label>
                <input
                  type={k === "name" ? "text" : "number"}
                  value={slider[k]}
                  class="form-control"
                  name={k}
                  id={k}
                  placeholder={k}
                  onChange={(e) => {
                    setSlider({
                      ...slider,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="col-9">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="w-50">
              <RangeSlider
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={slider.value}
                onChange={(e) => {
                  setSlider({ ...slider, value: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
