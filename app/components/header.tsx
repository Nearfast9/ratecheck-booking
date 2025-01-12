import Image from "next/image";

export default function Header(){
    return(
        <>
        <div className="flex max-w-screen h-[100px] bg-[#36181A] items-center justify-center py-3">
            <Image
                    className="mt-10"
                    src="/img/logo.svg"
                    alt="onyx logo"
                    width={120}
                    height={0}
                    priority
                    />
        </div>

        
        </>
    )
}