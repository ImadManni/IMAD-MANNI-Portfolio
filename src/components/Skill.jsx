/** 
 * @copyright 2024 Imad Manni
 * @license Apache2.0
 */
import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
    {
        imgSrc: 'https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png',
        label: 'Figma',
        desc: 'Design tool',
    },
    {
        imgSrc: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
        label: 'HTML',
        desc: 'User Interface',
    },
    {
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        label: 'JavaScript',
        desc: 'Interaction',
    },
    {
        imgSrc: 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png',
        label: 'NodeJS',
        desc: 'Web Server',
    },
    {
        imgSrc: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        label: 'React',
        desc: 'Framework',
    },
    {
        imgSrc: 'https://img.icons8.com/color/200/tailwind_css.png',
        label: 'TailwindCSS',
        desc: 'User Interface',
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2">Essential Tools I Use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional,
                    high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, index) => (
                        <SkillCard
                            key={index}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
