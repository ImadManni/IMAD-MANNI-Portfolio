/**
 * @copyright 2024 Imad Manni
 * @license Apache2.0
 */

import PropTypes from 'prop-types';

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return(
        <div className={'flex items-center gap-3 ring-1 ring-inset ring rounded-2xl p-3 transition-colors group hover:bg-zinc-800 '+classes}>
            <figure className="bg-zinc-700/50 rounded-lg over-flow-hidden">
                <img
                src={imgSrc}
                width={32}
                height={32}
                alt={label}
                />
            </figure>
            <div>
                <h3>{label}</h3>
                <p className="text-zinc-400 text-sm">
                    {desc}
                </p>
            </div>
        </div>
    )
}

SkillCard.prototype= {
    imgSrc:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    classes:PropTypes.string,
}
export default SkillCard