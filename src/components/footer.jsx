import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"

const Footer = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "http://facebook.com/misbahurbd",
      brandColor: "#006AFF",
      textColor: "#ffffff",
    },
    {
      icon: FaInstagram,
      href: "http://instagram.com/misbahurbd",
      brandColor: "#E1306C",
      textColor: "#ffffff",
    },
    {
      icon: FaLinkedin,
      href: "http://linkedin.com/in/misbahurbd",
      brandColor: "#0a66c2",
      textColor: "#ffffff",
    },
    {
      icon: FaGithub,
      href: "http://github.com/misbahurbd",
      brandColor: "#24292e",
      textColor: "#ffffff",
    },
  ]

  return (
    <footer className="bg-secondary pt-20 pb-10 px-4 flex flex-col gap-4 text-center items-center justify-center">
      <Link className="text-foreground text-3xl font-bold">Pottery Picks</Link>
      <p className="max-w-[580px] text-sm leading-relaxed text-center">
        Discover the artistry of paper crafts, glass art, and pottery at our
        modern Art & Craft Store. Explore a curated collection featuring
        exquisite handmade ceramics, stunning glass creations, and intricate
        paper designs, perfect for adding a touch of elegance and creativity to
        your home decor or gifting needs.
      </p>
      <ul className="flex gap-2 items-center">
        {socialLinks.map((link, i) => (
          <li key={"social-icon-" + i}>
            <Link
              to={link.href}
              className={cn(
                "size-8 flex items-center justify-center rounded-md"
              )}
              style={{
                backgroundColor: link.brandColor,
                color: link.textColor,
              }}
            >
              <link.icon />
            </Link>
          </li>
        ))}
      </ul>
      <span className="block border-b border-border w-full" />
      <p className="text-sm text-center">
        © 2024 Pottery Picks | Designed by Misbahur Rahman
      </p>
    </footer>
  )
}
export default Footer
