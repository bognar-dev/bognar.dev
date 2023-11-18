import Card from "./card";
import { SubmitButton } from "./submit-button";


export default function Newsletter({className}:{className?:string}) {

    return (




        <div className={className}>
            <Card className="px-3">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Newsletter</h2>
                        <p className="mt-2 text-grey-400">Subscribe to my newsletter for updates.</p>
                    </div>
                    <div className="flex-1 max-w-md">
                        <div className="flex items-center justify-center justify-items-center">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 mr-2 leading-tight rounded-sm text-secondary-700 border border-accent-300 focus:outline-none focus:border-accent-500"
                            />
                            <SubmitButton className=" bg-accent-500 text-white px-4 py-2 rounded-md hover:bg-accent-600 focus:outline-none focus:shadow-outline-blue active:bg-accent-800">
                                Subscribe
                            </SubmitButton>
                        </div>
                        <p className="my-2 text-sm text-gray-400">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </Card>
        </div>


    )
}