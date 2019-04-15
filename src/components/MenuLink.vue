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

            return null;
        },
    },

    render (createElement) {
        let attrs = {};

        if (this.urlAttribute) {
            attrs[this.urlAttribute] = this.url;
        }

        return createElement(
            this.tag,
            {
                class: 'vue-ads-block vue-ads-flex',
                attrs,
            },
            this.$slots.default,
        );
    },
};
</script>
