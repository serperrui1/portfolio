import { useState, useEffect } from "react";
import "./Header.css";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      title: "Inicio",
      label: "Inicio",
      url:`${import.meta.env.BASE_URL}#hero`,
    },
    {
      title: "Experiencia",
      label: "experiencia",
      url: `${import.meta.env.BASE_URL}#experiencia`,
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: `${import.meta.env.BASE_URL}#proyectos`,
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: `${import.meta.env.BASE_URL}#sobre-mi`,
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:sergiopereatr@gmail.com",
    },
  ];

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      {navItems.map((link) => (
        <a key={link.label} aria-label={link.label} href={link.url}>
          {link.title}
        </a>
      ))}
    </nav>
  );
}

export default Header;