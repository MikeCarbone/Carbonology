import OutLink from './out-link';

const dev = (props) => (
    <div className={`dev-profile ${props.className}`}>
        <img className="dev-profile__img" src={props.imgSrc} alt="" draggable="false" />
        <h3 className="dev-profile__name">
            <OutLink className="c__text-link" href={props.outlink}>{props.name}</OutLink>
        </h3>
        <p className="dev-profile__role">{props.role}</p>
    </div>
);

export default dev;
