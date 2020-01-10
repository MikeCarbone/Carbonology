import { NextSeo } from 'next-seo';
import getURL from '../utils/_get-url';

export default (props) => {
    const pageURL = getURL();

    // pageTitle
    // description
    // img
    return(
        <NextSeo
            title={`${props.pageTitle} | Carbonology`}
            description={props.description}
            canonical={pageURL}
            openGraph={{
                url: pageURL,
                title: `${props.pageTitle} | Carbonology`,
                description: props.description,
                images: [
                {
                    url: props.img,
                    width: 1053,
                    height: 700,
                    alt: `${props.pageTitle}, Carbonology`,
                }
                ],
                site_name: props.pageTitle,
            }}
            twitter={{
                handle: '@carbnology',
                site: '@site',
                cardType: 'summary_large_image',
                image: props.img
            }}
        />
    )
}