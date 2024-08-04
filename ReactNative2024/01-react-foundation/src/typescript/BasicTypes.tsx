export const BasicTypes = () => {

  const name: string = "Mauricio";
  const age: number = 33;
  const isActive: boolean = true;
  const powers: string[] = ["React", "ReactNative"]

  return (
    <>
      <h3>
        Tipos Básicos
      </h3>

      {name.toUpperCase()} {age} {isActive ? "true" : "false"}
      <br/>
      {powers.join(", ")}
    </>
  )
}
