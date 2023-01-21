import React from 'react'
import { useForm, SubmitHandler  } from "react-hook-form";
import { InputCalendarForm } from './inputs/InputCalendarForm';
import { InputTextForm } from './inputs/InputTextForm';
import { InputSelectForm } from './inputs/InputSelectForm';
import { countryList } from '../helpers/dataContries';



export const FormCreateEmploye = () => {
    const { register, handleSubmit,control, watch, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<any> = data => {
        console.log(data)
      };
      const statusMaritalOptions = [
        {name: 'Married', code: 'M'},
        {name: 'Single', code: 'S'},

    ];

  return (
  

<form className='container-form-user' onSubmit={handleSubmit(onSubmit)}>
    <InputTextForm
    control={control}
    label='Name'
    />
    <InputTextForm
    control={control}
    label='Father LastName'
    />
    <InputTextForm
    control={control}
    label='Mother LastName'
    />
      <InputTextForm
    control={control}
    label='Age'
    disabled
    />
    <InputCalendarForm
    control={control}
    label='Birthday'
    />
    <InputSelectForm
    control={control}
    label='Status Marital'
    options={statusMaritalOptions}
    />
       <InputTextForm
    control={control}
    label='Phone'
    /> 
       <InputSelectForm
    control={control}
    label='Countries'
    options={countryList}
    
    />
<button type='submit'> Enviar</button>
    </form>

  


  )
}
