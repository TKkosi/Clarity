
function Navbar() {
    return (
        <div className="flex items-center justify-between bg-gray-100 h-16 px-6 shadow font-mono">
            <div>
                <p className="text-sm text-gray-500">Welcome,</p>
                <p className="text-lg font-semibold text-gray-800">Andrew Simon</p>
            </div>
            <div className="flex items-center w-1/2">
                <div className="relative w-full">
                    <input type="text" placeholder="Search here..." className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                    <i className="bx bx-search absolute left-3 top-2.5 text-gray-500 text-lg"></i>
                </div>
            </div>
            <div className="relative ">
                <a href="#" className="rounded-full bg-emerald-800 text-white p-2 text-center hover:bg-emerald-500">Sign Up</a>
                <a href="#" className="ml-4 rounded-full bg-emerald-800 text-white p-2 text-center hover:bg-emerald-500">Sign In</a>
            </div>
        </div>
    );
}

export default Navbar;
