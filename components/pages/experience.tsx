import { FaUniversity } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { Badge } from "../ui/badge";
import Image from "next/image";


export default function Experience() {
    return (
        <ol className="relative border-s  border-gray-700">
            <li className="mb-10 ms-6">
                <div className="absolute flex items-center justify-center w-7 h-7  rounded-full -start-3 bg-white">
                <Image 
                src="/KD.svg"
                width="10"
                height="10"
                alt="kyndyl"
                />
                </div>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Kyndryl</h3>
                <time className="block text-sm font-normal text-gray-500">May 2024 - Currently</time>
                <p className="mb-4 text-base font-normal text-gray-400">I am working as a Project Trainee at Kyndryl</p>
            </li>
        </ol>


    )
}
