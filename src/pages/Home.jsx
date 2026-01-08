import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { FaGift, FaPhone, FaBagShopping, FaQuoteLeft } from "react-icons/fa6";


const WHY_AROMA_CHIPS = ["Quality ingredients", "Careful preparation", "Warm hospitality"];

const QUOTE =
  "Aroma Cafe was born from the belief that a meal should be more than something you eat — it should be something you enjoy.";

const REVIEW_TAGLINE = "Thoughtfully made food, warmly received.";

// Random image loader from /src/assets/food
function useRandomFoodImages(count = 6) {
  const all = useMemo(() => {
    const modules = import.meta.glob("../assets/food/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    });
    return Object.values(modules);
  }, []);

  return useMemo(() => {
    if (!all.length) return [];

    const copy = [...all];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(count, copy.length));
  }, [all, count]);
}

function HeroActions({ orderOnlineUrl, giftCardUrl, phoneTel }) {
  return (
    <div className="heroActions">
      <a className="btn btnDark" href={orderOnlineUrl} target="_blank" rel="noreferrer">
        <FaBagShopping /> Order Online
      </a>

      <Link className="btn btnPrimary" to="/menu">
        View Menu
      </Link>

      <a className="btn" href={giftCardUrl} target="_blank" rel="noreferrer">
        <FaGift /> Gift Cards
      </a>

      <a className="btn" href={phoneTel}>
        <FaPhone /> Call to Order
      </a>
    </div>
  );
}

function ChipsRow({ items, className }) {
  return (
    <div className={className}>
      {items.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Home({
  phoneDisplay,
  phoneTel,
  giftCardUrl,
  orderOnlineUrl,
  favorites = [],
  reviews = [],
}) {
  const imgs = useRandomFoodImages(7);

  const [showValentinesModal, setShowValentinesModal] = useState(false);

  useEffect(() => {
    try {
      const seenFlag = window.localStorage.getItem("valentinesPromoSeen");
      if (!seenFlag) {
        setShowValentinesModal(true);
        window.localStorage.setItem("valentinesPromoSeen", "true");
      }
    } catch {
      // if localStorage is blocked, just show the modal once this session
      setShowValentinesModal(true);
    }
  }, []);

  const heroImg = imgs[0];
  const whyImg = imgs[1];

  return (
    <>
      {/* VALENTINE'S DAY PROMO MODAL */}
      {showValentinesModal && (
        <div
          className="promoOverlay"
          onClick={() => setShowValentinesModal(false)}
        >
          <div
            className="promoModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="promoClose"
              type="button"
              onClick={() => setShowValentinesModal(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="promoTag">Special Dinner Service</div>
            <h2 className="promoTitle">Valentine’s Day</h2>
            <p className="promoBody">
              Aroma Cafe is opening for dinner on Valentine's Day.
            </p>

            <p className="promoDetails">
              <strong>Thursday, February 14</strong>
              <br />
              Limited seating • Call ahead to join our call-ahead list.
            </p>

            <div className="promoActions">
              <a className="btn btnDark" href={phoneTel}>
                <FaPhone /> Call ahead
              </a>
              <button
                type="button"
                className="btn"
                onClick={() => setShowValentinesModal(false)}
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="heroWrap">
            <div className="heroBackdrop" />

            <div className="heroGrid">
              <div className="heroCopy">
                <span className="chip">Breakfast • Lunch • Main St, Santaquin</span>

                <h1 className="heroTitle">
                  Aroma Cafe
                  <br />
                  light, fresh, and comforting.
                </h1>

                <p className="heroSub">
                  Located in the heart of Santaquin, Aroma Cafe is a casual yet elegant spot for
                  beautifully crafted breakfast and lunch, where exceptional flavors meet warm,
                  thoughtful hospitality.
                </p>

                <HeroActions
                  orderOnlineUrl={orderOnlineUrl}
                  giftCardUrl={giftCardUrl}
                  phoneTel={phoneTel}
                />

              </div>

              <div className="heroPhoto">
                {heroImg ? (
                  <img src={heroImg} alt="Aroma Cafe featured dish" />
                ) : (
                  <div style={{ padding: 18 }}>
                    <div className="h2">Add food photos</div>
                    <p className="p">
                      Put images in <code>src/assets/food/</code> to enable hero photography.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AROMA */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto 24px", textAlign: "center" }}>
            <h2 className="h2">Why Aroma</h2>
            <p className="p">
              Aroma Cafe was founded in 2023 on Main Street in Santaquin with a simple goal: to bring
              something fresh and thoughtfully made to our community.
            </p>
          </div>

          <div className="card" style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
            <div className="whyAromaGrid">
              <div className="whyAromaText">
                <p className="p" style={{ fontSize: 15, maxWidth: 460, margin: "0 auto" }}>
                  We believe great food should feel both comforting and intentional. From quality
                  ingredients to careful preparation, every detail matters. Aroma Cafe is our way of
                  creating a place where breakfast and brunch feel unhurried, welcoming, and
                  consistently excellent.
                </p>

                <ChipsRow items={WHY_AROMA_CHIPS} className="whyAromaChips" />
              </div>

              <div className="whyAromaImage">
                {whyImg ? (
                  <img src={whyImg} alt="Aroma Cafe dish" />
                ) : (
                  <div style={{ padding: 16 }}>
                    <p className="p">Add more food photos to fill this spot.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL QUOTE */}
      <section className="section" style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="quoteBlock">
            <p>{QUOTE}</p>
          </div>
        </div>
      </section>

      {/* CUSTOMER FAVORITES */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <h2 className="h2">Customer favorites</h2>
              <p className="p">Three dishes people come back for again and again.</p>
            </div>
          </div>

          <div className="grid3">
            {favorites.map((f, idx) => (
              <div className="card" key={f.name ?? idx}>
                <div className="favImg">
                  {f.image ? (
                    <img src={f.image} alt={f.name} loading="lazy" />
                  ) : (
                    <div style={{ height: "100%", padding: 16 }}>
                      <p className="p">Add an image for this item.</p>
                    </div>
                  )}
                </div>
                <div className="favBody">
                  <h3 className="favName">{f.name}</h3>
                  <p className="favDesc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY INVITE */}
      <section className="section" style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ marginTop: 14, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" to="/menu">
                View Menu
              </Link>

              <a className="btn btnDark" href={orderOnlineUrl} target="_blank" rel="noreferrer">
                <FaBagShopping /> Order Online
              </a>

              <a className="btn" href={phoneTel}>
                <FaPhone /> {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS (placeholder for now) */}
      <section className="sectionAlt">
        <div className="container">
          <p
            style={{
              maxWidth: 520,
              margin: "0 auto 28px",
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "rgba(15,61,47,0.75)",
            }}
          >
            {REVIEW_TAGLINE}
          </p>
          <div className="sectionHeader">
            <div>
              <h2 className="h2">What people are saying</h2>
            </div>
          </div>

          <div className="reviewGrid">
            {reviews.map((r, idx) => (
              <div className="reviewCard" key={r.author ?? idx}>
                <div className="reviewStars">★★★★★</div>
                <p className="reviewText">“{r.text}”</p>
                <div className="reviewAuthor">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
