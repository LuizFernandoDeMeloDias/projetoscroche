import { useState } from 'react';
import './App.css'

import { Card } from './components/card/card'
import { useProjectData } from './hooks/useProjectData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {

  const {data} = useProjectData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{

    setIsModalOpen(prev => !prev)

  }

  return (
    <>
<div className='container'>
  <h1>Projetos</h1>

  <div className='card-grid'>
    {data?.map((ProjectData, index) => (
      <Card
        key={index}
        name={ProjectData.name}
        image={ProjectData.imagePath}
        priority={ProjectData.priority}
      />
    )
    
    
  )}
    </div>
        {isModalOpen && <CreateModal/>}

        <button onClick={handleOpenModal}>NOvo</button>
    </div>
    </>
  )
}

export default App
