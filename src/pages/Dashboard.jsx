import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget heaven";
  }, []);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard