// Inside a utility file, for example, utils/gradeUtils.ts

export function handleUrlService(urlExtracted: string): string {
    let item: string;

    switch (urlExtracted) {
        case ( 'digital-branding'):
            item = 'Content Marketing';
            break;
        case ('web-development'):
            item = 'Website development';
            break;
        case ( 'seo'):
            item = 'Search Engine Optimisation';
            break;
        case ('online-advertising'):
            item = 'Ads Marketing';
            break;
        case ('digital-marketing'):
            item = 'Digital Marketing';
            break;
        case ('graphic-designing'):
            item = 'Graphic Designing';
            break;
        default:
            item = '';
    }

    return item;
}
