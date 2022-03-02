function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
    
        <h2 className="font-black text-3xl text-center">Follow Up</h2>
    
        <p className="text-lg mt-2 text-center mb-2">
          Add Patient - {''}
          <span className="text-blue-500 font-bold">Administering</span>
        </p>

        <form className="bg-white shadow-md rounded-sm py-10 px-5 mb-10">
          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
              Pet's Name
            </label>
            <input
              id="pet"
              type="text"
              placeholder="His/Her name"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
              Owner's Name
            </label>
            <input
              id="owner"
              type="text"
              placeholder="Name and surname"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. johndoe@domain.com"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
            />
          </div>          

          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
              Entry Date
            </label>
            <input
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
            />
          </div>   


          <div className="mb-5">
            <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">
              Symptoms
            </label>
            <textarea 
              id="symptom"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
              placeholder="His / Her symptoms?"
            />
          </div>

          <input
            type="submit"
            className="bg-blue-500 w-full p-3 text-white uppercase font-bold hover:bg-blue-600 cursor-pointer transition-all"
            value="add patient"
          />

        </form>
    
    </div>
  )
}

export default Form