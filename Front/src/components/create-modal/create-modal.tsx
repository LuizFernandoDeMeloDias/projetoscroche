import { useState } from "react"
import { useProjectDataMutate } from "../../hooks/useProjectDataMutate";
import type { ProjectData } from "../../interface/ProjectData";

interface InputProps{
    label: string,
    value: string | number,
    updateValue: (value:any) => void

}

const Input = ({label, value, updateValue}: InputProps) =>{
    return(
        <>
        <label>{label}</label>
        <input value={value} onChange={e => updateValue(e.target.value)} type="text" />
        </>
    )
}


export function CreateModal(){
    
    const [name, setName] = useState("");
    const [priority, setPriority] = useState(0);
    const [imagePath, setImagePath] = useState("");
    
    const { mutate } = useProjectDataMutate();

    const submite = () => {
        const projectData: ProjectData = {
            name,
            priority,
            imagePath
        }

        mutate(projectData)


    }


    return(
        <div className="modal-overlay">
            <div className="modal-body">
                
                <h2>Cadatre um novo projeto!</h2>

                    <Input label="Nome do Projeto" value={name} updateValue={setName}/><br />
                    <Input label="Prioridade do Projeto" value={priority} updateValue={setPriority}/><br />
                    <Input label="Link da imagem do Projeto" value={imagePath} updateValue={setImagePath}/><br />
                    <button className="btn-submit" onClick={submite}>Postar</button>
                <form className="input-container" action="">

                </form>
            </div>

        </div>
    )

}