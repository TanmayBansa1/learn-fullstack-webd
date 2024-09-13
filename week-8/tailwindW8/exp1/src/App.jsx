import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './RevenueCard'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div style={{ backgroundColor: "red" }}> Red</div>
//         <div style={{ backgroundColor: "blue" }}> Blue </div>
//         <div style={{ backgroundColor: "green" }}> Green</div>

//       </div>

//       Now this was just raw css, now we'll follow tailwind

//       <div className='flex justify-center'>
//         <div className='bg-red-500'> Red 2</div>
//         <div className='bg-blue-500'> Blue 2</div>
//         <div className='bg-green-500'> Green 2</div>
//       </div>


//       using grids
//       <div className='grid grid-cols-12'>
//         <div className='col-span-3 bg-red-500'>hi</div>
//         <div className='col-span-3 bg-yellow-500'>hi</div>
//         <div className='col-span-6 bg-green-500'>hi</div>
//       </div>


//       using media queries, remember that tailwind is mobile first
//       <div className='bg-red-500 md:bg-blue-500'> I am by default red but when the md breakpoint  is crossed I become blue</div>

//       <div className='grid grid-cols-1 sm:grid-cols-3'>
//         <div className='bg-red-500'> Red 3</div>
//         <div className='bg-blue-500'> Blue 3</div>
//         <div className='bg-green-500'> Green 3</div>
//       </div>

//     </>
//   )
// }


//for the dukaan assignment
function App() {

  return <div>
    <div className='grid grid-cols-4'>

      <RevenueCard title="Amount Pending" amount={92000} orderCount={13}></RevenueCard>
    </div>
  </div>
}

export default App
