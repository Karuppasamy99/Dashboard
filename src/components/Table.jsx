
const Table = ({data}) => {
  

  // const searchName = data
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="p-2 m-2 bg-cyan-100">
            <td>Action</td>
            <td>Request Number</td>
            <td>Status</td>
            <td>Service Type</td>
            <td>Service Category</td>
            <td>Description</td>
            <td>Location</td>
            <td>Assigned to</td>
            <td>Created on</td>
          </tr>
        </thead>
        <tbody>
        {data && data.map( item => 
        <tr className="bg-slate-100 h-8 py-4 my-2" key={item.id}>
          <td>{item.actions}</td>
          <td>{item.requestNumber}</td>
          <td>{item.status}</td>
          <td>{item.serviceType}</td>
          <td>{item.serviceCategory}</td>
          <td>{item.description}</td>
          <td>{item.location}</td>
          <td>{item.assignedTo}</td>
          <td>{item.createdOn}</td>
           </tr> )}
            
          
        </tbody>
      </table>
    </div>
  )
}

export default Table