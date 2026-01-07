import { useMemo, useState, useEffect } from "react";
import { FaBagShopping } from "react-icons/fa6";

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Menu({ menu = [], orderOnlineUrl }) {
  const [lightbox, setLightbox] = useState(null); // { src, alt } | null

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden"; // prevent background scroll

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);
  const sections = useMemo(
    () => menu.map((s) => ({ ...s, id: slugify(s.section) })),
    [menu]
  );

  const [active, setActive] = useState(sections[0]?.id ?? "");

  return (
    <main className="menuPage">
      {/* Header */}
      <section className="section" style={{ paddingBottom: 10 }}>
        <div className="container">
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <h1 className="heroTitle" style={{ fontSize: "clamp(34px, 4.2vw, 52px)" }}>
              Menu
            </h1>
            <p className="p" style={{ maxWidth: 60 * 10, margin: "10px auto 0" }}>
              Breakfast, lunch, and everything in between. Order online for pickup when you’re ready.
            </p>

            <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btnDark" href={orderOnlineUrl} target="_blank" rel="noreferrer">
                <FaBagShopping /> Order Online
              </a>
              <a className="btn btnPrimary" href="#breakfast">
                Browse Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section nav */}
      <section className="menuNavWrap">
        <div className="container">
          <div className="menuNav">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`menuNavItem ${active === s.id ? "isActive" : ""}`}
                onClick={() => {
                  setActive(s.id);
                  const el = document.getElementById(s.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {s.section}
              </button>

            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="section menuSection">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="h2">{sec.section}</h2>
                {sec.note ? <p className="p">{sec.note}</p> : null}
              </div>
            </div>

            <div className="menuGrid">
              {sec.items.map((item, idx) => (
                <div
                  className={`menuItem ${item.image ? "hasImage" : ""}`}
                  key={`${sec.id}-${item.name}-${idx}`}
                >
                  {item.image ? (
                    <button
                      type="button"
                      className="menuImgBtn"
                      onClick={() => setLightbox({ src: item.image, alt: item.name })}
                      aria-label={`View photo of ${item.name}`}
                    >
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </button>
                  ) : null}

                  <div className="menuItemBody">
                    <div className="menuItemName">{item.name}</div>
                    {item.description ? (
                      <div className="menuItemDesc">{item.description}</div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      {lightbox ? (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="lightboxPanel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightboxClose"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
            >
              ×
            </button>

            <img className="lightboxImg" src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      ) : null}

    </main>
  );
}
