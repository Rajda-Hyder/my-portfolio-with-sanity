import Image from "next/image";
import logo from "../image/logo1.2.jpg";


export default function Images(){
    return (
        <div className="bg-green-100">
            <Image src={logo} alt="Rajda"
        width={300}
        height={300} className="w-10 h-10"/>

    </div>
    )
}