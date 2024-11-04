const AddTask = () => {
  return (
    <form className="bg-white border-emerald-600 w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md font-mono">
    <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input placeholder="Enter title" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea rows={5} placeholder="Enter your description " id="content" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={""} />
    </div>
    <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Due Date</label>
        <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="flex items-center justify-between">
        <button type="submit" className="bg-emerald-800 text-sm hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Post</button>
    </div>
</form>
  )
}

export default AddTask