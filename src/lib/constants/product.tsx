import { FiFeather, FiEye, FiSun } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
export const productitems = [
    {
        id: 1,
        image: "/boldo/productOne.svg",
        mainText:"We connect our customers with the best, and help them keep up-and stay open.",
        isBullet: true,
        options:[
            {icon:<IoIosCheckmarkCircle className='text-primary size-[36px]' />, text:"We connect our customers with the best."},
            {icon:<IoIosCheckmarkCircle className='text-primary size-[36px]'/>, text:"Advisor success customer launch party."},
            {icon:<IoIosCheckmarkCircle className='text-primary size-[36px]'/>, text:"Business-to-consumer long tail."}
        ]

    },
    {
        id:2,
        image: "/boldo/productTwo.svg",
        mainText:"We connect our customers with the best, and help them keep up-and stay open.",
        isBullet: false,
        options:[
            {icon:<FiFeather className="size-[28px]"/>, text:"We connect our customers with the best."},
            {icon:<FiEye className="size-[28px]"/>, text:"Advisor success customer launch party."},
            {icon:<FiSun className="size-[28px]"/>, text:"Business-to-consumer long tail."}
        ]

    },
]