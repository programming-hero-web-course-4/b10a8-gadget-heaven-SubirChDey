const Banner = () => {
    return (
        <div>
            <div className="bg-[#9538E2] w-11/12 mx-auto rounded-b-2xl text-center items-center content-center pb-48 mt-0 mb-8">
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="pt-4 text-white">
                            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                            <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                            </p>
                            <button className="btn bg-white rounded-full text-[#9538E2] text-xl">Shop Now</button>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex justify-center h-96">
                <div className="max-w-4xl  border-2 border-red-200 relative -top-52 p-4 rounded-3xl">
                    <img className="rounded-3xl" src="./../src/assets/banner.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Banner