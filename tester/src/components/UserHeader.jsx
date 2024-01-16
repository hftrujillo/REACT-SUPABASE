
const UserHeader = () => {
  return (
    <div>
        <div className = "dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-navy-sucks rounded-box w-52 text-[#849bf5]">
                <li className="hover:bg-navy-sucks"><a href="/CreateAccount">Profile</a></li>
                <li><a>Settings</a></li>
                <li><a href="/CreateAccount">Logout</a></li>
            </ul>
        </div>
    </div>
  )
}

export default UserHeader