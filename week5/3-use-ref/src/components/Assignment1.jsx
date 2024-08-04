import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

//focus means to actually take the cursor there

export function Assignment1() {

    const iRef = useRef();
    useEffect(() => {
        iRef.current.focus();
    }, [iRef]);

    const handleButtonClick = () => {
        iRef.current.focus();
    };

    return (
        <div>
            <input ref={iRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
