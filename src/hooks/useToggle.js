import { useState } from "react";
/**
 * @param {boolean} initialValue, default false
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
}
// EXAMPLE
// function App() {
//   const [checked, toggleChecked] = useToggle(true)
//   return <div>
//     <input type="checkbox" checked={checked} onChange={toggleChecked} />
//     {checked ? 'checked' : 'not checked'}
//   </div>
// }
