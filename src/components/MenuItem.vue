<template>
    <li
        class="relative"
        @mouseover="over"
        @mouseout="out"
    >
        <slot name="link" :item="item">
            <a
                :href="item.url"
                class="block px-6 py-4 flex no-underline text-black"
                :title="title"
                :class="linkClasses"
            >
                <div v-if="item.icon">
                    <slot name="link-icon" :item="item">
                        <i
                            class="fa"
                            :class="iconClasses"
                        ></i>
                    </slot>
                </div>
                <div
                    v-if="item.name && !$parent.minified"
                    class="flex-grow ml-2"
                >
                    <slot name="link-name" :item="item">
                        {{ item.name }}
                    </slot>
                </div>
                <div
                    v-if="item.subitems && !$parent.minified"
                >
                    <slot name="link-end">
                        <i
                            class="fa fa-chevron-right"
                        ></i>
                    </slot>
                </div>
            </a>
        </slot>
        <slot v-if="hover">

        </slot>
    </li>
</template>

<script>
export default {
    name: 'VueAdsMenuItem',

    props: {
        item: {
            type: Object,
            required: true,
        },

        linkClass: {
            type: String,
            required: false,
        },
    },

    data () {
        return {
            hover: false,
        };
    },

    computed: {
        linkClasses () {
            let classes = {};

            classes['bg-blue-dark'] = this.hover;

            if (this.linkClass) {
                this.linkClass.split(' ').forEach(className => {
                    classes[className] = true;
                });
            }

            return classes;
        },

        iconClasses () {
            let classes = {};

            classes['fa-' + this.item.icon] = Boolean(this.item.icon);

            return classes;
        },

        title () {
            return this.$parent.minified ? this.item.name : '';
        },
    },

    methods: {
        over () {
            this.hover = true;
        },

        out () {
            this.hover = false;
        },
    },
};
</script>

<style scoped>

</style>
