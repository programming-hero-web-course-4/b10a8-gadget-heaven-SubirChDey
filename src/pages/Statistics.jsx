import { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);

  return (
    <div>
      <div className="bg-[#9538E2] w-11/12 mx-auto text-center">
        <h2 className="text-3xl text-white font-bold p-4"> Statistics </h2>
        <p className="text-white pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>        
      </div>
    </div>
  )
}

export default Statistics