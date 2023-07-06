import { useState } from 'react';
import { Link } from 'react-router-dom';


const Ticketraise = ({showModal}) => {

  const [serviceType, setServiceType] = useState('');
  const [file, setFile] = useState(null);
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
    console.log('Service Type:', serviceType);
    console.log('File:', file);
  };


  return showModal && (
    <div className="absolute inset-0  h-screen flex flex-col justify-center items-center shadow-2xl border-2 border-cyan-300">
        <div className='w-1/2 h-2/5 relative  bg-cyan-100 flex-wrap border-2 border-black rounded-lg'>
        <h2 className='p-4 text-center font-bold text-xl'>Raise a ticket</h2>
        <span onClick={() => showModal(false)} className='top-0 m-2 p-2 absolute right-0 float-right cursor-pointer'>X</span>
        <div className='mt-10'>
        <label className='p-2 m-2' htmlFor="serviceType">Service Type</label>
            <select className='w-1/3 m-4 px-2 ' id="serviceType" value={serviceType} onChange={handleServiceTypeChange} required>
              <option value="">Select Service Type</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Network">Network</option>
            </select>
        
            <label className=' p-2 m-2' htmlFor="priority">Priority</label>
            <select className='w-1/3 m-2 px-2' id="priority" value={priority} onChange={handlePriorityChange} required>
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
         
            <label className=' p-2 m-2' htmlFor="description">Description</label>
            <textarea className='w-1/3 m-2 px-2 '
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter ticket description..."
              required
            ></textarea>
             <label className=' p-2 ml-4' htmlFor="location">Location</label>
            <input className='w-1/3 m-2 px-2 ' type="text" id="location" value={location} onChange={handleLocationChange} required />
            </div>
            <div className='flex h-20 flex-row justify-center items-center'>
        <button type="submit" onClick={handleSubmit} className=" m-2 p-2 bg-cyan-300 rounded-xl">
          Submit
        </button>
        </div>
        </div>

    </div>
  );
};

export default Ticketraise;


