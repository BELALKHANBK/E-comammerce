import { useEffect, useState } from 'react';
import"react-toastify/dist/ReactToastify.css";
import { IoIosHeartEmpty } from "react-icons/io";
import BidBtn from '../../button/BitBtn';
import {  toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

import { ToastContainer} from 'react-toastify';

const notifyAddItem = () => toast ('Add Items to your Favorite  List')

/* const remove=()=>toast('remove item form card') */



const BidItems = () => { 
  const [bids, setBids] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBids(data));
    }, []);




    const [addFav, setAddFav]= useState([])


    const removeItem = (id) => {
          setAddFav(addFav.filter(item => item.id != id))//ata diye card remove kora jay
        }
        const total=addFav.reduce((sum,belal)=> sum + belal.money, 0)//ata diye carte kora jay ar maney add and dele

    
    
    const handleClicked = (bid ) =>{
      notifyAddItem();
      const isAlreadyFavorite = addFav.some(
        (item) => item.id === bid.id
      );
      if(isAlreadyFavorite){
        return;
      }
      const newAddfav = [...addFav, bid]
      setAddFav(newAddfav)

   /*   setCounts(counts + bid.money) */
    }
    


  
    

  return (
    <div className='bg-gray-500 ' >
      <div className="text-start ml-6">
        <h1 className="text-3xl font-bold text-green-500">Active Auctions </h1>
        <p className="text-xl font-semibold ">
          Discover and bid on extraordinary items
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" sm:w-[70%] bg-slate-100 rounded-lg  shadow-lg p-4 m-4 text-black">
       
        <table className='w-full border-2 border-indigo-500 '>
      <thead  className='border-2 border-indigo-500 '>
        <tr className='p-5'>
          
          <th >Item</th>
          <th >Title</th>
          <th >Current Bid</th>
          <th >Time Left </th>
          <th >Bid Now</th>
          
        </tr>
      </thead >
      <tbody className='border-t-2 border-indigo-400'>
      {
        bids.map(bid => (
          <tr className='border-t-2 border-indigo-400 py-4 ' key={bid.id}>
            <td className='p-2' ><img className='w-25 h-25 ' src={bid.image} alt=""  /></td>
            <td className=' font-bold text-black lg:text-40'>{bid.title}</td>
            <td className='text-black font-bold'> {bid.currentBidPrice}</td>
            <td className='text-black font-bold'>{bid.timeLeft}</td>
            <td className='ml-10'>
            <BidBtn handleClicked={handleClicked} isFavorite={ addFav.some((item)=> item.id === bid.id) } bid={bid}></BidBtn>

            </td>
           
          </tr>
        ))
        }
      </tbody>
    </table>
        </div>

        <div className="right-container sm:w-[40%] bg-slate-100 rounded-lg shadow-lg p-5 m-5 flex-row  text-black">
         <div className='flex gap-2.5 '>
         <IoIosHeartEmpty size={35}/>
         <h1 className='text-3xl text-gray-600 font-bold mb-8'>Favorite Items</h1>
         </div>
        
         
          {
            addFav.length===0 ? (<div><h3 className='text-2xl text-gray-600 font-semibold'>No favorites yet</h3> <p>Click the heart icon on any item to add it to your favorites</p></div>) : (<div>
              {
                addFav.map((bid) => <div className='flex border-t-2 py-2 border-indigo-500 border-2 bg-amber-200 mt-4' key={bid.id} > 
                <img className='w-16 h-16 ml-4' src={bid.image} alt="" />
                <div>                
                <h1 className='ml-4'>{bid.title}</h1>
                <div className='flex justify-between ml-4 gap-8'>
                  <h3>{bid.currentBidPrice}</h3>
                  <h3>{bid.bidsCount}</h3>
                </div>
                </div>
                <div>
                  <button className='ml-2' onClick={()=>removeItem(bid.id)}><IoClose size={30}/>
                  <ToastContainer />
                  </button>
                </div>
                </div>)
              }

            </div>)
          }
        <div className='flex items-center justify-between  border-t-2 border-indigo-400 mt-8'>
        <h1 className=''>Total Bids Amount :</h1>
        <h1 className=''>$ {total}</h1>
        </div>
        </div>


      </div>
     </div>
  );
};

export default BidItems;
