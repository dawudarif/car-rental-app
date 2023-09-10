import { BsSearch } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { FaRegFaceSmileWink } from 'react-icons/fa6';

const size = 30;

export const HIWdata = [
  {
    id: 1,
    head: 'Browse and select',
    desc: 'choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best',
    icon: <BsSearch size={size} />,
  },
  {
    id: 2,
    head: 'Book and confirm',
    desc: 'Book your desired car with just a few clicks and receive an instant confirmation via emailor SMS.',
    icon: <SlCalender size={size} />,
  },
  {
    id: 3,
    head: 'Enjoy your ride',
    desc: 'Pickup your car at the designated location and enjoy your premium driving experience with our top-quality service.',
    icon: <FaRegFaceSmileWink size={size} />,
  },
];
