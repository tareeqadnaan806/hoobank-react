
const Business = () => (
  <div className='flex justify-around items-center'>
    <div className='text-white mt-10 mb-10 business  flex font-poppins'>
      <div className="business-left  p-5">
        <h1 className='mt-3 mb-3 text-5xl	'>You do the business, <br /> we'll handle the money.</h1>
        <p className='mt-3 mb-3 text-slate-400'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button className='text-black px-8 py-4 bg-green-200 rounded-lg mt-5'>Get Started</button>
      </div>

      <div className="business-right ">
        <div className="flex flex-col items-end	justify-betweens p-5">
          <div className="p-5 reward">
            <h3 className="text-gradient text-xl">Rewards</h3>
            <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
          </div>
          <div className="p-5 reward">
            <h3 className="text-gradient text-xl">100% Secured</h3>
            <p>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
          <div className="p-5 reward">
            <h3 className="text-gradient text-xl">Balance Transfer</h3>
            <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Business