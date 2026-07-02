/* 描画と日英切り替えのロジック。通常このファイルを編集する必要はありません。 */
(function () {
  "use strict";

  const UI_TEXT = {
    navNews: { ja: "ニュース", en: "News" },
    navPublications: { ja: "研究業績", en: "Publications" },
    navAwards: { ja: "受賞", en: "Awards" },
    navEducation: { ja: "学歴", en: "Education" },
    navExperience: { ja: "職歴", en: "Experience" },
    navSkills: { ja: "スキル", en: "Skills" },
    headNews: { ja: "ニュース", en: "News" },
    headPublications: { ja: "研究業績", en: "Publications" },
    headIntl: { ja: "国際学会（査読あり・主著）", en: "International Conferences (Refereed, First Author)" },
    headDomestic: { ja: "国内学会（査読なし・主著）", en: "Domestic Conferences (Non-refereed, First Author)" },
    headAwards: { ja: "受賞", en: "Awards" },
    headEducation: { ja: "学歴", en: "Education" },
    headExperience: { ja: "職歴", en: "Experience" },
    headSkills: { ja: "スキル", en: "Skills" },
    keywords: { ja: "キーワード: ", en: "Keywords: " },
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

  // 連絡先アイコン (Simple Icons / Material Icons の24x24パスデータ)
  const ICONS = {
    "Email": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    "Google Scholar": "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z",
    "Twitter": "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
    "LinkedIn": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
    "GitHub": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  };

  function iconLink(label, href, external) {
    const a = el("a", "contact-icon");
    a.href = href;
    a.setAttribute("aria-label", label);
    a.title = label;
    if (external) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    if (ICONS[label]) {
      a.innerHTML =
        '<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="' +
        ICONS[label] + '"></path></svg>';
    } else {
      a.textContent = label;
    }
    return a;
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

    // 連絡先 (各サービスのアイコンを表示)
    const contact = document.getElementById("hero-contact");
    contact.innerHTML = "";
    if (p.email) {
      contact.appendChild(iconLink("Email", "mailto:" + p.email, false));
    }
    (p.links || []).forEach((link) => {
      if (!link.url) return;
      contact.appendChild(iconLink(link.label, link.url, link.url !== "#"));
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

  // データが空のセクションは丸ごと非表示にする（ナビのタブも連動）
  function toggleSection(id, visible) {
    const section = document.getElementById(id);
    if (section) section.style.display = visible ? "" : "none";
    const navLink = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (navLink) navLink.parentElement.style.display = visible ? "" : "none";
  }

  function renderAll() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(UI_TEXT[node.dataset.i18n]);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-set]").forEach((node) => {
      node.classList.toggle("active", node.dataset.langSet === lang);
    });
    document.getElementById("footer-name").textContent =
      t(DATA.profile.name) + " · " + t(DATA.profile.nameSub);
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

  document.querySelectorAll("[data-lang-set]").forEach((node) => {
    node.addEventListener("click", (e) => {
      e.preventDefault();
      lang = node.dataset.langSet;
      localStorage.setItem("lang", lang);
      renderAll();
    });
  });

  renderAll();
})();
