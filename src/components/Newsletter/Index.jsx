
export default function Example() {
    return (
        <div className="bg-dark py-16 sm:py-24">
            <div className="relative sm:py-16">
                <div aria-hidden="true" className="hidden sm:block">
                    {/*  */}
                </div>
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="relative rounded-2xl px-6 py-10 bg-brand9 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                        {/*  */}
                        <div className="relative">
                            <div className="sm:text-center">
                                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                    Get notified when we&rsquo;re launching.
                                </h2>
                                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                                    tristique pellentesque.
                                </p>
                            </div>
                            <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                                <div className="min-w-0 flex-1">
                                    <label htmlFor="cta-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="cta-email"
                                        type="email"
                                        className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-4 rounded-md sm:mt-0 sm:ml-3">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md px-5 py-3 bg-brand1 text-base font-medium text-white shadow hover:bg-indigo-400 sm:px-10"
                                    >
                                        Notify me
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
