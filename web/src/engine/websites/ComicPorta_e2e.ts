import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'comicporta',
        title: 'COMICポルタ (Comic Porta)'
    },
    container: {
        url: 'https://comic-porta.com/series/124/',
        id: '/series/124/',
        title: 'モスのいる日常'
    },
    child: {
        id: '/p_data/moth001/',
        title: '第１話「モスとの出会い」'
    },
    entry: {
        index: 0,
        size: 1_320_774,
        type: 'image/png'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());