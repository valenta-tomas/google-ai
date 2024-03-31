interface InputSelect{
    values:string[]
  }
  
  export default function InputSelect(props:InputSelect) {
    const {values} =props
    return (
      <select name="Ahoj">
      {values.map(v=>(
        <option key={v} value={v}  className="bg-red-600">
            {v}
        </option >
        ))}
    </select>
    );
  }
  