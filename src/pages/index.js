import { userState } from "@/utilities/recoil";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import celcius from "../../public/images/celsius.png";
import distance from "../../public/images/distance.png";
import mass from "../../public/images/mass.png";
import time from "../../public/images/time.png";
import Link from "next/link";

export default function Home() {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="p-4 min-h-screen max-w-screen-sm mx-auto">
      <h1 className="text-3xl font-bold text-center">Menu Konversi</h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-[40px]">
        <Link href="/">
          <Image
            src={celcius}
            alt="dummy image"
            className="w-32 mx-auto mb-1 object-contain"
          />
          <span className="block text-center">Suhu</span>
        </Link>
        <Link href="/">
          <Image
            src={distance}
            alt="dummy image"
            className="w-32 mx-auto mb-1 object-contain"
          />
          <span className="block text-center">Jarak</span>
        </Link>
        <Link href="/">
          <Image
            src={mass}
            alt="dummy image"
            className="w-32 mx-auto mb-1 object-contain"
          />
          <span className="block text-center">Massa</span>
        </Link>
        <Link href="/">
          <Image
            src={time}
            alt="dummy image"
            className="w-32 mx-auto mb-1 object-contain"
          />
          <span className="block text-center">Waktu</span>
        </Link>
      </div>
    </div>
  );
}
