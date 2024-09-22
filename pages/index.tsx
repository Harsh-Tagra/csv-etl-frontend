import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div className="flex items-center justify-center w-full h-screen ">
<label className="text-white cursor-pointer hover:text-blue-600 border border-white h-44 rounded-lg w-3/4 p-3 border-dashed  text-center justify-center items-center flex hover:border-blue-600 ">

  <span >Click or drag file to this area to upload</span>
    <input type="file" className="hidden" />
    </label>

</div>
  );
}
