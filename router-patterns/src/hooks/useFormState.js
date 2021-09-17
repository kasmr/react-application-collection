import { useState } from 'react';

function useFormState(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue('');
  };

  return [value, handleChange, resetValue];
}

export default useFormState;
