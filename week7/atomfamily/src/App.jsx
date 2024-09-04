
import './App.css'
import 'recoil'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { todoFamily } from './store/atoms/atoms'

function App() {

  return (
    <>
    <RecoilRoot>

      <Todo id={1}></Todo>
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
    </RecoilRoot>
    </>
  )
}
function Todo({id}){

  const [currTodo,setCurrTodo] = useRecoilState(todoFamily(id));

  return <div>
    {currTodo.id}
    {currTodo.title}
    {currTodo.description}
  </div>
}

export default App
