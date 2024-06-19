import Link from "next/link"
export default function ServiceCard({title,description,className,icon}){
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-full py-4 rounded-lg">
            <i className={`${icon} text-5xl ${className} p-5 shadow-xl rounded-full`}></i>
            <div className="w-3/4">
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-base">{description}</p>
            </div>
        </div>

        )
}