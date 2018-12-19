<script>
export default {
    name: "VueAdsMenuLink",

    props: {
        url: {
            type: String,
            default: '#',
        },

        tag: {
            type: String,
            default: 'a',
            validator: (tag) => {
                return ['a', 'nuxt-link', 'router-link'].includes(tag);
            },
        },
    },

    computed: {
        urlAttribute () {
            switch (this.tag) {
            case 'a':
                return 'href';
            case 'nuxt-link': case 'router-link':
                return 'to';
            }
        },
    },

    render (createElement) {
        return createElement(
            this.tag,
            {
                class: 'vue-ads-block vue-ads-flex',
                attrs: {
                    [this.urlAttribute]: this.url,
                },
            },
            this.$slots.default,
        );
    },
};
</script>
