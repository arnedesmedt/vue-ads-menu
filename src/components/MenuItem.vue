<template>
    <li
        class="vue-ads-relative"
        @mouseover.prevent="over"
        @mouseout.prevent="out"
    >
        <slot
            :item="item"
            name="link">
            <a
                :href="item.url"
                :class="linkClasses"
                class="vue-ads-block vue-ads-flex"
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
                    v-if="item.name && !parent.minified"
                    :class="nameClasses"
                    class="vue-ads-flex-grow"
                >
                    <slot
                        :item="item"
                        name="link-name"
                    >
                        {{ item.name }}
                    </slot>
                </div>
                <div
                    v-if="item.subitems && !parent.minified"
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

            if (this.linkClass) {
                this.linkClass.split(' ').forEach(className => {
                    let addClass = true;
                    if (className.includes('hover:')) {
                        className = className.replace(/hover:/, '');
                        addClass = this.hover;
                    }
                    classes[className] = addClass;
                });
            }

            return classes;
        },

        iconClasses () {
            let classes = {};

            classes['fa-' + this.item.icon] = Boolean(this.item.icon);

            return classes;
        },

        nameClasses () {
            return {
                'vue-ads-ml-2': Boolean(this.item.icon),
            };
        },

        parent () {
            let parent = this.$parent;

            while(parent.$options.name !== 'VueAdsMenu' && parent.$parent !== undefined) {
                parent = parent.$parent;
            }

            return parent;
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
