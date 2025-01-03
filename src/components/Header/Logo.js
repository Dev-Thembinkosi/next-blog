import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-12 md:w-16 rounded-full overflow-hidden  mr-2 md:mr-4">
            <Image src={profileImg} alt="log" className="w-full h-auto rounded-full" sizes="33vw" priority/>
        </div>
        <span className="font-bold text-lg md:text-xl dark:font-semibold text-gray-500"> T Dev </span>
    </Link>
  )
}

export default Logo