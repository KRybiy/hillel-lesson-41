import { ChangeEvent, useState } from "react";

function useInputState(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
  }
}

export default useInputState