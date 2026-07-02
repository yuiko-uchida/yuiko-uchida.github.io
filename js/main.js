/* 描画と日英切り替えのロジック。通常このファイルを編集する必要はありません。 */
(function () {
  "use strict";

  const UI_TEXT = {
    navBrand: { ja: "内田 結子", en: "Yuiko Uchida" },
    navAbout: { ja: "自己紹介", en: "About" },
    navNews: { ja: "ニュース", en: "News" },
    navPublications: { ja: "研究業績", en: "Publications" },
    navAwards: { ja: "受賞", en: "Awards" },
    navEducation: { ja: "学歴", en: "Education" },
    navSkills: { ja: "スキル", en: "Skills" },
    headAbout: { ja: "自己紹介", en: "About Me" },
    headNews: { ja: "ニュース", en: "News" },
    headPublications: { ja: "研究業績", en: "Publications" },
    headIntl: { ja: "国際学会（査読あり・主著）", en: "International Conferences (Refereed, First Author)" },
    headDomestic: { ja: "国内学会（査読なし・主著）", en: "Domestic Conferences (Non-refereed, First Author)" },
    headAwards: { ja: "受賞", en: "Awards" },
    headEducation: { ja: "学歴", en: "Education" },
    headExperience: { ja: "職歴", en: "Experience" },
    headSkills: { ja: "スキル", en: "Skills" },
  };

  // URLパラメータ (?lang=en) → 保存された言語 → ブラウザ言語 の順で初期言語を決定
  let lang = new URLSearchParams(location.search).get("lang") ||
    localStorage.getItem("lang");
  if (lang !== "ja" && lang !== "en") {
    lang = (navigator.language || "ja").startsWith("ja") ? "ja" : "en";
  }

  // { ja, en } 形式でも素の文字列でも受け取れるようにする
  function t(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang] ?? value.ja ?? value.en ?? "";
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderLinks(links) {
    const wrap = el("span", "pub-links");
    (links || []).forEach((link) => {
      if (!link.url || link.url === "#") return;
      const a = el("a", "pub-link", link.label);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      wrap.appendChild(a);
    });
    return wrap;
  }

  function renderHero() {
    const p = DATA.profile;
    document.getElementById("hero-name").textContent = t(p.name);
    document.getElementById("hero-name-sub").textContent = t(p.nameSub);
    document.getElementById("hero-affiliation").textContent =
      t(p.position) + " · " + t(p.affiliation);

    const photo = document.getElementById("hero-photo");
    photo.innerHTML = "";
    if (p.photo) {
      const img = document.createElement("img");
      img.src = p.photo;
      img.alt = "";
      photo.appendChild(img);
    } else {
      photo.textContent = "YU";
    }

    const contact = document.getElementById("hero-contact");
    contact.innerHTML = "";
    if (p.email) {
      const a = el("a", "contact-link", p.email);
      a.href = "mailto:" + p.email;
      contact.appendChild(a);
    }
    (p.links || []).forEach((link) => {
      if (!link.url || link.url === "#") return;
      const a = el("a", "contact-link", link.label);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      contact.appendChild(a);
    });
  }

  function renderAbout() {
    document.getElementById("about-text").textContent = t(DATA.about);
    const tags = document.getElementById("interests");
    tags.innerHTML = "";
    (DATA.interests || []).forEach((item) => {
      tags.appendChild(el("span", "tag", t(item)));
    });
  }

  function renderNews() {
    const list = document.getElementById("news-list");
    list.innerHTML = "";
    (DATA.news || []).forEach((item) => {
      const li = el("li", "news-item");
      li.appendChild(el("span", "news-date", item.date));
      li.appendChild(el("span", "news-text", t(item.text)));
      list.appendChild(li);
    });
    toggleSection("news", (DATA.news || []).length > 0);
  }

  function renderPubList(listId, pubs) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    (pubs || []).forEach((pub) => {
      const li = el("li", "pub-item");
      li.appendChild(el("span", "pub-authors", t(pub.authors) + ". "));
      li.appendChild(el("span", "pub-title", "“" + t(pub.title) + "”. "));
      li.appendChild(el("span", "pub-venue", t(pub.venue) + ", " + pub.year + "."));
      const links = renderLinks(pub.links);
      if (links.childNodes.length > 0) li.appendChild(links);
      list.appendChild(li);
    });
  }

  function renderAwards() {
    const list = document.getElementById("awards-list");
    list.innerHTML = "";
    (DATA.awards || []).forEach((award) => {
      const li = el("li", "award-item");
      li.appendChild(el("span", "award-year", String(award.year)));
      const body = el("div", "award-body");
      body.appendChild(el("div", "award-title", t(award.title)));
      const note = t(award.note);
      if (note) body.appendChild(el("div", "award-note", note));
      li.appendChild(body);
      list.appendChild(li);
    });
    toggleSection("awards", (DATA.awards || []).length > 0);
  }

  function renderTimeline(listId, sectionId, entries) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    (entries || []).forEach((entry) => {
      const li = el("li", "timeline-item");
      li.appendChild(el("span", "timeline-period", t(entry.period)));
      const body = el("div", "timeline-body");
      body.appendChild(el("div", "timeline-title", t(entry.title)));
      const note = t(entry.note);
      if (note) body.appendChild(el("div", "timeline-note", note));
      li.appendChild(body);
      list.appendChild(li);
    });
    toggleSection(sectionId, (entries || []).length > 0);
  }

  function renderSkills() {
    const grid = document.getElementById("skills-list");
    grid.innerHTML = "";
    (DATA.skills || []).forEach((group) => {
      const card = el("div", "skill-card");
      card.appendChild(el("h4", "skill-category", t(group.category)));
      const tags = el("div", "skill-tags");
      (group.items || []).forEach((item) => {
        tags.appendChild(el("span", "tag", t(item)));
      });
      card.appendChild(tags);
      grid.appendChild(card);
    });
    toggleSection("skills", (DATA.skills || []).length > 0);
  }

  // データが空のセクションは丸ごと非表示にする
  function toggleSection(id, visible) {
    const section = document.getElementById(id);
    if (section) section.style.display = visible ? "" : "none";
    const navLink = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (navLink) navLink.parentElement.style.display = visible ? "" : "none";
  }

  function renderUIText() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(UI_TEXT[node.dataset.i18n]);
    });
    document.querySelectorAll("[data-lang-btn]").forEach((node) => {
      node.classList.toggle("active", node.dataset.langBtn === lang);
    });
    document.documentElement.lang = lang;
    document.getElementById("footer-text").textContent =
      "© " + new Date().getFullYear() + " " + t(DATA.profile.name);
  }

  function renderAll() {
    renderUIText();
    renderHero();
    renderAbout();
    renderNews();
    renderPubList("pub-international", DATA.publications.international);
    renderPubList("pub-domestic", DATA.publications.domestic);
    renderAwards();
    renderTimeline("education-list", "education", DATA.education);
    renderTimeline("experience-list", "experience", DATA.experience);
    renderSkills();
  }

  document.getElementById("lang-toggle").addEventListener("click", () => {
    lang = lang === "ja" ? "en" : "ja";
    localStorage.setItem("lang", lang);
    renderAll();
  });

  renderAll();
})();
