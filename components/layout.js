import Link from 'next/link';

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="wrapper">
    <h1 className="headline ">
      <Link href='/'>
        Matt Jared
      </Link>
    </h1>
    <article className="css-gui-1glukg6 squares">
      <div className="css-gui-hhkxjx"></div>
      <div className="css-gui-y6pqy8"></div>
      <div className="css-gui-9by617"></div>
      <div className="css-gui-hqruzu"></div>
      <div className="css-gui-1r8z06m"></div>
      <div className="css-gui-jgxmt0"></div>
      <div className="css-gui-1e33bb5"></div>
      <div className="css-gui-1hn9m2g"></div>
      <div className="css-gui-1r2qq4r"></div>
      <div className="css-gui-1484h9x"></div>
      <div className="css-gui-ztxlts"></div>
      <div className="css-gui-10grd5p"></div>
    </article>
    { children }
    <footer>
    <article className="css-gui-1vyjrns">
      <p>Site made with code. All rights reserved {currentYear}. Hosted on Vercel, code available on <Link target="_blank" href="https://github.com/mattjared/mattjared.github.io">Github</Link></p>
    </article>
    </footer>
  </div>
  );
}