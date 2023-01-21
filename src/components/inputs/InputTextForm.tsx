import React from 'react'
import { InputText,  } from 'primereact/inputtext';
import { Controller } from "react-hook-form";


interface Props{
    label:string;
    control:any;
    disabled?: boolean;

}


export const InputTextForm = ({label,control,disabled=false}:Props) => {


  return (
    <div className='container-input-label'>
        <Controller
        name={label}
        control={control}
        render={({ field,  }) => <span className="p-float-label">
        <InputText readOnly={disabled} id="in" value={field.value} onChange={field.onChange} />
        <label htmlFor="in">{label}</label>
    </span>}
      />
 


    </div>
  )
}
