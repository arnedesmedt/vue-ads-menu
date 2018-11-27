<template>
    <ul
        :class="menuClasses"
        class="list-reset transition"
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
                absolute: this.submenu,
                'pin-t': this.submenu,
            };

            classes['ml-' + this.parentWidth] = true;
            classes['w-' + this.width] = true;

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
.transition {
    transition: width 0.2s;
    -webkit-transition: width 0.2s;
    -moz-transition: width 0.2s;
    -o-transition: width 0.2s;
}
</style>
