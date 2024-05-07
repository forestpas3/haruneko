import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'tenmanga',
        title: 'TenManga'
    },
    container: {
        url: 'https://www.tenmanga.com/book/Yoroizuka-san+wo+Baburasetai.html',
        id: '/book/Yoroizuka-san+wo+Baburasetai.html',
        title: 'Yoroizuka-san wo Baburasetai',
    },
    child: {
        id: '/chapter/YoroizukasanwoBaburasetai20/8875086/',
        title: '20',
    },
    entry: {
        index: 0,
        size: 302_559,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());