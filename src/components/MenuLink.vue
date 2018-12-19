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

    render (createElement) {
        console.log(this.$slots);
        return createElement(
            this.tag,
            {
                class: 'vue-ads-block vue-ads-flex',
                [this.nuxtLink ? 'to' : 'href']: this.url,
            },
            this.$slots.default,
        );
    },
};
</script>
