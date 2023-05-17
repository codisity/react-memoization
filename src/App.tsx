import { memo, useCallback, useMemo, useState } from "react"
import { blockCPUThread } from "./libs/cpu-thread-blocker"

function App() {
  console.log("App")

  const [count, setCount] = useState(0)

  // const computedValue = blockCPUThread(500)
  // const cachedValue = useMemo(() => blockCPUThread(500), [])

  function handleClick() {
    setCount((value) => value + 1)

    // console.log(computedValue)
    // console.log(cachedValue)
  }
  // const handleClick = useCallback(function handleClick() {
  //   setCount((value) => value + 1)

  //   console.log(computedValue)
  //   // console.log(cachedValue)
  // }, [])

  return (
    <>
      <Heading />
      <Button handleClick={handleClick} />
      <ClickCounter count={count} />
      <NthClickIndicator isTrue={count > 0 && count % 10 === 0} />
    </>
  )
}

function Heading() {
  console.log("Heading")

  return <h2>Memoization</h2>
}
// const Heading = memo(function Heading() {
//   console.log("Heading")

//   return <h2>Memoization</h2>
// })

function Button({ handleClick }: { handleClick: () => void }) {
  console.log("Button")

  return <button onClick={handleClick}>Click me</button>
}
// const Button = memo(function Button({
//   handleClick,
// }: {
//   handleClick: () => void
// }) {
//   console.log("Button")

//   return <button onClick={handleClick}>Click me</button>
// })

function NthClickIndicator({ isTrue }: { isTrue: boolean }) {
  console.log("NthClickIndicator")

  return <p>{isTrue && "🎯"}</p>
}
// const NthClickIndicator = memo(function NthClickIndicator({
//   isTrue,
// }: {
//   isTrue: boolean
// }) {
//   console.log("NthClickIndicator")

//   return <p>{isTrue && "🎯"}</p>
// })

function ClickCounter({ count }: { count: number }) {
  console.log("ClickCounter")

  return <p>Click counter: {count}</p>
}

export default App
