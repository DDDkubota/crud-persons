import React from 'react'
import { Calendar } from 'primereact/calendar';
import { Controller } from "react-hook-form";


interface Props{
    label:string;
    control:any;

}
export const InputCalendarForm = ({label,control}:Props) => {
  return (
    <div className='container-input-label'>
    <Controller
    name={label}
    control={control}
    render={({ field,  }) => <span className="p-float-label">
    <Calendar maxDate={new Date} id="basic" value={field.value} onChange={field.onChange} />
    <label htmlFor="in">{label}</label>
</span>}
  />



</div>
  )
}
