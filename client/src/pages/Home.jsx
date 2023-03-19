import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'
import mainimage from '../assets/mainImg.svg'
import CustomButton from '../components/CustomButton';


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address,connect, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      <div className="info flex justify-between mb-10">
        <div className="image w-1/2 h-1/3">
          <img src={mainimage} alt="mainimage" />
        </div>
        <div className="message w-1/2 h-1/3 text-white text-center pt-28 font-bold text-4xl">
          <h3>Help communities and organization in their  <span className='text-[#6D9302]'> Social Cause</span> By donating from your MetaMask</h3>
          <a href="http://localhost:8080/image" target='blank'><button className='pt-2 mt-3 pb-2 pl-4 pr-4 text-xl bg-[#6D9302] rounded-xl'>Get NFT</button></a>
        </div>
      </div>
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />

    </div>
  )
}

export default Home