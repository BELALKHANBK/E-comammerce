import React from 'react';


const banner = () => {
    return (
        
      <div
      style={{
        backgroundImage:` url(https://i.ibb.co.com/9MKcRvP/Banner-min.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
      }}
    >
      
      <div className='opacity-90 p-2 sm:justify-center sm:items-center rounded-2xl border sm:ml-auto lg:ml-60  bg-gradient-to-l to-blue-700 via-purple-800  '>
      
    
         
      
        <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400'>
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white  to-yellow-400'>
          Discover rare collectibles, luxury goods, and <br></br>vintage treasures in our curated auctions.
        </p>
        <button
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '19px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Explore Auctions
        </button>
      </div>
</div>

    
    );
};

export default banner;