import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget heaven";
  }, []);

  return (
    <div>
      <div className="bg-[#9538E2] w-11/12 mx-auto text-center">
        <h2 className="text-3xl text-white font-bold p-4"> Dashboard </h2>
        <p className="text-white pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <div className="flex justify-center gap-6 pb-6">
          <button className="border border-white px-16 py-4 rounded-full font-medium text-white text-lg"> Cart </button>
          <button className="border border-white px-16 py-4 rounded-full font-medium text-white text-lg"> WishList </button>
        </div>
      </div>
      <div className="flex justify-between w-11/12 mx-auto p-8">
        <div className="text-2xl font-bold">
          <h3>Cart</h3>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold">Total cost: </h3>
          <button className="text-lg font-semibold border-2 border-[#9538E2] text-[#9538E2] rounded-full py-2 px-4">Sort by Price</button>
          <button className="text-lg font-semibold border-2 bg-[#9538E2] border-[#9538E2] text-white rounded-full py-2 px-9">Purchase</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard