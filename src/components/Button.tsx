"use client";

import { useCallback } from "react";

const Button = ({ message, label }: { message: string; label: string }) => {
  const showMessage = useCallback(() => {
    window.alert(message);
  }, [message]);

  return (
    <button
      className="bg-white text-black rounded-md px-3 py-1"
      onClick={showMessage}
    >
      {label}
    </button>
  );
};

export default Button;
