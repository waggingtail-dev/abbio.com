
require('./bootstrap');

window.Vue = require('vue');

Vue.component(
    'exclusive-access-form', 
    require('./components/ExclusiveAccessForm').default
);

Vue.component(
    'mobile-menu', 
    require('./components/MobileMenu').default
);

const app = new Vue({
    el: '#app'
});
