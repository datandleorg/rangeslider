import React from "react";
import styled from "styled-components";

const Slider = styled.div`
  display: inline-block;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  padding-bottom: 15px;

  & > input {
    opacity: 0;
    width: 100%;
    position: relative;
    z-index: 5;
    margin-top: 72px;
    -webkit-appearance: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      z-index: 100;
      position: relative;
      width: 50px;
      height: 30px;
      -webkit-border-radius: 10px;
    }
  }
  & > span.slider-container {
    display: inline-block;
    min-height: 110px;
    display: inline-block;
    position: absolute;
    top: 4rem;
    left: -8px;
    right: 46px;
    z-index: 3;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    & > span.bar {
      background-color: #ccc;
      display: inline-block;
      position: absolute;
      z-index: 1;
      top: 12px;
      left: 10px;
      right: -28px;
      height: 11px;
      overflow: hidden;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      & > span {
        background: #007bff;
        display: inline-block;
        float: left;
        height: 11px;
        width: 0%;
      }
    }
    & > span.bar-btn {
      display: inline-block;
      position: absolute;
      padding-top: 8px;
      padding-left: 8px;
      font-weight: bold;
      text-align: center;
      color: #999;
      left: -25px;
      top: -2rem;
      border-radius: 3px;

      &:after {
        content: "";
        border: 2px solid #fff;
        background-color: #f2f2f2;
        border-radius: 20px;
        width: 25px;
        height: 25px;
        display: inline-block;
        position: absolute;
        left: 8px;
        top: 2.3rem;
        z-index: 3;
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const RangeSlider = ({ onChange, max, min, value, step, name }) => {
  let percentage = ((value - min) / (max - min)) * 100;
  return (
    <Slider>
      <input
        className="slider"
        value={value}
        min={min}
        max={max}
        name={name}
        type="range"
        step={step}
        onChange={onChange}
      />
      <span className="slider-container">
        <span className="bar">
          <span style={{ width: `${percentage}%` }}></span>
        </span>
        <span className="bar-btn text-secondary" style={{ left: `${percentage}%` }}>
          <span>{value}</span>
        </span>
      </span>
      <div className="d-flex justify-content-between font-weight-bold text-secondary">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </Slider>
  );
};

export default RangeSlider;
