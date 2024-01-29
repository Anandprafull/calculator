import react, { useState } from "react";
import { ethers } from "ethers";

const App = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0); 
    const [result, setResult] = useState(0);

    const handleNumber1Change = (e) => {
        setNumber1(e.target.value);
    };
    const handleNumber2Change = (e) => {
        setNumber2(e.target.value);
    };
    const handleCalculate =  async() => {
        const provider = new ethers.providersAlchemyProvider();
        const signer = new ethers.Wallet("YOUR_PRIVATE_KEY" , provider);
        const contract = new ethers.Contract(
            "YOUR_CONTRACT_ADDRESS",
            ["function add(uint256 a, uint256 b) public returns (uint256)"],
            signer
        );
        const result = await contract.add(number1, number2);
        setResult(result);  
    };

    return (
        <div>
        <h1>Calclator</h1>
        <input type="number" value={number1} onChange={handleNumber1Change} />
        <input type="number" value={number2} onChange={handleNumber2Change} />
        <button onClick={handleCalculate}>Calculate</button>
        <p>Result: {result}</p>
        </div>
    );
};

export default App;