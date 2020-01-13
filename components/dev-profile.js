const dev = (props) => (
    <div className={`dev-profile ${props.className}`}>
        <img className="dev-profile__img" src={props.imgSrc} alt="" draggable="false" />
        <h3 className="dev-profile__name">
            <a className="c__text-link" href={props.outlink} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </h3>
        <p className="dev-profile__role">{props.role}</p>
    </div>
);

export default dev;
