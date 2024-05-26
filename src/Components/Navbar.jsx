
import { assets } from './../assets/assets';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-12 h-[100px]'>
        <img src={assets.logo} alt="" />
        <img src={assets.profile_image} alt="" />
    </nav>
  )
}

export default Navbar