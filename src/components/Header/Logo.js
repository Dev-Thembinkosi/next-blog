import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-16 rounded-full overflow-hidden border border-solid border-darkdark:border-light mr-4">
            <Image src={profileImg} alt="log" className="w-full h-auto rounded-full"/>
        </div>
        <span className="font-bold text-xl dark:font-semibold text-gray-500">T /DevLogs </span>
    </Link>
  )
}

export default Logo