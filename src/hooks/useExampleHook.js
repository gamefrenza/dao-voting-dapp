import { useState } from 'react';

const useExampleHook = () => {
    const [value, setValue] = useState('');

    const updateValue = (newValue) => {
        setValue(newValue);
    };

    return [value, updateValue];
};

export default useExampleHook; 