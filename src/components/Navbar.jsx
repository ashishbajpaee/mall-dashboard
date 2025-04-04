

import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
 
  const tooltipId = title.replace(/\s+/g, '-').toLowerCase();
  return (
    <div data-tooltip-id={tooltipId} data-tooltip-content={title} className="inline-block">
      <button
        type="button"
        onClick={customFunc}
        // style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
      <Tooltip id={tooltipId} place="bottom" />
    </div>
  );
};

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 mt-4 md:ml-6 md:mr-6 relative bg-blue-500 text-white rounded-md shadow-md">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
      
     
        <div
          data-tooltip-id="profile-tooltip"
          data-tooltip-content="Profile"
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <p>
            <span className="text-white-800 text-14">Hi,</span>{' '}
            <span className="text-white-800 font-bold ml-1 text-14">Pankaj</span>
          </p>
          <MdKeyboardArrowDown className="text-white-800 text-14" />
          <Tooltip id="profile-tooltip" place="bottom" />
        </div>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
