<template>
    <ul
        :class="menuClasses"
        class="list-reset transition"
    >
        <slot/>
    </ul>
</template>

<script>
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

            return this.$parent.$parent.width;
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
