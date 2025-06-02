export default function Footer() {
    return (
        <footer className="bg-gray-100 px-24 pt-16 pb-36 relative overflow-hidden">
            <div className="flex space-x-8 justify-between">
                <div className="flex flex-col space-y-24">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="uppercase flex flex-col">
                                <div className="text-xl tracking-[1.9rem] font-medium text-blue-500">Zan</div>
                                <div className="text-xs tracking-widest font-medium">Micro System</div>
                            </div>
                            <p className="text-gray-500 text-sm max-w-md">
                                Penyedia jasa pengembangan aplikasi berbasis web custom, membantu berbagai
                                sektor bisnis dalam mengoptimalkan sistem operasional mereka.
                            </p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                <path d="M16.5 7.5v.01" />
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path
                                    d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500">
                        <p>ZMS is a Trademark of PT. Zan Micro System</p>
                        <p>Copyright &copy; 2025 Zan Micro System. All rights reserved.</p>
                    </div>
                </div>

                <div className="space-y-8 text-sm">
                    <p className="font-medium uppercase tracking-widest text-blue-500">Links</p>
                    <ul className="space-y-4">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Product</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="absolute inset-0 w-full flex justify-center items-end translate-y-18 whitespace-nowrap">
                <p className="text-[8rem] font-black text-gray-200">Zan Micro System</p>
            </div>
        </footer>
    )
}