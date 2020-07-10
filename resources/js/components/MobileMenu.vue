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
                                    <svg
                                        class="fill-current h-12"
                                        viewBox="0 0 333 259"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M94.9956 177.045C88.172 177.11 81.5754 174.597 76.5242 170.01C73.712 167.393 71.444 164.248 69.8501 160.753C68.2562 157.258 67.3678 153.483 67.2357 149.645L63.7174 57.1374C63.331 48.9559 65.9961 40.9221 71.1962 34.5927C76.3963 28.2633 83.7613 24.0889 91.8643 22.8781L223.521 1.24614C227.749 0.693799 232.045 1.05143 236.123 2.29505C240.201 3.53867 243.966 5.63954 247.165 8.45679C250.517 11.4844 253.191 15.1872 255.011 19.3216C256.83 23.4561 257.753 27.9287 257.72 32.4454V131.565C257.87 139.91 254.824 147.996 249.205 154.169C243.587 160.341 235.821 164.134 227.497 164.77L96.5789 176.869L94.9956 177.045ZM227.532 18.5869C227.04 18.5524 226.547 18.5524 226.055 18.5869L94.4678 40.1133C90.6615 40.694 87.2093 42.6751 84.7881 45.6682C82.3669 48.6614 81.1513 52.4507 81.3795 56.2933L84.8979 148.836C84.9193 150.334 85.2418 151.813 85.8462 153.185C86.4506 154.557 87.3246 155.793 88.4163 156.82C89.3301 157.683 90.4089 158.352 91.5879 158.787C92.7669 159.222 94.0218 159.415 95.2771 159.353L226.477 147.112C230.333 146.764 233.909 144.95 236.469 142.045C239.028 139.139 240.375 135.364 240.234 131.495V32.4454C240.266 30.4149 239.858 28.4016 239.038 26.5437C238.218 24.6857 237.006 23.0273 235.484 21.6822C233.309 19.6996 230.475 18.5964 227.532 18.5869Z"

                                        />
                                        <path
                                            d="M138.834 116.722C143.925 116.722 148.053 111.683 148.053 105.466C148.053 99.2501 143.925 94.2108 138.834 94.2108C133.743 94.2108 129.616 99.2501 129.616 105.466C129.616 111.683 133.743 116.722 138.834 116.722Z"

                                        />
                                        <path
                                            d="M180.316 116.722C186.534 116.722 191.575 106.061 191.575 92.9093C191.575 79.7579 186.534 69.0966 180.316 69.0966C174.098 69.0966 169.057 79.7579 169.057 92.9093C169.057 106.061 174.098 116.722 180.316 116.722Z"

                                        />
                                        <path
                                            d="M139.046 129.279C145.264 129.279 150.304 118.618 150.304 105.466C150.304 92.315 145.264 81.6537 139.046 81.6537C132.827 81.6537 127.787 92.315 127.787 105.466C127.787 118.618 132.827 129.279 139.046 129.279Z"

                                        />
                                        <path
                                            d="M177.431 217.636C155.8 219.001 134.105 216.305 113.467 209.687C111.18 208.948 108.788 208.174 106.43 207.33C120.538 221.707 139.397 230.46 159.487 231.952C160.502 232.086 161.525 232.156 162.548 232.163C187.177 232.163 179.049 245.775 169.761 256.503C169.586 256.711 169.478 256.969 169.453 257.24C169.427 257.511 169.486 257.783 169.62 258.021C169.754 258.258 169.957 258.448 170.202 258.567C170.448 258.686 170.723 258.726 170.992 258.684C207.865 251.192 227.286 224.53 236.821 202.722C218.076 211.205 197.961 216.257 177.431 217.636Z"

                                        />
                                        <path
                                            d="M244.174 158.403C239.238 159.853 234.148 160.714 229.01 160.971L97.4936 169.835H94.9956C92.5377 169.825 90.0824 169.672 87.6422 169.377C87.8288 173.863 88.9177 178.266 90.8439 182.321C101.383 186.48 112.325 189.533 123.494 191.431C141.899 195.113 160.7 196.414 179.436 195.3C201.413 193.934 223.03 189.065 243.47 180.879C244.104 178.839 244.526 177.362 244.772 176.025C244.804 175.886 244.804 175.742 244.772 175.603C246.275 169.934 246.055 163.946 244.139 158.403H244.174Z"

                                        />
                                        <path
                                            d="M257.016 101.949C265.882 92.6278 303.071 42.9623 314.963 70.9959C320.487 84.0805 317.426 102.441 312.219 115.139C307.329 127.063 288.892 131.354 277.352 132.093C275.774 132.177 274.264 132.762 273.042 133.764C271.82 134.765 270.949 136.13 270.556 137.661C270.164 139.191 270.27 140.807 270.859 142.272C271.449 143.738 272.491 144.978 273.834 145.811C285.374 152.423 285.374 167.794 277 177.186C268.627 186.577 253.005 189.18 246.602 176.869C242.239 168.463 229.502 175.884 233.9 184.291C244.667 205.008 272.919 203.214 287.239 187.562C301.558 171.91 300.996 144.474 281.082 133.043L277.352 146.796C291.426 145.881 307.364 141.449 318.165 131.741C328.967 122.033 331.605 103.602 332.239 89.7787C332.802 76.6589 330.268 60.6899 318.834 52.5296C306.449 43.7009 290.018 49.7508 278.9 57.876C266.551 66.8805 257.122 80.4576 246.672 91.5022C240.128 98.537 250.542 108.808 257.227 102.054L257.016 101.949Z"

                                        />
                                        <path
                                            d="M75.328 78.3825C61.9582 66.8103 46.3015 48.0626 26.7042 49.7509C10.5549 51.0875 1.97015 64.8054 0.386887 79.6839C-1.06887 96.393 2.69249 113.142 11.1531 127.626C19.7379 141.695 37.6463 145.705 52.9512 145.213L49.2569 131.53C30.9614 144.756 38.1389 173.739 53.1975 186.929C69.6634 201.421 98.9362 202.546 108.471 179.613C111.989 170.89 97.9158 167.056 94.3975 175.709C92.0754 181.301 84.0535 183.412 78.6 183.025C72.4494 182.378 66.7092 179.633 62.3452 175.251C56.2233 169.342 47.7088 150.876 56.8214 144.263C62.31 140.289 61.0082 130.194 53.0919 130.545C43.2053 130.862 29.8708 129.455 24.0303 120.239C17.7555 109.479 14.5549 97.2027 14.777 84.7489C14.777 75.463 18.2953 63.6446 29.9763 64.3833C37.013 64.9109 43.135 69.7649 48.2014 74.1968C53.2679 78.6287 59.3194 83.9399 64.9136 88.7588C71.9503 94.9494 82.5054 84.5731 75.4687 78.2066L75.328 78.3825Z"

                                        />
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
                        <div class="space-y-6">
                            <span class="w-full flex rounded-md shadow-sm">
                                <a
                                    href="#"
                                    class="cursor-not-allowed w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-secondary-900 bg-primary-500 hover:bg-primary-300 focus:outline-none focus:border-primary-500 focus:shadow-outline-yellow active:bg-primary-500 transition ease-in-out duration-150"
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
                                    class="cursor-not-allowed text-gray-500 hover:text-primary-500 transition ease-in-out duration-150"
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
