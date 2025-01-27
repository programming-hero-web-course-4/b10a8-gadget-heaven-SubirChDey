import { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  
  return (
    <div>Statistics</div>
  )
}

export default Statistics