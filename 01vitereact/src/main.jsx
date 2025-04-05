import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | MABOI</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.youtube.com/',
//       target: '_blank',
//   },
//   children: 'Click me to visit youtube'
// }

const anotherreactElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google baby'
)

ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
) 


