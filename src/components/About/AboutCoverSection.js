import Image from "next/image";
import profileCharater from "@/public/character.png";

export const AboutCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="w-/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image
          src={profileCharater}
          alt="profile image"
          className="w-full h-full object-contain object-center"
        ></Image>
      </div>
    </section>
  );
};
