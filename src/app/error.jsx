"use client";
import React, { useEffect } from "react";
export default function ErrorComponent({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. please try again later</h1>
      <button onClick={() => reset()} className="hover:text-amber-500">
        Try Again
      </button>
    </div>
  );
}
