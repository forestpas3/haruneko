﻿import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'toomics',
        title: 'Toomics (Global)'
    },
    container: {
        url: 'https://global.toomics.com/fr/webtoon/episode/toon/5048',
        id: '/fr/webtoon/episode/toon/5048',
        title: 'Chase Fortune [fr]'
    },
    child: {
        id: '/fr/webtoon/detail/code/100571/ep/1/toon/5048',
        title: '1'
    },
    entry: {
        index: 0,
        size: 82_091,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());