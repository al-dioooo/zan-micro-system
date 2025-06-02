import { Clock, Mail, MapPin, Phone } from "@/components/icons/outline"

export default function Contact() {
    return (
        <>
            <section className="px-24 pt-36 pb-12">
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">Say Hi!</h1>
                    <h2 className="max-w-md w-full text-gray-700">Feel free to reach us.</h2>
                </div>
            </section>

            <section className="px-24 py-16 flex justify-between space-x-24">
                <div className="w-1/3 space-y-8">
                    <div className="flex items-start space-x-4">
                        {/* Location */}
                        <div className="bg-gradient-to-tl from-blue-500 to-blue-300 text-white rounded-2xl p-4">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg font-medium">Alamat Kantor</p>
                            <p className="text-gray-500">Perum Alamanda Regency Blok F1 No.3 Karang Satria Tambun Utara Bekasi Jawa Barat 17568</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        {/* Time */}
                        <div className="bg-gradient-to-tl from-blue-500 to-blue-300 text-white rounded-2xl p-4">
                            <Clock className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg font-medium">Jam Kantor</p>
                            <div>
                                <p className="text-gray-500">Senin - Jum'at: 08.00-17.00 WIB</p>
                                <p className="text-gray-500">Sabtu - Minggu: 08.00-11.00 WIB</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        {/* Phone */}
                        <div className="bg-gradient-to-tl from-blue-500 to-blue-300 text-white rounded-2xl p-4">
                            <Phone className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg font-medium">Telepon & WhatsApp</p>
                            <p className="text-gray-500">+62 852-1248-2977</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        {/* Email */}
                        <div className="bg-gradient-to-tl from-blue-500 to-blue-300 text-white rounded-2xl p-4">
                            <Mail className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg font-medium">Email</p>
                            <div>
                                <p className="text-gray-500">mail@zmsweb.com</p>
                                <p className="text-gray-500">ptzanms@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 w-2/3">
                    <p className="text-xl font-semibold">Lokasi di Maps</p>
                    <div className="overflow-hidden rounded-3xl border-4 border-gray-200">
                        <iframe src="https://maps.google.com/maps?q=Bekasi&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="300" allowFullScreen={false}></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}