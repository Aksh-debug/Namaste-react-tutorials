const Contact = () =>{
    return (
        <div>
            <h1 className="text-center font-bold m-4 text-lg">Contact Us</h1>
            <form className="mx-60 border-2 rounded-md my-6 flex items-center justify-center shadow-lg bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300">
                <label>Name: </label>
                <input className="border-[1.5px] rounded-md m-6 h-10 focus:border-cyan-400 focus:ring-cyan-200 focus:ring-2 outline-none" placeholder="Name"/>
                <label>Message: </label>
                <input className="border-[1.5px] rounded-md m-6 h-10  focus:border-cyan-400 focus:ring-cyan-200 focus:ring-2 outline-none"/>
                <button className="h-10 w-20 border-[1.5px] border-gray-600 rounded-md bg-gray-600 text-white font-bold hover:bg-gray-800">Submit</button>
            </form>
        </div>
    )
};

export default Contact;