<template>
  <div>
    <form @submit.prevent="_handleSubmit" class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8" v-show="!success">
        <div>
          <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="formData.first_name" id="first_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
          </div>
        </div>
        <div>
          <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="formData.last_name" id="last_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-medium leading-5 text-gray-700">Organisation</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="formData.organisation" id="company" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="formData.email" id="email" type="email" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone_number" class="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <select aria-label="Country" class="form-select h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 transition ease-in-out duration-150">
                <option>US</option>
                <option>NZ</option>
                <option>AUS</option>
              </select>
            </div>
            <input v-model="formData.phone" id="phone_number" class="form-input py-3 px-4 block w-full pl-20 transition ease-in-out duration-150" placeholder="+1 (555) 987-6543" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <span class="w-full inline-flex rounded-md shadow-sm">
            <button
                type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition ease-in-out duration-150">
              Let's talk
            </button>
          </span>
        </div>
      </form>

      <div v-show="success">
        <div class="rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-green-800">
                Thank you for signing up for early access. Kerran will be in touch as soon as you reach the top of the waiting list.
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'exclusive-access-form',
  data() {
    return {
      formData: {
        first_name: '',
        last_name: '',
        organisation: '',
        phone: '',
        email: '',
      },
      success: false
    }
  },

  methods: {
    _handleSubmit() {
      if(this.formData.first_name == "") return;
      if(this.formData.last_name == "") return;
      if(this.formData.organisation == "") return;
      if(this.formData.email == "") return;

      axios.post('/api/campaign/subscribe', this.formData)
      .then( (res) => {
        console.log(res)
      })
      .catch( (err) => {
        console.log(err)
      })
    }
  }
}
</script>