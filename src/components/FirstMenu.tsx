import React from "react";

const FirstMenu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Coffee Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 via-stone-900/85 to-stone-950/90"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        <header className="pt-12 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-3">
              کافه دلنشین
            </h1>
            <p className="text-amber-200/90 text-lg md:text-xl font-light">
              طعم واقعی قهوه را با ما تجربه کنید
            </p>
          </div>
        </header>

        <main className="flex-grow px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-200/20 shadow-2xl">
              <input type="checkbox" id="hot-drinks" className="peer hidden" />
              <label
                htmlFor="hot-drinks"
                className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-amber-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-100">
                    نوشیدنی‌های گرم
                  </h2>
                </div>
                <svg
                  className="w-6 h-6 text-amber-300 transition-transform peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </label>
              <div className="max-h-0 peer-checked:max-h-[2000px] overflow-hidden transition-all duration-700">
                <div className="p-5 md:p-6 pt-0 space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            اسپرسو
                          </h3>
                          <span className="bg-amber-500/90 text-amber-950 text-xs font-bold px-2 py-1 rounded-full">
                            پرفروش
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          قهوه خالص و غلیظ با طعمی بی‌نظیر
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۴۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          کاپوچینو
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          ترکیبی از اسپرسو، شیر و فوم شیر
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۶۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          لاته
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          شیر بخار داده شده با اسپرسو
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۷۰,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            هات چاکلت
                          </h3>
                          <span className="bg-rose-500/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                            جدید
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          شکلات داغ با شیر و خامه
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۶۰,۰۰۰ تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-200/20 shadow-2xl">
              <input type="checkbox" id="cold-drinks" className="peer hidden" />
              <label
                htmlFor="cold-drinks"
                className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-100">
                    نوشیدنی‌های سرد
                  </h2>
                </div>
                <svg
                  className="w-6 h-6 text-amber-300 transition-transform peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </label>
              <div className="max-h-0 peer-checked:max-h-[2000px] overflow-hidden transition-all duration-700">
                <div className="p-5 md:p-6 pt-0 space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            آیس لاته
                          </h3>
                          <span className="bg-amber-500/90 text-amber-950 text-xs font-bold px-2 py-1 rounded-full">
                            پرفروش
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          لاته سرد با یخ و شیر سرد
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۷۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          فراپه موکا
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          قهوه یخ زده با شکلات و خامه
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۸۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          کلد برو
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          قهوه دم سرد با طعمی ملایم
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۸۰,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            موهیتو
                          </h3>
                          <span className="bg-rose-500/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                            جدید
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          نوشیدنی تازه با نعنا و لیمو
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۶۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-200/20 shadow-2xl">
              <input type="checkbox" id="desserts" className="peer hidden" />
              <label
                htmlFor="desserts"
                className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-100">
                    دسرها
                  </h2>
                </div>
                <svg
                  className="w-6 h-6 text-amber-300 transition-transform peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </label>
              <div className="max-h-0 peer-checked:max-h-[2000px] overflow-hidden transition-all duration-700">
                <div className="p-5 md:p-6 pt-0 space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            چیز کیک نیویورک
                          </h3>
                          <span className="bg-amber-500/90 text-amber-950 text-xs font-bold px-2 py-1 rounded-full">
                            پرفروش
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          چیز کیک کلاسیک با بافتی نرم
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۹۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          تارت شکلاتی
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          تارت شکلات تلخ با گاناش
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۸۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            تیرامیسو
                          </h3>
                          <span className="bg-rose-500/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                            جدید
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          دسر ایتالیایی با قهوه و ماسکارپونه
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۱۰۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          براونی
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          براونی شکلاتی با گردو
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۷۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-200/20 shadow-2xl">
              <input type="checkbox" id="snacks" className="peer hidden" />
              <label
                htmlFor="snacks"
                className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-100">
                    اسنک و تنقلات
                  </h2>
                </div>
                <svg
                  className="w-6 h-6 text-amber-300 transition-transform peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </label>
              <div className="max-h-0 peer-checked:max-h-[2000px] overflow-hidden transition-all duration-700">
                <div className="p-5 md:p-6 pt-0 space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          کروسان
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          کروسان تازه با کره فرانسوی
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۴۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            ساندویچ کلاب
                          </h3>
                          <span className="bg-amber-500/90 text-amber-950 text-xs font-bold px-2 py-1 rounded-full">
                            پرفروش
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          ساندویچ مرغ با سبزیجات
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۱۲۰,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-amber-50 mb-1">
                          کوکی شکلاتی
                        </h3>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          کوکی تازه با تکه‌های شکلات
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۳۵,۰۰۰ تومان
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-amber-200/10 hover:border-amber-200/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-amber-50">
                            سالاد سزار
                          </h3>
                          <span className="bg-rose-500/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                            جدید
                          </span>
                        </div>
                        <p className="text-amber-200/80 text-sm md:text-base">
                          سالاد سزار با مرغ گریل
                        </p>
                      </div>
                      <span className="text-amber-300 font-bold text-lg md:text-xl mr-4">
                        ۱۱۰,۰۰۰ تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="relative z-10 mt-auto">
        <svg
          className="w-full h-12 md:h-16"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#1c1917"
            fill-opacity="1"
          ></path>
        </svg>
        <div className="bg-stone-900 text-center py-8 px-4">
          <p className="text-amber-200 text-lg md:text-xl font-light mb-2">
            هر فنجان قهوه، داستانی از لحظات دلنشین
          </p>
          <p className="text-amber-300/60 text-sm">
            © ۱۴۰۳ کافه دلنشین - تمامی حقوق محفوظ است
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FirstMenu;
