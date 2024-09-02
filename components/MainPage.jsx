"use client";
import { useState } from "react";

const MainPage = () => {
  const [grossValue, setGrossValue] = useState("");
  const [netValue, setNetValue] = useState(null);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/,/g, ""); // Menghilangkan koma sebelum menghitung
    if (!isNaN(value) && value !== "") {
      setGrossValue(formatNumber(Number(value)));
    } else {
      setGrossValue("");
    }
  };

  const calculateDiscount = () => {
    const value = parseFloat(grossValue.replace(/,/g, "")); // Menghilangkan koma sebelum menghitung
    const discountRate = 19.2 / 100;
    const net = value - value * discountRate;
    setNetValue(formatNumber(net));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Calculate 19.2% Discount</h1>
      <input
        type="text"
        placeholder="Enter Gross Value"
        value={grossValue}
        onChange={handleInputChange}
        className="p-3 border border-gray-300 rounded-md w-80 text-lg mb-4"
      />
      <button
        onClick={calculateDiscount}
        className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600"
      >
        Calculate
      </button>
      {netValue !== null && (
        <div className="mt-6 text-xl font-semibold">
          <strong>Net Value: </strong> {netValue}
        </div>
      )}
    </div>
  );
};

export default MainPage;
