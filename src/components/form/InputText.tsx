interface InputText{
  label:string,
  name:string
}

export default function InputText(props:InputText) {
  const {label, name} =props
  return (
    <>
    <label htmlFor={name} className="block ">{label}</label>
    <input type="text" name={name} id={name}  className="bg-[#DBE2EF] rounded-lg w-full h-2/5"/>
    </>

  );
}
