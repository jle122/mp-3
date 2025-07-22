import {styled} from "styled-components";
import {useState} from "react";

const Calculator = styled.div`
    background-color: rgb(0,34,68);
    margin-left: 120px;
    margin-right: 120px;
    margin-top: 20px;
    border: rgb(255,194,14) solid 2px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin:0px;
        }
`

const CalcInput = styled.input`
    @media screen and (max-width:1000px) {
        max-width: 80%;
    }
`

const StyledButton = styled.button`
    background-color: rgb(255,194,14);
`
export default function Project () {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState(0);

    function reset() {
        setInput1('');
        setInput2('');
        setResult(0);
    }

    function exponent () {
        let first = Number(input1);
        let second = Number(input2);
        let resultA = 1;
        for (let i = 0; i < second; i++) {
        resultA = resultA * first;
    }
        setResult(resultA);
    }

    function checkColor() {
        if (result < 0) {
            const StyledHeader = styled.h3`
                color: red;
            `
            return <StyledHeader>{result}</StyledHeader>
        } else {
            const StyledHeader = styled.h3`
                color: rgb(255,194,14);
            `
            return <StyledHeader>{result}</StyledHeader>
        }
    }

    return (
        <>
        <h3>Projects</h3>
        <Calculator>
                <h4>Calculator:</h4> {/* onChange={(e) => setInput1(e.target.value) helps to change the state to the user input based on every keystroke. 
                e represents an event object when a user types something. e.target.value represents the value of what the user typed in. We can call setInput
                on this value to change the state. The value attribute is required for the clear, because originally when the reset function is called,
                The states were cleared, but user input stayed when it shouldn't. Adding the value attribute allows the user input to also be cleared 
                by setting the value of the input to the variables set in the useState calls. */}
                <label>First number: </label><CalcInput type="text" value={input1} onChange={(e) => setInput1(e.target.value)}/>
                <br/><br/>
                <label>Second number: </label><CalcInput type="text" value={input2} onChange={(e) => setInput2(e.target.value)}/>
                <br/><br/>
                <br/><br/>
                <div> {/*() => ... is required to take out the onClick error of  "no overload matches this call" */}
                    <StyledButton onClick={() => setResult(Number(input1) + Number(input2))}>+</StyledButton>
                    <StyledButton onClick={() => setResult(Number(input1) - Number(input2))}>-</StyledButton>
                    <StyledButton onClick={() => setResult(Number(input1) * Number(input2))}>*</StyledButton>
                    <StyledButton onClick={() => setResult(Number(input1) / Number(input2))}>/</StyledButton>
                    <StyledButton onClick={() => exponent()}>**</StyledButton>
                    <StyledButton onClick={() => reset()}>CLEAR</StyledButton>
                </div>
                {checkColor()}
        </Calculator>
        </>
    )
}