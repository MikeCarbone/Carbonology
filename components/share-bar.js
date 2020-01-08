import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton
  } from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TwitterIcon
} from "react-share";
import { useRouter } from 'next/router'
import globals from '../globals';

export default (props) => {
    const router = useRouter()
    const size = 40;
    const website = globals.website;
    const route = router.asPath;
    const url = website + route;
    return (
        <div className={props.className}>
            <EmailShareButton url={url}>
                <EmailIcon size={size} round />
            </EmailShareButton>
            <FacebookShareButton url={url}>
                <FacebookIcon size={size} round />
            </FacebookShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={size} round />
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon size={size} round />
            </TwitterShareButton>
            <RedditShareButton url={url}>
                <RedditIcon size={size} round bgStyle={{fill:'#FF4500'}} />
            </RedditShareButton>
        </div>
    )
}
