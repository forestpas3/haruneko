import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'younganimal',
        title: 'Young Animal'
    },
    container: {
        url: 'https://younganimal.com/series/8f24a114d125e',
        id: '/series/8f24a114d125e',
        title: '拷問バイトくんの日常'
    },
    child: {
        id: '/episodes/c44e40bd07ed7/',
        title: '第1話'
    },
    entry: {
        index: 0,
        size: 933_886,
        type: 'image/png'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());