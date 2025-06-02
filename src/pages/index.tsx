import ZMSGraphic from "@/components/graphics/zms"

export default function Home() {
    return (
        <>
            <section className="flex flex-col space-y-4 justify-center min-h-screen bg-white p-36">
                <div className="flex justify-between items-center">
                    <div className="">
                        <h1 className="text-6xl font-semibold leading-tight">
                            <p>
                                Solusi Digital
                            </p>
                            <p>
                                <span
                                    className="text-blue-500 underline underline-offset-8 decoration-blue-200">Terintegrasi</span>
                            </p>
                        </h1>
                        <h2 className="text-xl text-gray-500 mt-4 max-w-md">
                            Untuk Meningkatkan Produktivitas dan Efisiensi Bisnis Anda
                        </h2>

                        <div className="mt-16">
                            <a href="/" className="font-medium bg-gradient-to-tl from-blue-500 to-blue-300 pl-6 pr-2 py-2 rounded-full text-white inline-flex items-center">Konsultasi<span
                                className="bg-white text-blue-500 text-sm px-3 py-1 rounded-full ml-4">Gratis</span></a>
                        </div>
                    </div>
                    <div className="flex items-center w-full max-w-lg aspect-square">
                        <ZMSGraphic className="w-lg h-auto" />
                    </div>
                </div>
            </section>

            <section className="flex items-center p-24 justify-between">
                <h3 className="text-4xl font-semibold text-blue-500">
                    <p>Zan</p>
                    <p className="pl-3">Micro</p>
                    <p className="pl-6">System</p>
                </h3>
                <h4 className="max-w-3xl text-justify text-lg">
                    Penyedia jasa pengembangan aplikasi berbasis web custom, membantu berbagai
                    sektor bisnis dalam mengoptimalkan sistem operasional mereka.
                </h4>
            </section>

            <section className="flex flex-col items-center p-24 space-y-16">
                <h5 className="text-4xl font-semibold text-blue-500">Kenapa Memilih ZMS?</h5>

                <div className="flex space-x-16">
                    <div className="space-y-2">
                        <p className="text-xl font-semibold">
                            Kemudahan
                        </p>
                        <p className="text-gray-500 text-justify">
                            Kami mengemas kompleksitas pencatatan dan penyusunan laporan keuangan menjadi sesuatu yang
                            sederhana
                            dan mudah, tanpa mengurangi kelengkapan, akurasi dan keamanan.
                            Kami membantu orang awam berbuat layaknya tenaga ahli, serta memungkinkan pekerjaan seorang ahli
                            menjadi sangat mudah. Anda tinggal membuat nota, dan semua laporan keuangan tersedia seketika.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xl font-semibold">
                            Fleksibilitas
                        </p>
                        <p className="text-gray-500 text-justify">
                            Sistem kami dirancang sedemikian rupa sehingga dapat diterapkan dalam berbagai jenis usaha
                            (dagang, jasa, persewaan dan manufaktur) serta berbagai bentuk usaha (perseorangan, persekutuan,
                            perseroan), juga berbagai skala bisnis (mikro, kecil, menengah, besar, multinasional).

                            Sistem kami juga dapat menangani data lintas cabang, lintas perusahaan dan lintas periode.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xl font-semibold">
                            Keandalan
                        </p>
                        <p className="text-gray-500 text-justify">
                            Aplikasi kami didukung oleh Object-Relational Database Management System (ORDBMS) yaitu sistem
                            database modern yang handal dengan skalabilitas serta konkurensi yang tinggi, sehingga menjamin
                            konsistensi dan integritas data secara handal dan terpercaya.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center p-16 space-y-16">
                <h5 className="text-4xl text-blue-500 font-semibold">Produk Kami</h5>

                <div className="flex space-x-16">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-16 py-8 flex flex-col">
                        <p className="text-xl font-semibold">
                            Fastbook Desktop
                        </p>
                        <ul className="text-gray-500 text-sm mt-6">
                            <li>
                                <p>
                                    Database client-server
                                </p>
                            </li>
                            <li>
                                <p>
                                    Interface berbasis desktop
                                </p>
                            </li>
                            <li>
                                <p>
                                    Berjalan di Windows dan Linux
                                </p>
                            </li>
                            <li>
                                <p>
                                    Multi user, cabang & perusahaan
                                </p>
                            </li>
                        </ul>
                        <a href="" className="mt-16 text-center bg-blue-500 py-2 text-sm rounded-full text-white">Detail</a>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-16 py-8 flex flex-col">
                        <p className="text-xl font-semibold">
                            Fastbook Online
                        </p>
                        <ul className="text-gray-500 text-sm mt-6">
                            <li>
                                <p>
                                    Server cloud atau local network
                                </p>
                            </li>
                            <li>
                                <p>
                                    Interface berbasis web
                                </p>
                            </li>
                            <li>
                                <p>
                                    Berjalan di semua platform dan perangkat
                                </p>
                            </li>
                            <li>
                                <p>
                                    Multi user, cabang & perusahaan
                                </p>
                            </li>
                        </ul>
                        <a href="" className="mt-16 text-center bg-blue-500 py-2 text-sm rounded-full text-white">Detail</a>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-16 py-8 flex flex-col">
                        <p className="text-xl font-semibold">
                            Zi-SMS Pro
                        </p>
                        <ul className="text-gray-500 text-sm mt-6">
                            <li>
                                <p>
                                    SMS Broadcast
                                </p>
                            </li>
                            <li>
                                <p>
                                    Aktivasi Kartu Perdana dan Voucher
                                </p>
                            </li>
                            <li>
                                <p>
                                    Unlimited Modem
                                </p>
                            </li>
                            <li>
                                <p>
                                    Support SMS Key
                                </p>
                            </li>
                        </ul>
                        <a href="" className="mt-16 text-center bg-blue-500 py-2 text-sm rounded-full text-white">Detail</a>
                    </div>
                </div>
            </section>
        </>
    )
}
