import { Link } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className="flex flex-col pt-16 border-r-4 h-screen w-auto md:w-60">
            <h2 className="text-xl items-center mb-2 text-gray-500 text-center mt-4 font-bold">Side Nav</h2>
            <div className="font-bold">
                <ul className="pt-2 pb-4 space-y-3 text-lg">
                    <li className="border m-2">
                        <Link
                            to="/"
                            className="items-center p-2 font-bold">
                            <span>Contacts</span>
                        </Link>
                    </li>
                    <li className="border m-2">
                        <Link
                            to="/dashboard"
                            className="items-center p-2 font-bold">
                            <span>Charts And Maps</span>
                        </Link>
                    </li>
                    <li className="border m-2">
                        <a
                            href="https://github.com/vishal-bot/ContactManagement" target="_blank"
                            className="items-center p-2 font-bold">
                            <span>GitHub Repo</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* </div>
            </div> */}

        </div>
    );
}