import { NavLink } from "react-router-dom";

const links = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "about", url: "/about" },
  { id: 3, text: "products", url: "/products" },
  { id: 4, text: "cart", url: "/cart" },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { text, url, id } = link;

        return (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                `capitalize ${isActive ? "menu-active" : ""}`
              }
              id={id}
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
export default NavLinks;
