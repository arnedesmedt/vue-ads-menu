<template>
    <div id="app">
        <vue-ads-layout :full-bar="false">
            <vue-ads-bar
                slot="toolbar"
                class="bg-red"
            >
                <vue-ads-hide-button
                    slot="first"
                    :hidden="hiddenLeft"
                    @toggle="hideLeft"/>
            </vue-ads-bar>
            <vue-ads-drawer
                slot="left-drawer"
                :minified="minifiedLeft"
                :hidden="hiddenLeft"
                class="bg-blue"
                @minify="minifyLeft"
                @hide="hideLeft"
            >
                <vue-ads-menu
                    slot-scope="props"
                    :width="props.width"
                    :minified="props.minified"
                >
                    <vue-ads-menu-item
                        v-for="(item, key) in items"
                        :key="key"
                        :item="item"
                        link-class="font-bold hover:bg-blue-dark"
                    >
                        <vue-ads-menu
                            v-if="item.subitems"
                            :submenu="true"
                            :width="64"
                            class="bg-blue"
                        >
                            <vue-ads-menu-item
                                v-for="(subitem, subitemKey) in item.subitems"
                                :key="subitemKey"
                                :item="subitem"
                            >
                                <vue-ads-menu
                                    v-if="subitem.subitems"
                                    :submenu="true"
                                    class="bg-blue"
                                >
                                    <vue-ads-menu-item
                                        v-for="(subsubitem, subsubitemKey) in subitem.subitems"
                                        :key="subsubitemKey"
                                        :item="subsubitem"
                                    />
                                </vue-ads-menu>
                            </vue-ads-menu-item>
                        </vue-ads-menu>
                    </vue-ads-menu-item>
                </vue-ads-menu>
            </vue-ads-drawer>
        </vue-ads-layout>
    </div>
</template>

<script>
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../node_modules/vue-ads-layout/dist/vue-ads-layout.css';

import { VueAdsLayout, VueAdsBar, VueAdsDrawer, VueAdsHideButton } from 'vue-ads-layout';
import VueAdsMenu from './components/Menu';
import VueAdsMenuItem from './components/MenuItem';

export default {
    name: 'App',

    components: {
        VueAdsLayout,
        VueAdsBar,
        VueAdsDrawer,
        VueAdsHideButton,
        VueAdsMenu,
        VueAdsMenuItem,
    },

    data () {
        return {
            items: [
                {
                    id: 'home',
                    name: 'Home',
                    icon: 'home',
                    url: '#',
                    subitems: [
                        {
                            id: 'subhome',
                            name: 'Subhome',
                            icon: 'check',
                            url: '#',
                        },
                        {
                            id: 'subhome',
                            name: 'Subhome 2',
                            icon: 'check',
                            url: '#',
                        },
                        {
                            id: 'subhome',
                            name: 'Subhome 3',
                            icon: 'check',
                            url: '#',
                        },
                        {
                            id: 'subhome',
                            name: 'Subhome 4',
                            icon: 'check',
                            url: '#',
                            subitems: [
                                {
                                    id: 'subsubhome',
                                    name: 'Sub sub home',
                                    icon: 'check',
                                    url: '#',
                                },
                                {
                                    id: 'subsubhome',
                                    name: 'Sub sub home 2',
                                    icon: 'check',
                                    url: '#',
                                },
                                {
                                    id: 'subsubhome',
                                    name: 'Sub sub home 3',
                                    icon: 'check',
                                    url: '#',
                                },
                                {
                                    id: 'subsubhome',
                                    name: 'Sub sub home 4',
                                    icon: 'check',
                                    url: '#',
                                },
                                {
                                    id: 'subsubhome',
                                    name: 'Sub sub home 5',
                                    icon: 'check',
                                    url: '#',
                                },
                            ],
                        },
                        {
                            id: 'subhome',
                            name: 'Subhome 5',
                            icon: 'check',
                            url: '#',
                        },
                        {
                            id: 'subhome',
                            name: 'Subhome 6',
                            icon: 'check',
                            url: '#',
                        },
                    ],
                },
                {
                    id: 'calendar',
                    name: 'Calendar',
                    icon: 'calendar',
                    url: '#',
                },
            ],

            minifiedLeft: false,
            hiddenLeft: false,
        };
    },

    methods: {
        minifyLeft (minified) {
            this.minifiedLeft = minified;
        },

        hideLeft (hidden) {
            this.hiddenLeft = hidden;
        },
    },
};
</script>

<style>

</style>
