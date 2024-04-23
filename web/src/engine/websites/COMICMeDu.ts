import { Tags } from '../Tags';
import icon from './COMICMeDu.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Common from './decorators/Common';
import * as Comici from './decorators/ComiciViewer';

@Common.MangaCSS(/^{origin}\/series\/[^/]+(\/)?$/, Comici.queryMangaTitleURI)
@Common.MangasMultiPageCSS(Comici.mangaListPath, Comici.queryManga, 0, 1, 0, Comici.MangaExtractor)
@Comici.ChaptersSinglePageCSS()
@Comici.PagesSinglePageAJAX()
@Comici.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('comicmedu', `COMIC MeDu (こみっくめづ)`, 'https://comic-medu.com', Tags.Media.Manga, Tags.Language.Japanese, Tags.Source.Official);
    }

    public override get Icon() {
        return icon;
    }
}