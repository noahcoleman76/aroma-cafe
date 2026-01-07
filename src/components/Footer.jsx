import logo from "../assets/logo.png";

export default function Footer({
  addressLines,
  phoneDisplay,
  phoneTel,
  hoursLines,
  socials,
}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          {/* Brand */}
          <div>
            <div className="footerBrand">
              <img src={logo} alt="Aroma Cafe logo" />
              <div>
                <h3 className="footerTitle">Aroma Cafe</h3>

              </div>
            </div>

            <div className="footerLinks">
              {socials?.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <div className="footerColTitle">Visit</div>
            {addressLines.map((l, i) => (
              <div key={i} className="footerSmall" style={{ marginTop: i === 0 ? 0 : 6 }}>
                {l}
              </div>
            ))}
            <div className="footerLine" />
            <a href={phoneTel} style={{ color: "var(--primary-ink)", fontWeight: 750 }}>
              {phoneDisplay}
            </a>
          </div>

          {/* Hours */}
          <div>
            <div className="footerColTitle">Hours</div>
            {hoursLines.map((l, i) => (
              <div key={i} className="footerSmall" style={{ marginTop: i === 0 ? 0 : 6 }}>
                {l}
              </div>
            ))}
          </div>
        </div>

        <div className="footerBottom">
          <div>© {new Date().getFullYear()} Aroma Cafe</div>
          <div>Designed for mobile-first ordering</div>
        </div>
      </div>
    </footer>
  );
}
