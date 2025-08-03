import { Typography } from "@material-tailwind/react";
import { Link } from "react-scroll";

const Footer = () => {
  const footerNavItems = [
    { name: "Home", link: "hero", offset: -300 },
    { name: "About Us", link: "about-me", offset: -100 },
    { name: "Projects", link: "projects", offset: 100 },
    { name: "Services", link: "skills", offset: -100 },
    { name: "Contact Me", link: "contact-me", offset: -100 },
  ];

  return (
    <footer className="w-full px-10 pt-24 bg-neutralSilver">
      <div className="mx-auto max-w-[1800px]">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-neutralSilver text-center md:justify-between">
          
          {/* Company name + email */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              className="md:text-2xl text-lg font-bold tracking-widest text-neutralDGrey cursor-pointer"
              to="hero"
              smooth={true}
              duration={800}
              spy={true}
            >
              Orbivault Technology
            </Link>
            <Typography
              as="p"
              color="blue-gray"
              className="text-sm font-normal text-neutralDGrey mt-1"
            >
              info@orbivault.com
            </Typography>
          </div>

          {/* Navigation links */}
          <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
            {footerNavItems.map((item, index) => (
              <li key={index}>
                <Typography
                  as="div"
                  color="blue-gray"
                  className="font-normal cursor-pointer transition-colors hover:text-greenPrimary focus:text-greenPrimary"
                >
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={item.offset}
                  >
                    {item.name}
                  </Link>
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-8 border-blue-gray-50" />

        <Typography color="blue-gray" className="text-center font-normal pb-7">
          &copy; 2025 Orbivault Technology
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
