import GitHubMarkLight from "./images/GitHub-Mark-Light-32px.png";
import Item1 from "./images/item1.jpg";
import "./App.css";

function App() {
  const portfolioData = [
    {
      key: 1,
      title: "iPlayer clone (frontend)",
      category: "frontend",
      image: Item1,
      description: [
        <>
          A copy of the BBC iPlayer landing page, which has been produced using{" "}
          <span className="blue-highlight">react</span>,{" "}
          <span className="blue-highlight">javascript</span>,{" "}
          <span className="blue-highlight">css</span> and{" "}
          <span className="blue-highlight">jsx</span> This page features
          carrousels and dropdown menus. It is fully responsive and has been
          adapted for both touchscreen and mouse control. Testing has been
          carried out on firefox, safari, chrome and edge browsers.
        </>,
      ],
      techList: ["javascript", "react", "jsx", "css"],
      link: "https://mhumphri.github.io/iplayer-clone/",
    },
  ];

  return (
    <div className="App">
      <nav className="outer-nav">
        <div className="content-wrapper">
          <div className="inner-nav">
            <a
              href="https://mhumphri.github.io/portfolio/"
              className="logo-text"
            >
              michael humphries portfolio
            </a>
            <a
              href="https://github.com/mhumphri/"
              className="github-link-wrapper"
            >
              <img className="github-img" src={GitHubMarkLight} />
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div className="content-wrapper items">
          {portfolioData.map((x) => (
            <a href={x.link} className="item-box-outer">
              <div className="item-box">
                {x.image ? <img className="item-img" src={x.image} /> : null}
                <div className="item-details-wrapper">
                  <h2>{x.title}</h2>
                  <div className="item-description-wrapper">
                    <p className="item-description">{x.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="content-wrapper">
          <div className="footer-inner">
            <svg
              className="envelope-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            humphries_michael@hotmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
