import React, { useState } from 'react'

export default function Cc1task({txt,delet,vall}) {
const [stl,setstl]=useState(true)


  return (
    <div>
        <input type="text" value={txt} readOnly className='np'/> <input type="button" onClick={delet} value="Supprimer" className='supprimer' /> <input className='valid' type="button" value="valider" onClick={vall} />
    </div>
  )
}
