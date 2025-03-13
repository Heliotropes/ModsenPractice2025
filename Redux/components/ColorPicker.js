import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../store/colorSlice';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color.color);

  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
    document.body.style.backgroundColor = e.target.value;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <label htmlFor="color-picker">Выберите цвет фона: </label>
      <input
        type="color"
        id="color-picker"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;