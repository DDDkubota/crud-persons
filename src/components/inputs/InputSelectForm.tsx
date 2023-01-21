import React from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Controller } from "react-hook-form";




interface Props{
    label:string;
    control:any;
    options:{name:string,code:string}[];

}
export const InputSelectForm = ({label,control,options}:Props) => {


  return (
    <div className='container-input-label'>
    <Controller
    name={label}
    control={control}
    render={({ field,  }) => <span className="p-float-label">
    <Dropdown optionLabel="name" value={field.value} options={options} onChange={field.onChange}/>
    <label htmlFor="in">{label}</label>
</span>}
  />



</div>
  )
}
