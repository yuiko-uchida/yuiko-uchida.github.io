/* 描画と日英切り替えのロジック。通常このファイルを編集する必要はありません。 */
(function () {
  "use strict";

  const UI_TEXT = {
    headNews: { ja: "ニュース", en: "News" },
    headPublications: { ja: "研究業績", en: "Publications" },
    headIntl: { ja: "国際学会（査読あり・主著）", en: "International Conferences (Refereed, First Author)" },
    headDomestic: { ja: "国内学会（査読なし・主著）", en: "Domestic Conferences (Non-refereed, First Author)" },
    headAwards: { ja: "受賞", en: "Awards" },
    headEducation: { ja: "学歴", en: "Education" },
    headExperience: { ja: "職歴", en: "Experience" },
    headSkills: { ja: "スキル", en: "Skills" },
    keywords: { ja: "キーワード: ", en: "Keywords: " },
    switchTo: { ja: "English", en: "日本語" },
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

  // 著者リスト中の本人の名前を太字にする
  function renderAuthors(authorsText) {
    const wrap = el("span", "pub-authors");
    const names = [t(DATA.profile.name), t(DATA.profile.nameSub)].filter(Boolean);
    const pattern = names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    authorsText.split(new RegExp("(" + pattern + ")")).forEach((part) => {
      if (!part) return;
      wrap.appendChild(names.includes(part) ? el("span", "pub-me", part) : document.createTextNode(part));
    });
    return wrap;
  }

  function renderIntro() {
    const p = DATA.profile;
    document.getElementById("hero-name").textContent = t(p.name);
    document.getElementById("hero-name-sub").textContent = t(p.nameSub);
    document.getElementById("hero-affiliation").textContent =
      t(p.position) + " · " + t(p.affiliation);
    document.getElementById("about-text").textContent = t(DATA.about);

    const interests = (DATA.interests || []).map(t).join(", ");
    document.getElementById("interests-line").textContent =
      interests ? t(UI_TEXT.keywords) + interests : "";

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

    // Email / Scholar / GitHub のようなスラッシュ区切りの連絡先リンク
    const contact = document.getElementById("hero-contact");
    contact.innerHTML = "";
    const items = [];
    if (p.email) {
      const a = el("a", null, "Email");
      a.href = "mailto:" + p.email;
      a.title = p.email;
      items.push(a);
    }
    (p.links || []).forEach((link) => {
      if (!link.url || link.url === "#") return;
      const a = el("a", null, link.label);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      items.push(a);
    });
    items.forEach((a, i) => {
      if (i > 0) contact.appendChild(el("span", "contact-sep", "/"));
      contact.appendChild(a);
    });
  }

  function renderNews() {
    const list = document.getElementById("news-list");
    list.innerHTML = "";
    (DATA.news || []).forEach((item) => {
      const li = el("li");
      li.appendChild(el("span", "news-date", item.date));
      li.appendChild(el("span", null, t(item.text)));
      list.appendChild(li);
    });
    toggleSection("news", (DATA.news || []).length > 0);
  }

  function renderPubList(listId, pubs) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    (pubs || []).forEach((pub) => {
      const li = el("li");
      li.appendChild(el("span", "pub-title", "“" + t(pub.title) + "”"));
      li.appendChild(document.createElement("br"));
      li.appendChild(renderAuthors(t(pub.authors)));
      li.appendChild(document.createElement("br"));
      li.appendChild(el("span", "pub-venue", t(pub.venue)));
      li.appendChild(document.createTextNode(", " + pub.year + ". "));
      (pub.links || []).forEach((link) => {
        if (!link.url || link.url === "#") return;
        const a = el("a", null, "[" + link.label + "]");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener";
        li.appendChild(a);
        li.appendChild(document.createTextNode(" "));
      });
      list.appendChild(li);
    });
  }

  function renderAwards() {
    const list = document.getElementById("awards-list");
    list.innerHTML = "";
    (DATA.awards || []).forEach((award) => {
      const li = el("li");
      li.appendChild(document.createTextNode(t(award.title) + ", " + award.year + "."));
      const note = t(award.note);
      if (note) {
        li.appendChild(document.createElement("br"));
        li.appendChild(el("span", "note", note));
      }
      list.appendChild(li);
    });
    toggleSection("awards", (DATA.awards || []).length > 0);
  }

  function renderCvList(listId, sectionId, entries) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    (entries || []).forEach((entry) => {
      const li = el("li");
      li.appendChild(el("span", "cv-period", t(entry.period)));
      const body = el("span");
      body.appendChild(document.createTextNode(t(entry.title)));
      const note = t(entry.note);
      if (note) {
        body.appendChild(document.createElement("br"));
        body.appendChild(el("span", "note", note));
      }
      li.appendChild(body);
      list.appendChild(li);
    });
    toggleSection(sectionId, (entries || []).length > 0);
  }

  function renderSkills() {
    const list = document.getElementById("skills-list");
    list.innerHTML = "";
    (DATA.skills || []).forEach((group) => {
      const li = el("li");
      li.appendChild(el("strong", null, t(group.category) + ": "));
      li.appendChild(document.createTextNode((group.items || []).map(t).join(", ")));
      list.appendChild(li);
    });
    toggleSection("skills", (DATA.skills || []).length > 0);
  }

  // データが空のセクションは丸ごと非表示にする
  function toggleSection(id, visible) {
    const section = document.getElementById(id);
    if (section) section.style.display = visible ? "" : "none";
  }

  function renderAll() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(UI_TEXT[node.dataset.i18n]);
    });
    document.documentElement.lang = lang;
    document.getElementById("lang-toggle").textContent = t(UI_TEXT.switchTo);
    document.getElementById("footer-text").textContent =
      "© " + new Date().getFullYear() + " " + t(DATA.profile.name);

    renderIntro();
    renderNews();
    renderPubList("pub-international", DATA.publications.international);
    renderPubList("pub-domestic", DATA.publications.domestic);
    renderAwards();
    renderCvList("education-list", "education", DATA.education);
    renderCvList("experience-list", "experience", DATA.experience);
    renderSkills();
  }

  document.getElementById("lang-toggle").addEventListener("click", (e) => {
    e.preventDefault();
    lang = lang === "ja" ? "en" : "ja";
    localStorage.setItem("lang", lang);
    renderAll();
  });

  renderAll();
})();
