import React from 'react';

const footer = () => {
    return (
        <div className=''>
            
            <footer class="footer footer-horizontal footer-center bg-white text-black p-10">
  <aside className='mr-20'>
    <h1 className="text-3xl">Auction<span className="text-blue-600">Gallery</span></h1>
    <div className="flex gap-10">
      <h1>Bid</h1>
      <h1>Win</h1>
      <h1>Own</h1>
    </div>
  </aside>
  <div class="flex flex-col md:flex-row">
    <a class="btn btn-ghost text-xl">Home</a>
    <a class="btn btn-ghost text-xl">Auctions</a>
    <a class="btn btn-ghost text-xl">Categories</a>
    <a class="btn btn-ghost text-xl">How to works</a>
  </div>
  <p>©2025 AuctionHub. All rights reserved.</p>
</footer>

        </div>
    );
};

export default footer;