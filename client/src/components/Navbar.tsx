
function Navbar() {
    const SignOut = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
    interface User {
        id: number;
        name: string;
        email: string;
        timestamp: string;
    }
    const User: User = {
        id: 1,
        name: "Andrew Simon",
        email: "",
        timestamp: new Date().toLocaleString()
    }
    return (
        <section>
        <div className="flex items-center justify-between bg-gray-100 h-16 px-6 shadow font-mono">
            <div>
                <p className="text-sm text-gray-500">Welcome,</p>
                <p className="text-lg font-semibold text-gray-800">Andrew Simon</p>
            </div>
            <div className="flex items-center w-1/2">
                <div className="relative w-full">
                    <input type="text" placeholder="Search here..." className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
            </div>
            <div onClick={SignOut} className="relative cursor-pointer">
                <p className="rounded bg-emerald-800 text-gray-200 p-2 text-center hover:bg-emerald-500">Sign out</p>
            </div>
        </div>
        <div className="font-mono p-5">
            <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center border-emerald-800 border-2">
                <div className="flex items-center space-x-4">
                    <div>
                        <p className="text-sm text-gray-500"> {User.timestamp}</p>
                    </div>
                    <div className="border-l border-gray-300 pl-4">
                        <button className="text-black font-medium">Daily Tasks <span className="text-gray-500">▼</span></button>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-gray-200 text-black rounded-lg font-medium hover:bg-gray-300 transition">Filters</button>
                    <button className="px-4 py-2 bg-emerald-800 text-white rounded-lg font-medium hover:bg-emerald-500 transition">Create Task</button>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Navbar;
