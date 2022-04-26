
import Link from 'next/link'

export default function Home() {
 

  return (
    <div className="h-full">
      <h1>Especificações</h1>
      <fieldset>
        <legend>CAR</legend>
          <div class="input-box">
            <label id="esp">Marca:</label>
            <input type="text" placeholder='old' id="spec"></input>
          </div>
          <div class="input-box">
            <label id="esp">Modelo:</label>
            <input type="text" placeholder='old' id="spec"></input>
          </div>
          <div class="input-box">
            <label id="esp">Potência:</label>
            <input type="text" placeholder='old' id="spec"></input>
          </div>
          <div class="input-box">
            <label id="esp">lugares:</label>
            <input type="text" placeholder='old' id="spec"></input>
          </div>
      </fieldset>
      <a> </a>
    </div>
  )

}