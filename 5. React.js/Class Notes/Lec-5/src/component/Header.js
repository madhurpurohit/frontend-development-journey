export default function Header() {
  return (
    <>
      <div className="nav-image">
        <img
          src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg"
          alt="Brand Logo"
        />
      </div>

      <div className="navbar">
        <button className="btn">Man</button>
        <button className="btn">Woman</button>
        <button className="btn">Kids</button>
        <button className="btn">Home & Living</button>
        <button className="btn">Beauty</button>
        <button className="btn">Studio</button>
      </div>

      <div className="search">
        <input type="text" placeholder="Enter search item" />
      </div>

      <div className="user-navbar">
        <button className="btn">Profiles</button>
        <button className="btn">Wishlists</button>
        <button className="btn">Bag</button>
      </div>
    </>
  );
}
