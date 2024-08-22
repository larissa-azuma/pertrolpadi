import React from "react";
import Content from "../../assests/image/Content.png";
import newsred from "../../assests/image/newsred.png";
// import home from '../../assests/image/home.png'
// import marketplace from '../../assests/image/marketplace.png'
// import shopping from '../../assests/image/shopping.png'
// import wallet from '../../assests/image/wallet.png'
// import news4 from '../../assests/image/news4.png'
import Secondc from "../../assests/image/Secondc.png";
import Gas from "../../assests/image/Gas.png";
import tanktruck from "../../assests/image/tanktruck.png";
import Thirdc from "../../assests/image/Thirdc.png";
import google from "../../assests/image/google.png";
import apple1 from "../../assests/image/apple1.png"

function Features() {
  return (
    <div className="min-h-[620px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <h1 className="text-center text-4xl font-bold sm:max-w-sm mx-auto">
          Why Choose Us?
        </h1>
        <p className="text-center">
          We have so much to offer you something something something
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className=" flex flex-col justify-center gap-8 sm:pt-0">
            <h1 className="text-2xl font-bold text-black">Latest News</h1>
            <p className="text-sm">
              Stay updated with the latest news and trends in the fuel market
            </p>

            <div className="text-center  space-x-4">
              <img src={newsred} alt="" className="w-12 h-12  sm:max-w-sm mx-auto" />
              <h1 className="text-lg font-medium text-black text-center ">
                Latest Development in the Fuel Industry
              </h1>
              <p className="text-sm">
                Stay informed with the most blah Lorem ipsum dolor sit amet
                consectetur adipisicing <br /> elit and sapiente ipsam
                perspiciatis voluptatem dolores rerum quisquam ad, placeat
                repudiandae quo numquam libero animi illo laudantium
                consequuntur molestias itaque tempora in!
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* <img src={home} alt='' className='w-4 h-4 '/>
          <img src={marketplace} alt='' className='w-4 h-4'/>
          <img src={shopping} alt='' className='w-4 h-4'/>
          <img src={wallet} alt='' className='w-4 h-4'/>
          <img src={news4} alt='' className='w-4 h-4'/>
           */}
            <img
              src={Content}
              alt=""
              className="max-w-[420px] w-full mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={Secondc}
              alt=""
              className="max-w-[420px] w-full mx-auto"
            />
          </div>
          <div className=" flex flex-col justify-center gap-8 sm:pt-0">
            <h1 className="text-2xl font-bold text-black flex justify-items-center">
              Real Time Prices Updates
            </h1>
            <p className="text-sm">
              Stay informed with the latest prices petrol,diesel and gas across
              Nigeria
            </p>
            <div className="text-center  space-x-4">
              <img src={Gas} alt="" className="w-12 h-12 sm:max-w-sm mx-auto" />
              <h2 className="text-lg font-medium text-black text-center ">
                Detailed Insights Into Fuel Prices
              </h2>
              <p className="text-sm">
                Get comprehensive fuel price fluctuations,trends and predictions
                <br /> Our experts provide in-depth reports to help you
                understand the factors affecting fuel prices and make informed
                decisons
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <div  className=" flex flex-col justify-center gap-8 sm:pt-0">
          <h1 className="text-left text-xl font-bold sm:max-w-sm mx-auto">
              Order Management
        </h1>
        <p className="text-center text-sm">Place,track and manage your orders and payments easily with our intuitive order management features</p>
        <div className="text-center  space-x-4">
        <img src={tanktruck} alt="" className="w-12 h-12 sm:max-w-sm mx-auto" />
        <h2 className="text-center font-bold text-black  "> Effortless Ordering Process</h2>
        <p className="text-center text-sm ">Easily order petrol,diesel and gas with just few clicks,thanks to our hassle free and efficient process that saves you time and effort.</p><br/>
        <div className="text-center space-x-4">
        <img src={tanktruck} alt="" className="w-12 h-12 sm:max-w-sm mx-auto" />
        <h2 className="text-center font-bold text-black  "> Track Your Orders & Payments Instantly</h2>
        <p className="text-center text-sm ">Track your orders in-real time from placement to delivery,keeping you informed at every step and ensuring you know the status and expected delivery.</p>
        </div>
        </div>
        </div>
          </div>
          <div className="flex justify-center items-center">
          <img
              src={Thirdc}
              alt=""
              className="max-w-[420px] w-full mx-auto"
            /> 
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <button className="bg-black text-white px-4 py-2 rounded">
          <img src={google}  alt="Google" className='h-5 w-5'/>
            <a href="/Download">Download on GooglePlay</a>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
          <img src={apple1}  alt="Apple" className='h-5 w-5'/>
            <a href="/Download">Download now on App Store</a>
          </button>
        </div>
        </div>

        <div className=" flex flex-col justify-center gap-8 sm:pt-0">
        <h1 className="text-center text-xl font-bold sm:max-w-sm mx-auto">
          We have depot listing from different zones
        </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <button className="bg-slate-50 text-black px-4 py-2 rounded">
            <a href="/Download">Lagos</a>
          </button>
          <button className="bg-slate-50 text-black px-4 py-2 rounded">
            <a href="/Download">Warri</a>
          </button>
          <button className="bg-slate-50 text-black px-4 py-2 rounded">
            <a href="/Download">Calabar</a>
          </button>
          <button className="bg-slate-50 text-blackpx-4 py-2 rounded">
            <a href="/Download">Port Harcourt</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
