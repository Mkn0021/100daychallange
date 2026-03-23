import Logo from "./logo";
import { Button } from "./button";

export const Navbar = () => (
    <nav className="w-full mt-10 flex items-center justify-between py-2.5 px-25">
        <Logo />
        <div className="flex items-center gap-10 text-[20px]">
            <a href="#" className="text-black hover:text-gray-700 transition-colors duration-300">About us</a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors duration-300">Services</a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors duration-300">Use Cases</a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors duration-300">Pricing</a>
            <Button variant="outline">Request a quote</Button>
        </div>
    </nav>
)