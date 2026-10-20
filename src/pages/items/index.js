import './items.scss'

import itemJson from '../../app/data/items/index.json'
import itemJsonHandler from '../../middleware/data/item-json-handler';
import ImpactPanel from '../../components/custom/impact-panel';
import { Fragment, useState } from 'react';

const itemImages = require.context("../../app/img/icons/items/items", false, /\.webp$/);
const getItemImage = (name) => {
    const imagePath = `./${name}.webp`;
    return itemImages.keys().includes(imagePath) ? itemImages(imagePath) : itemImages("./blank.webp");
}

const ItemIcon = ({ data, onClick }) => {
    return (
        <div className="item-banner" aria-label={`${data.name} item button`} id={data.icon} role="button" onClick={onClick}>
            <div className="item-banner-icon" style={{ backgroundImage: `url(${getItemImage(data.icon)})` }}></div>
        </div>
    )
}


const ItemPage = () => {
    const itemData = itemJsonHandler(itemJson);
    console.log(itemData)
    const [activeData, setActiveData] = useState(null)

    return (
        <>
            <section
                id="item-view"
                className="stone-border"
            >
                {itemData.map((v) => {
                    return (
                        <ItemIcon data={v} key={v.icon} onClick={() => { setActiveData(v) }} />
                    )
                })}

            </section>
            <section id="origin-details" className="stone-border">
                <ImpactPanel id="current_origin" data={
                    {
                        name: activeData === null ? "Items" : activeData.name,
                        impact: null,
                        icon: activeData === null ? "" : `/icons/${activeData.icon}`
                    }}
                />
                <div className="main-origin-details">
                    {activeData === null ? (
                        <p>Select an item to see its details.</p>
                    ) : (
                        <div className="impact-view-content">
                            <section className="impact-overview" aria-labelledby="item-description-heading">
                                <div>
                                    <h2 id="item-description-heading">{activeData.name}</h2>
                                    <p>
                                        {activeData.description.split(/<br\s*\/?>\s*<\/br>/i).map((line, index) => (
                                            <Fragment key={index}>
                                                {index > 0 && <br />}
                                                {line}
                                            </Fragment>
                                        ))}
                                    </p>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </section>
            <section id="item-crafting-view" className="stone-border small">
                {Array.from({ length: 9 }, (_, index) => {
                    const symbol = activeData?.recipe_shape.recipe[index];
                    const itemName = symbol ? activeData.recipe_shape.recipe_map[symbol] : "";

                    return (
                        <img
                            className="item pixelated"
                            src={getItemImage(itemName)}
                            alt={itemName ? `${itemName} recipe ingredient` : "Empty crafting slot"}
                            key={index}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default ItemPage