<template>
    <ul
        :class="menuClasses"
        class="vue-ads-list-reset vue-ads-menu-transition"
    >
        <slot/>
    </ul>
</template>

<script>
import '../assets/css/tailwind.css';

export default {
    name: 'VueAdsMenu',

    props: {
        submenu: {
            type: Boolean,
            required: false,
            default: false,
        },

        width: {
            type: Number,
            required: false,
            default: 64,
        },

        minified: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    computed: {
        menuClasses () {
            let classes = {
                'vue-ads-absolute': this.submenu,
                'vue-ads-pin-t': this.submenu,
            };

            classes['vue-ads-ml-' + this.parentWidth] = true;
            classes['vue-ads-w-' + this.width] = true;

            return classes;
        },

        parentWidth () {
            if (!this.submenu) {
                return 0;
            }

            return this.parent.width;
        },

        parent () {
            let parent = this.$parent;

            while(parent.$options.name !== 'VueAdsMenu' && parent.$parent !== undefined) {
                parent = parent.$parent;
            }

            return parent;
        },
    },
};
</script>

<style scoped>
.vue-ads-menu-transition {
    transition: width 0.2s;
    -webkit-transition: width 0.2s;
    -moz-transition: width 0.2s;
    -o-transition: width 0.2s;
}
</style>
