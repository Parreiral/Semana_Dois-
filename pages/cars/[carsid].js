import {useRouter} from 'next/router'
function ir(){
    window.location.href="/cars/editar.js"
}
function carcreator(){
    window.location.href="/cars/criar.js"
}

export default function carspecs(){
    const router = useRouter()
    const carsid = router.query.carsid
    
    
    

    return(
        <div classname="h-full">
            
            <div class="header">
                <label>Especificações carros {carsid}</label>
                <button>Logout</button>   
            </div><br></br>
            <button id="btn3" on onClick={carcreator}>Criar carro</button>
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
                    <button id="btn1" onClick={ir}>Editar</button>
                    <br></br>
                    <button id="btn2">Deletar</button> 
                </div>
            </div>
            
        </div>
    );

}


