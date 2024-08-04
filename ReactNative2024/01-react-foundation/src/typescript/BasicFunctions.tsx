export const BasicFunctions = () => {

    const addTwoNumbers = (a: number, b: number) : number => {
        return a + b;
    }

    return (
        <>
            <h3>Fucniones</h3>
            <span>El resultado de sumar 2 + 8 = { addTwoNumbers(2, 8) }</span>
        </>
    )
}
