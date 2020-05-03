# Range Slider

Custom Range slider 

```jsx
     <RangeSlider
        min={slider.min}
        max={slider.max}
        step={slider.step}
        value={slider.value}
        onChange={(e) => {
          setSlider({ ...slider, value: e.target.value });
        }}
      />
```
