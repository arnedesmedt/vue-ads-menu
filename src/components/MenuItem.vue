<template>
    <li
        class="relative"
        @mouseover="over"
        @mouseout="out"
    >
        <slot
            :item="item"
            name="link">
            <a
                :href="item.url"
                :title="title"
                :class="linkClasses"
                class="block px-6 py-4 flex no-underline text-black"
            >
                <div v-if="item.icon">
                    <slot
                        :item="item"
                        name="link-icon">
                        <i
                            :class="iconClasses"
                            class="fa"
                        />
                    </slot>
                </div>
                <div
                    v-if="item.name && !$parent.minified"
                    class="flex-grow ml-2"
                >
                    <slot
                        :item="item"
                        name="link-name">
                        {{ item.name }}
                    </slot>
                </div>
                <div
                    v-if="item.subitems && !$parent.minified"
                >
                    <slot name="link-end">
                        <i
                            class="fa fa-chevron-right"
                        />
                    </slot>
                </div>
            </a>
        </slot>
        <slot v-if="hover"/>
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
            default: '',
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