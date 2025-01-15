import Image from 'next/image';
import HeaderWithDropdown from './HeaderWithDropdown';

const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4 shadow-md'>
      {/* Left Section: Logo */}
      <div className='flex items-center'>
        <Image
          src='/images/airbnb-logo.webp' // Replace with your logo
          alt='Airbnb Logo'
          width={100}
          height={50}
          className='object-contain'
        />
      </div>

      {/* Right Section: Login and Options */}
      <div className='flex items-center space-x-4'>
        <HeaderWithDropdown />
      </div>
    </header>
  );
};

export default Header;
