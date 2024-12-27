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
      url: "/#hero",
    },
    {
      title: "Experiencia",
      label: "experiencia",
      url: "/#experiencia",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "/#sobre-mi",
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