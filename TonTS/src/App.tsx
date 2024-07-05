// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import './App.css';
// import { TonConnectButton } from '@tonconnect/ui-react';

// function App() {
//   return (
//     <div>
//       <TonConnectButton />
//     </div>
//   );
// }

// export default App
// import './App.css';
// import { TonConnectButton } from '@tonconnect/ui-react';
// import { useCounterContract } from './hooks/useCounterContract';

// function App() {
//   const { value, address } = useCounterContract();

//   return (
//     <div className='App'>
//       <div className='Container'>
//         <TonConnectButton />

//         <div className='Card'>
//           <b>Counter Address</b>
//           <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
//         </div>

//         <div className='Card'>
//           <b>Counter Value</b>
//           <div>{value ?? 'Loading...'}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useCounterContract } from './hooks/useCounterContract';

function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />

        <div className='Card'>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>
      </div>
    </div>
  );
}

export default App
