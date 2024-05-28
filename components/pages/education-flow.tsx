import { FaUniversity } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { Badge } from "../ui/badge";


export default function Education() {
    return (
        <ol className="relative border-s  border-gray-700">
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-7 h-7  rounded-full -start-3 bg-cyan-700">
                <FaUniversity className="h-4 w-4"/>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Jain University</h3>
                <time className="block text-sm font-normal text-gray-500">October 2020 - July 2024</time>
                <p className="mb-4 text-base font-normal text-gray-400">I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering at Jain (Deemed-to-be University), Bengaluru</p>
                <Badge className="h-6 bg-cyan-600">CGPA 8.8</Badge>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-7 h-7  rounded-full -start-3 bg-cyan-700">
                <BiSolidSchool className="h-4 w-4"/>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white">Kathmandu Model Higher Secondary School</h3>
                <time className="block text-sm font-normal text-gray-500">March 2018 - April 2020</time>
                <p className="mb-4 text-base font-normal text-gray-400">I completed my Higher Studies in Mathematics and Computer Science at Kathmandu Model College, Bag bazar, Nepal</p>
                <Badge className="h-6 bg-cyan-600">GPA 3.39</Badge>
            </li>
            <li className="ms-6">
                <span className="absolute flex items-center justify-center w-7 h-7  rounded-full -start-3 bg-cyan-700">
                <FaSchoolFlag className="h-4 w-4"/>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white">Mother Teresa Public School</h3>
                <time className="block text-sm font-normal text-gray-500">2009 - 2018</time>
                <p className="mb-4 text-base font-normal text-gray-400">I completed my Primary Education at Mother Teresa Public School, Janakpur, Nepal</p>
                <Badge className="h-6 bg-cyan-600">GPA 3.70</Badge>
            </li>
        </ol>


    )
}
