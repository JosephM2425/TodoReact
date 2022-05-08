import React from 'react'

function TodoList(props){
    return(
       <section>
          <ul className="m-0 mt-0 mr-0 ml-0 mb-14 list-none">
              { props.children }
          </ul>
       </section>
    )
}

export { TodoList }