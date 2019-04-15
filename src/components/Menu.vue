<template>
    <ul
        :class="menuClasses"
        :style="menuStyles"
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
            type: String,
            default: '16rem',
        },

        minified: {
            type: Boolean,
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

            return classes;
        },

        menuStyles () {
            let styles = {};

            styles['width'] = this.width;

            return styles;
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
