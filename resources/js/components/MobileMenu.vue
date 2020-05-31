<template>
    <div class="">
        <button
            @click="open = true"
            type="button"
            class="z-50 inline-flex items-center justify-center p-2 rounded-md text-yellow-300 hover:text-gray-800 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-100 focus:text-gray-800 transition duration-150 ease-in-out"
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
                    class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50"
                >
                    <div class="pt-5 pb-6 px-5 space-y-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center text-gray-800">
                                <svg
                                    class="fill-current  h-8"
                                    viewBox="0 0 96 89"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M65.0879 9.99999C57.3899 -3.33334 38.1449 -3.33333 30.4469 10L2.70933 58.0429C-4.98868 71.3762 4.63384 88.0429 20.0299 88.0429H20.7231L30.4469 71.2008C38.1449 57.8674 57.3899 57.8674 65.0879 71.2008L74.8117 88.0429H75.505C90.901 88.0429 100.523 71.3762 92.8255 58.0428L65.0879 9.99999Z"
                                    />
                                </svg>
                                <span
                                    class="ml-2 text-xl leading-6 font-medium transition ease-in-out duration-150"
                                >
                                    abbio
                                </span>
                            </div>
                            <div class="-mr-2">
                                <button
                                    aria-label="Close Menu"
                                    @click="open = false"
                                    type="button"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-yellow-300 hover:bg-gray-800 focus:outline-none focus:bg-gray-100 focus:text-gray-300 transition duration-150 ease-in-out"
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
                                class="text-base leading-6 font-medium text-gray-600 hover:text-gray-700 transition ease-in-out duration-150"
                            >
                                Features
                            </a>

                            <a
                                href="/about-us"
                                class="text-base leading-6 font-medium text-gray-600 hover:text-gray-700 transition ease-in-out duration-150"
                            >
                                About us
                            </a>

                            <a
                                href="/contact-us"
                                class="text-base leading-6 font-medium text-gray-600 hover:text-gray-700 transition ease-in-out duration-150"
                            >
                                Contact
                            </a>
                        </div>
                        <div class="space-y-6">
                            <span class="w-full flex rounded-md shadow-sm">
                                <a
                                    href="#"
                                    class="cursor-not-allowed w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-300 focus:outline-none focus:border-yellow-500 focus:shadow-outline-yellow active:bg-yellow-500 transition ease-in-out duration-150"
                                >
                                    Sign up
                                </a>
                            </span>
                            <p
                                class="text-center text-base leading-6 font-medium text-gray-500"
                            >
                                Existing customer?
                                <a
                                    href="#"
                                    class="cursor-not-allowed text-gray-500 hover:text-yellow-500 transition ease-in-out duration-150"
                                >
                                    Sign in
                                </a>
                            </p>
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
