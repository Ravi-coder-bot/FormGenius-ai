
import React from 'react'
import FormBuilder from '../../../_components/FormBuilder';
import BuilderContextProvider from '@/context/builder-provider';

 const Builder = () => {
  return (
    <BuilderContextProvider>
      <FormBuilder/>
    </BuilderContextProvider>
    
  )
}
export default Builder;
