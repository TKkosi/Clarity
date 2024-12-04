import { useAuthStore } from "../store/authStore";

function Navbar() {
    const {user} = useAuthStore()
    const SignOut = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
   
    return (
        <section>
        <div className="flex items-center justify-between bg-gray-100 h-16 px-6 shadow font-mono border-b-2 border-emerald-800">
            <div>
                <p className="text-sm text-gray-500">Welcome,</p>
                <p className="text-lg font-semibold text-gray-800">{user?.name}</p>
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
        </section>
    );
}

export default Navbar;
