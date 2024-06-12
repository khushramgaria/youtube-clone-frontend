import React, { useRef } from 'react'

function FormInput(props) {
  const inputRef = useRef()

  const handleChange = () => {
    if (props.type === 'file') {
      props.onChange(props.name, inputRef.current.files[0]);  // Access the file object
    } else {
      props.onChange(props.name, inputRef.current.value);
    }
  };

  return (
    <>
        <div className="grid w-full max-w-xs items-center gap-1.5">
        <label
            className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            {props.label}
        </label>
        <input
            ref={inputRef}
            placeholder={props.placeholder}
            type={props.type}
            name={props.label}
            value={props.value}
            className="flex h-10 w-full bg-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleChange}
            required
        />
        </div>
    </>
  )
}

export default FormInput