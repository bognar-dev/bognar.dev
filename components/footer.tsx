import Link from "next/link";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Component() {

    return (
        <footer className=" w-full bg-primary-50 text-text-800 py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div>
                    <p className="text-sm">© Niklas Bognar. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">

                    {Object.entries(siteConfig.links).map(([key, value]) => (
                        <Link key={key} className="text-gray-300 hover:text-white" href={value}>
                           <Icons.gitHub className="h-6 w-6" />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

