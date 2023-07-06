import filterIcon from '../assets/images/filterIcon.png'
import downloadIcon from '../assets/images/downloadIcon.png'
import { useState } from 'react'
import { data } from '../assets/data';
import Table from './Table';
import Ticketraise from './TicketRaise';

const ButtonList = () => {
  const [searchName, setSearchName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const filterSearch = data.filter( item => item.assignedTo.toLowerCase().includes(searchName.toLowerCase()))
  

  console.log(filterSearch)

  return (
    <>
    <div className='grid grid-flow-col mt-10'>
      <button onClick={()=> setShowModal(true)} className='col-span-1 py-1 px-2 rounded-lg bg-cyan-300 m-2'>Raise new ticket</button>
      <button className='col-span-1 py-1 px-2 rounded-lg bg-cyan-300 m-2'>My request</button>
      <div className='w-[800px]'>
     
      </div>
      <div className='col-span-2'>
      <input className='py-1 px-2 border-b-2 border-b-cyan-300' type="text" placeholder="search" value={searchName} onChange={(e)=> setSearchName(e.target.value)} />
      
      <div className='inline-block'>
      <img className='h-8 py-1 px-2' src={filterIcon} alt='filter icon' />
      </div>
      <div className='inline-block'>
      <img className='h-8 py-1 px-2' src={downloadIcon} alt='download icon' />
      </div>
      </div>
      
    </div>
    <Table data={filterSearch} />
    { showModal && <Ticketraise showModal={setShowModal} /> } 
    </>
  )
}

export default ButtonList