import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "×",
  divide = "÷",
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0')
  const [previousNumber, setPreviousNumber] = useState('0')
  const [formula, setFormula] = useState("")

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firtFormulaPart = formula.split(" ").at(0);
      setFormula(`${firtFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPreviousNumber(subResult.toString());
  }, [formula])

  const clean = () => {
    setNumber("0");
    setPreviousNumber("0");
    lastOperation.current = undefined;
    setFormula("");
  }

  const deleteOperation = () => {

    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-",
        temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  }

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ''));
    }

    setNumber("-" + number);
  }

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      // Punto decimal
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto decimal y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Evitar 000000
      if (numberString === "0" && !number.includes(".")) return;
      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  }

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith(".")) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber("0");
  }

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  }

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  }

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  }

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());
    lastOperation.current = undefined;
    setPreviousNumber("0");
  }

  const calculateSubResult = (): number => {

    const [firstValue, operation, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error("Operation not implemented");
    }
  }

  return {
    number,
    buildNumber,
    toggleSign,
    formula,
    clean,
    deleteOperation,
    divideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    previousNumber,
    calculateResult,
  }
}
