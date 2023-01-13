import { BsFillLightningChargeFill, BsPlusCircle } from 'react-icons/bs';
import { GiFlamer, GiStarShuriken } from 'react-icons/gi';

import SidebarIcon from './SidebarIcon';

const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-20 items-center m-0 flex flex-col bg-primary text-white shadow-lg'>
            <SidebarIcon icon={<GiFlamer size='35' />} />
            <SidebarIcon icon={<BsPlusCircle size='35' />} />
            <SidebarIcon icon={<BsFillLightningChargeFill size='35' />} />
            <SidebarIcon icon={<GiStarShuriken size='35' />} />
        </div>
    );
};

export default Sidebar;
