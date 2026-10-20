import '../../../app/css/origins.scss'


const iconImages = require.context("../../../app/img/icons", true, /\.(png|webp)$/);

const normalizeIconName = (value) => {
    if (typeof value !== "string") return "";
    const fileName = value.split(/[\\/]/).pop();
    return fileName.replace(/\.(png|webp)$/i, "").toLowerCase();
}

const getIcon = (...names) => {
    const iconNames = names.map(normalizeIconName).filter(Boolean);
    const imagePath = iconImages.keys().find((path) =>
        iconNames.includes(normalizeIconName(path))
    );
    return imagePath ? iconImages(imagePath) : undefined;
}

const ImpactPanel = ({ data, onClick }) => {
    const icon = getIcon(data.icon, data.name);
    return (
        <div className="origin-banner" aria-label={`${data.name} Origin button`} id={data.name} role="button" onClick={onClick}>
            <div className="origin-banner-icon" style={{ backgroundImage: icon ? `url(${icon})` : undefined }}></div>
            <p className="origin-banner-title">{data.name}</p>
            {data.impact === null ? null : <div className={`origin-banner-impact impact-${data.impact}`}></div>}
        </div>)

}

export default ImpactPanel