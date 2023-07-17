import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">👈 HOME</Link>

      <style jsx>
        {`
          nav {
            background-color: black;
            width: 100vw;
            color: white;
            text-align: left;
            padding: 20px 50px;
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
