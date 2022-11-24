import React, { useState } from "react";

export const Input = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            {inputValue && <h3>{inputValue}</h3>}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};
