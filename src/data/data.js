import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import person1 from '../images/people-1.png'
import person2 from '../images/people-2.png'
import person3 from '../images/people-3.png'
import fluoride from '../images/fluoride.png';
import cavity from '../images/cavity.png';
import whitening from '../images/whitening.png';


export const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        Icon: AccessTimeIcon,
        background: '#1CC7C1'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        Icon: LocationOnIcon,
        background: '#3A4256'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        Icon: WifiCalling3Icon,
        background: '#1CC7C1'
    }
];







export const blogsData = [
    {
        name: 'Dr. Sinthia',
        date: '23 April 2019',
        img: person3,
        title: 'Check at least a doctor in a year for your teeth'
    },
    {
        name: 'Dr. Monika',
        date: '23 April 2019',
        img: person2,
        title: 'Two time brush in a day can keep you healthy'
    },
    {
        name: 'Dr. John',
        date: '23 April 2019',
        img: person1,
        title: 'The tooth cancer is taking a challenge'
    }
]



export const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]