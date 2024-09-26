import { useEffect, useRef, useState } from "react";
function BmiText({ bmi }) {
    if (bmi < 18.5) return <h1>UnderWeight!</h1>;
    if (bmi > 30) return <h1>Overweight</h1>;
    return <h1>NOrmal</h1>;
}
export default function Bmi() {
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi, setBmi] = useState(0.00);
    function handleClick() {
        let weight = W_input.current.value;
        let height = H_input.current.value / 100;
        setBmi(weight / (height * height));
    }
    return (<> weight:< input ref={W_input} />height: < input ref={H_input} />
        <button onClick={handleClick} > calcurate</button><br />
        BMI: {bmi.toFixed(2)}</>);
}