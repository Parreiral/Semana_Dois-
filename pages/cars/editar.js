
import Link from 'next/link'
import React, { useState } from 'react';
function voltar(){
    window.location.href="/cars/1"
}
export default function Home() {
  return (
    <div className="h-full">
     <div>
                <div className='flex content-center gap-8'>
                    <fieldset>
                        <legend>CAR</legend>
                            <div class="input-box">
                                <label id="esp">Marca:</label>
                                <input type="text"  id="spec"></input>
                            </div>
                            <div class="input-box">
                                <label id="esp">Modelo:</label>
                                <input type="text" id="spec"></input>
                            </div>
                            <div class="input-box">
                                <label id="esp">Potência:</label>
                                <input type="text"  id="spec"></input>
                            </div>
                            <div class="input-box">
                                <label id="esp">lugares:</label>
                                <input type="text"  id="spec"></input>
                            </div>
                            <div className=''>
                            </div>
                    </fieldset>
                    <fieldset id="fielddiv">
                        <legend id="legend2">Image</legend>
                            <div>
                                            
                            </div>
                    </fieldset>
                </div>
                <br></br>
                <div className='flex content-center gap-14'>
                    <button id="btn1">Confirmar Edição</button>
                    <br></br>
                    <button id="btn2" onClick={voltar}>Cancelar</button>
                </div>
            </div>
    </div>
  )
}