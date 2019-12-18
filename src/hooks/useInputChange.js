import { useState } from "react";

export function useInputChange() {
  const [input, setInput] = useState({});
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  return [input, handleInputChange];
}
