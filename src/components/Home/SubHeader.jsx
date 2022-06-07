import Arrow from '../../assets/arrow.jsx'
function SubHeader() {
    return(
        <div className="flex items-center justify-between bg-white text-gray w-full h-20 pr-40 pl-40">
            <ul className="flex w-2/4 justify-between items-center">
                <li className="hover:text-primary"><a href="#" className="flex items-center">Home<Arrow /></a></li>
                <li className="hover:text-primary"><a href="#">About</a></li>
                <li className="hover:text-primary"><a href="#">Blog</a></li>
                <li className="hover:text-primary"><a href="#" className="flex items-center">Categories<Arrow /></a></li>
                <li className="hover:text-primary"><a href="#">Pages</a></li>
                <li className="hover:text-primary"><a href="#">Contact</a></li>
            </ul>
            <div className="flex items-center justify-end w-2/4">
                <input type="text" placeholder="Search..." className="rounded w-2/4 h-12 border-solid border-2 border-gray50 pl-3 focus:border-primary" />
            </div>
        </div>
    )
}

export default SubHeader