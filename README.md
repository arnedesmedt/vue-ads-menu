# vue-ads-menu

A simple vertical menu with submenu's on the right.

## Installation

You can install the package via npm or yarn.

#### NPM

```npm install vue-ads-menu --save```

#### YARN

```yarn add vue-ads-menu```

## Usage

Here you find an example on how to use this component. We use the [VueAdsLayout](https://github.com/arnedesmedt/vue-ads-layout)
Drawer as a container for the VueAdsMenu.

```vue
<template>
    <div id="app">
        <vue-ads-layout :full-bar="false">
            <vue-ads-bar
                slot="toolbar"
                class="bg-red"
            >
                <vue-ads-hide-button slot="first" :hidden="hiddenLeft" @toggle="hideLeft"></vue-ads-hide-button>
            </vue-ads-bar>
            <vue-ads-drawer
                slot="left-drawer"
                :minified="minifiedLeft"
                :hidden="hiddenLeft"
                @minify="minifyLeft"
                @hide="hideLeft"
                class="bg-blue"
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
                        :link-class="'font-bold'"
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
                                    >

                                    </vue-ads-menu-item>
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
import '../node_modules/vue-ads-layout/dist/vue-ads-layout.css';
import '../node_modules/vue-ads-layout/dist/vue-ads-menu.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


import { VueAdsLayout, VueAdsBar, VueAdsDrawer, VueAdsHideButton } from 'vue-ads-layout';
import { VueAdsMenu, VueAdsMenuItem } from 'vue-ads-menu';

export default {
    name: 'app',

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
                            ],
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
```

### Components

#### VueAdsMenu

##### Properties

- `submenu`: *(type: boolean, default: false)* Indicates if the component is a submenu.
- `width`: *(type: number, default: 64)* A [Tailwind width](https://tailwindcss.com/docs/width) indication of the current menu.
- `minified`: *(type: boolean, default: false)* Indicates if the menu is minified. It will only show the icons of the menu items, when the menu is minified.

##### Templates

###### default

Place the VueAdsMenuItem components in the default template.

#### VueAdsMenuItem

##### Properties

- `item`: *(type: object, required)* The object that contains all the menu item info.
    - `id`: *(type: string)* The menu item identifier.
    - `name`: *(type: string)* The menu item title.
    - `tag`: *(type: string, default: `a`)* The html tag of the link (only `a`, `nuxt-link` and `router-link` are allowed).
    - `url`: *(type: string)* The url where the menu item links to.
    - `icon`: *(type: string)* The font-awesome class without the prefix `fa-`.
    Be sure to import the font awesome library. It's a dependency of this library, so you don't need to install it anymore.
    - `subitems`: *(type: array)* An array of item objects to provide a submenu.
    
##### Templates

The VueAdsMenuItem has 4 templates. One default template to override the submenu. 
And 3 named templates to override the link:

```vue
<template name="link-icon"></template> // overrides the icon
<template name="link-name"></template> // overrides the name
<template name="link-end"></template> // overrrides the arrow on the end if their are any subitems.
```

## Testing

Needs to be done. You can run all the test (currently zero) by executing the following command.

```
npm run test:unit
```

## Changelog

Read the [CHANGELOG](CHANGELOG.md) file to check what has changed.

## Issues

If you have any issues (bugs, features, ...) on the current project, add them [here](https://gitlab.com/arnedesmedt/vue-ads-menu/issues/new).

## Contributing

Do you like to contribute to this project? Please, read the [CONTRIBUTING](CONTRIBUTING.md) file.

## Social

[1]: http://www.twitter.com/arnesmedt
[1.1]: http://i.imgur.com/wWzX9uB.png (@ArneSmedt)
 - Follow me on [![alt text][1.1]][1]
 
## Donate

Want to make a donation? 
That would be highly appreciated!

Make a donation via [PayPal](https://www.paypal.me/arnedesmedt).
