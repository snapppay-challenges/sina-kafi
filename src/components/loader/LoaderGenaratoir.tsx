import React from "react";

const LoaderGenerator = ({ number }: { number: number }) => {
  return (
    <>
      {[...Array(number)].map((_, index) => (
        <div
          key={index}
          className="w-full !h-52 bg-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
    </>
  );
};

export default LoaderGenerator;
