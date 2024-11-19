
export function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex justify-center bg-zinc-800 font-poppins">
        <p className="text-gray-100">Created by Tomorow&apos;s Media House &copy; {currentYear}</p>
        </div>
    )
}