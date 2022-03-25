import { NavLink } from 'remix'

export default function About() {
  throw new Error("sdfghddfg");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <NavLink to="/">
            Home page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
