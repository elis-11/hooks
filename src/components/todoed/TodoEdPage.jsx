import React from 'react'
import { TodoEdComp } from './TodoEdComp';


const persons = ['person001','person002','person003','person004'];

export const TodoEdPage = () => {
  return (
    <div>
      {persons.map(m => <TodoEdComp idCode={m} key={m}/>)}

        TodoEd
        </div>
  )
}
// https://github.com/edwardtanguay/todolist-react-multiple-components
