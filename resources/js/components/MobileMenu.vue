<template>
    <div class="">
        <button
            @click="open = true"
            type="button"
            class="z-50 inline-flex items-center justify-center p-2 rounded-md text-secondary-900 hover:text-gray-800 hover:bg-primary-300 focus:outline-none focus:bg-primary-100 focus:text-gray-800 transition duration-150 ease-in-out"
            aria-label="Open Menu"
        >
            <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>

        <!--
    Mobile menu, show/hide based on mobile menu state.
  -->
        <div
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            v-show="open"
        >
            <div class="rounded-lg shadow-lg">
                <div
                    class="rounded-lg shadow-xs bg-secondary-900 divide-y-2 divide-gray-50"
                >
                    <div class="pt-5 pb-6 px-5 space-y-6">
                        <div class="flex items-center justify-between">
                            <div class="">
                                <a
                                    href="/"
                                    class="flex items-center text-primary-500"
                                >

                                    <svg class="fill-current h-12" viewBox="0 0 46 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.5398 63.7584H45.9998C45.9593 53.3607 44.296 43.0331 41.0698 33.1484C35.3016 37.8836 30.0311 43.1944 25.3398 48.9984C28.8501 53.6276 31.9296 58.5682 34.5398 63.7584V63.7584Z" fill="#FAC500"/>
                                        <path d="M37.6797 24.1289C38.5497 26.1289 39.3997 28.2889 40.1797 30.5189C39.3997 28.2889 38.5497 26.1789 37.6797 24.1289Z" fill="#FFEF00"/>
                                        <path d="M34.7891 17.8398C35.5291 19.3198 36.2657 20.8665 36.9991 22.4798C36.2591 20.8732 35.5224 19.3265 34.7891 17.8398Z" fill="#FFEF00"/>
                                        <path d="M28.4 6.75C26.8711 4.40115 25.2014 2.14702 23.4 0C23.4 0 0 23.61 0 63.76C2.82522 42.1155 12.8246 22.0429 28.4 6.75V6.75Z" fill="#FFEF00"/>
                                        <path d="M22.58 47.34C27.714 41.0136 33.6276 35.3621 40.18 30.52C38.6608 26.2402 36.8774 22.0588 34.84 18C18.9398 29.4547 6.811 45.3851 0 63.76H11.45C14.4992 57.8667 18.2352 52.355 22.58 47.34V47.34Z" fill="#FAC500"/>
                                    </svg>

                                    <span
                                        class="ml-2 text-3xl leading-6 font-medium transition ease-in-out duration-150"
                                    >
                                        abbio
                                    </span>
                                </a>
                            </div>
                            <div class="-mr-2">
                                <button
                                    aria-label="Close Menu"
                                    @click="open = false"
                                    type="button"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-primary-500 hover:text-primary-300 hover:bg-gray-800 focus:outline-none focus:bg-primary-500 focus:text-gray-300 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="py-6 px-5 space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <a
                                href="/features"
                                class="text-base leading-6 font-medium text-gray-300 hover:text-gray-500 transition ease-in-out duration-150"
                            >
                                Features
                            </a>

                            <a
                                href="/about-us"
                                class="text-base leading-6 font-medium text-gray-300 hover:text-gray-500 transition ease-in-out duration-150"
                            >
                                About us
                            </a>

                            <a
                                href="/contact-us"
                                class="text-base leading-6 font-medium text-gray-300 hover:text-gray-500 transition ease-in-out duration-150"
                            >
                                Contact
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false
        };
    }
};
</script>
