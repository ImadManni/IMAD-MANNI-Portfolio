/** 
 * @copyright 2024 Imad Manni
 * @license Apache 2.0
 */
import { ButtonPrimary } from "./Button";
import { VscDebugStart } from "react-icons/vsc";
import { SiTailwindcss } from "react-icons/si";

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'Linkr.ee', href: 'https://linktr.ee/imadmanni' },
  { label: 'GitHub', href: 'https://github.com/ImadManni' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/imadmanni/' },
  { label: 'Twitter X', href: 'https://x.com/HYDRAChoke_' },
  { label: 'Instagram', href: 'https://www.instagram.com/imad.manni/' },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb:-10">
            
            <h2 className="headline-1 mb-8 lg:max-[12ch]:">Let&apos;s work together today!</h2>
            <ButtonPrimary
              href="mailto:imadmanni@gmail.com"
              label="Start Project"
              icon={<VscDebugStart />}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 lg:pl-40">
            <div>
              <h3 className="sitemap-title">Sitemap</h3>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="socials-title">Socials</h3>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
            <a href=""
               className=""
               >
                <SiTailwindcss size={27}/>
               </a>
               <p className="tetx-zinc-500 text-sm">
                &copy; 2025 <span
                className="text-zinc-200 webkit-gradients-text-sky-400">Code With Imad</span>
               </p>
               </div>
      </div>
    </footer>
  );
};
export default Footer;