
function Header() {
    return (
        <div className="bg-primary text-white w-full h-14 pr-40 pl-40 flex items-center justify-between">
            <ul className="flex justify-between w-1/5 ">
                <li><a href="#">Help</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Writers</a></li>
            </ul>
            <div className="flex items-center justify-between w-1/4">
                <h2>(91)99465-2378</h2>
                <h2>address@gmail.com</h2>
            </div>
            <div className="flex items-center justify-around w-1/5">
                <div className="border-solid border-2 border-white w-9 h-9 rounded-full"></div>
               <div className="border-solid border-2 border-white w-9 h-9 rounded-full"></div>
               <div className="border-solid border-2 border-white w-9 h-9 rounded-full"></div>
               <div className="border-solid border-2 border-white w-9 h-9 rounded-full"></div>
            </div>
        </div>
    )
}

export default Header