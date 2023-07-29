'use client';
import React from 'react' //se puede borrar

import "./page.css"
import { Radio } from './Radio'
import data from "@/utils/radio.json";
import { useTranslation, UseTranslation } from 'next-i18next';

const RadioContainer = (props) => {
  const {t} = useTranslation();
  return (
    <section className='radio_section'>
        <h1 className='radio_title'>{t('radio.title')}</h1>
        <div className='radio_container'>
         {data.map( radio=>
               <Radio 
                  key={radio.name}
                  name={radio.name}
                  image={radio.image}
                  url={radio.url}
                  
                  
               />
            )}

        </div>
    </section>
  )
}

export default RadioContainer