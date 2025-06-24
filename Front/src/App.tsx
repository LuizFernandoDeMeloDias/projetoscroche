import './App.css'
import { Card } from './components/card/card'
import { useProjectData } from './hooks/useProjectData';

function App() {

  const {data} = useProjectData();

  return (
    <>
<div className='container'>
  <h1>Projetos</h1>

  <div className='card-grid'>
    {data?.map((ProjectData, index) => (
      <Card
        key={index}
        name={ProjectData.name}
        image={ProjectData.image}
        priority={ProjectData.priority}
      />
    ))}
  </div>
</div>
    </>
  )
}

export default App
