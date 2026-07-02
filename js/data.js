/* =========================================================================
 * ポートフォリオのデータはすべてこのファイルで管理します。
 * 業績を追加するときは、該当する配列（publications.international など）の
 * 先頭にエントリを1つ追加するだけでサイトに反映されます。
 *
 * 各テキストは { ja: "...", en: "..." } の形式で日英両方を書きます。
 * 文字列を直接書いた場合は、日英どちらの表示でも同じ文字列が使われます。
 * ========================================================================= */

const DATA = {
  profile: {
    name: { ja: "内田 結子", en: "Yuiko Uchida" },
    nameSub: { ja: "Yuiko Uchida", en: "内田 結子" },
    affiliation: {
      ja: "北海道大学 大学院情報科学院",   // ★要確認: 正式な所属名に修正してください
      en: "Graduate School of Information Science and Technology, Hokkaido University",
    },
    position: {
      ja: "博士課程",                      // ★要確認: 学年・課程を修正してください
      en: "Ph.D. Student",
    },
    email: "iko733752@gmail.com",
    // 使わないリンクは行ごと削除してください
    links: [
      { label: "Google Scholar", url: "#" },   // ★URLを設定してください
      { label: "GitHub", url: "#" },           // ★URLを設定してください
      { label: "researchmap", url: "#" },      // ★URLを設定してください
    ],
    // 顔写真を使う場合は images/profile.jpg などに置いてパスを指定。空文字ならイニシャル表示。
    photo: "",
  },

  about: {
    ja: "3Dシーン生成の評価に関する研究を行っています。物体検出モデルの知見を活用し、生成された3Dシーンのオブジェクトレベルの忠実性を捉える評価指標の構築に取り組んでいます。",  // ★自由に書き換えてください
    en: "My research focuses on the evaluation of 3D scene generation. I develop evaluation metrics that capture object-level fidelity of generated 3D scenes by leveraging insights from object detection models.",
  },

  interests: [
    { ja: "3Dシーン生成・評価", en: "3D Scene Generation & Evaluation" },
    { ja: "コンピュータビジョン", en: "Computer Vision" },
    { ja: "物体検出", en: "Object Detection" },
    { ja: "評価指標", en: "Evaluation Metrics" },
  ],

  news: [
    {
      date: "2026-02",   // ★日付は要確認
      text: {
        ja: "情報メディア学会技術報告にて発表しました。",
        en: "Presented at the ITE Technical Report meeting.",
      },
    },
    {
      date: "2025-10",
      text: {
        ja: "ICCV 2025 UniLight Workshop にて発表しました。",
        en: "Presented at the ICCV 2025 UniLight Workshop.",
      },
    },
    {
      date: "2024-12",
      text: {
        ja: "SIGGRAPH Asia 2024 Technical Communications にて発表しました。",
        en: "Presented at SIGGRAPH Asia 2024 Technical Communications.",
      },
    },
    {
      date: "2024-10",
      text: {
        ja: "2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize を受賞しました。",
        en: "Received the 2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize.",
      },
    },
  ],

  publications: {
    /* --- 国際学会 (査読あり) --- */
    international: [
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title: "Objectness similarity: Capturing object-level fidelity in 3D scene evaluation",
        venue: {
          ja: "arXiv: 2509.09143（ICCV 2025 UniLight Workshop にて発表）",
          en: "arXiv: 2509.09143 (presented at ICCV 2025 UniLight Workshop)",
        },
        year: 2025,
        links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.09143" }],
      },
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title: "An evaluation metric for single image-to-3D models based on object detection perspective",
        venue: {
          ja: "Proceedings of the SIGGRAPH Asia 2024 Technical Communications, pages 1–4",
          en: "Proceedings of the SIGGRAPH Asia 2024 Technical Communications, pages 1–4",
        },
        year: 2024,
        links: [],   // 例: [{ label: "DOI", url: "https://doi.org/..." }]
      },
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title: "An evaluation metric for single image-to-3D models based on a class confidence score of object detection models",
        venue: {
          ja: "Proceedings of the 2024 IEEE 13th Global Conference on Consumer Electronics (GCCE), pages 1163–1164",
          en: "Proceedings of the 2024 IEEE 13th Global Conference on Consumer Electronics (GCCE), pages 1163–1164",
        },
        year: 2024,
        links: [],
      },
    ],

    /* --- 国内学会 (査読なし) --- */
    domestic: [
      {
        authors: {
          ja: "内田 結子, 藤後 廉, 前田 圭介, 小川 貴弘, 長谷山 美紀",
          en: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        },
        title: {
          ja: "Open-vocabulary 物体検出モデルを導入したオブジェクト中心の3Dシーン評価指標に関する検討",
          en: "Open-vocabulary 物体検出モデルを導入したオブジェクト中心の3Dシーン評価指標に関する検討 (in Japanese)",
        },
        venue: {
          ja: "情報メディア学会技術報告, pages 384–388",
          en: "ITE Technical Report, pages 384–388",
        },
        year: 2026,
        links: [],
      },
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title: "An object-focused metric for 3D scene evaluation based on features of an object detection model",
        venue: {
          ja: "画像の認識・理解シンポジウム (MIRU2025), pages 1–6",
          en: "Meeting on Image Recognition and Understanding (MIRU2025), pages 1–6",
        },
        year: 2025,
        links: [],
      },
      {
        authors: {
          ja: "内田 結子, 藤後 廉, 前田 圭介, 小川 貴弘, 長谷山 美紀",
          en: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        },
        title: {
          ja: "物体検出モデルの信頼度スコアに基づくSingle image-to-3Dモデルの評価指標に関する検討",
          en: "物体検出モデルの信頼度スコアに基づくSingle image-to-3Dモデルの評価指標に関する検討 (in Japanese)",
        },
        venue: {
          ja: "令和6年度 電気・情報関係学会北海道支部連合大会, pages 91–92",
          en: "2024 Hokkaido Chapters Joint Convention of the Institutes of Electrical and Information Engineers, pages 91–92",
        },
        year: 2024,
        links: [],
      },
    ],
  },

  awards: [
    {
      year: 2024,
      title: {
        ja: "The 2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize",
        en: "The 2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize",
      },
      note: {
        ja: "令和6年度 電気・情報関係学会北海道支部連合大会における発表に関して授与",
        en: "For the presentation at the 2024 Hokkaido Chapters Joint Convention of the Institutes of Electrical and Information Engineers",
      },
    },
  ],

  /* ★学歴: 期間・学校名を正しいものに修正してください */
  education: [
    {
      period: { ja: "2026年4月 – 現在", en: "Apr. 2026 – Present" },
      title: {
        ja: "北海道大学 大学院情報科学院 博士後期課程",
        en: "Ph.D. Program, Graduate School of Information Science and Technology, Hokkaido University",
      },
      note: "",
    },
    {
      period: { ja: "2024年4月 – 2026年3月", en: "Apr. 2024 – Mar. 2026" },
      title: {
        ja: "北海道大学 大学院情報科学院 修士課程",
        en: "M.S., Graduate School of Information Science and Technology, Hokkaido University",
      },
      note: "",
    },
    {
      period: { ja: "2020年4月 – 2024年3月", en: "Apr. 2020 – Mar. 2024" },
      title: {
        ja: "北海道大学 工学部",
        en: "B.E., School of Engineering, Hokkaido University",
      },
      note: "",
    },
  ],

  /* ★職歴・インターン等: なければ空配列 [] のままにするとセクションごと非表示になります */
  experience: [
    // 例:
    // {
    //   period: { ja: "2025年8月 – 2025年9月", en: "Aug. 2025 – Sep. 2025" },
    //   title: { ja: "○○株式会社 リサーチインターン", en: "Research Intern, XXX Inc." },
    //   note: { ja: "△△に関する研究開発", en: "R&D on ..." },
    // },
  ],

  /* ★スキル: 自由に編集してください */
  skills: [
    {
      category: { ja: "プログラミング", en: "Programming" },
      items: ["Python", "PyTorch", "C/C++"],
    },
    {
      category: { ja: "ツール・フレームワーク", en: "Tools & Frameworks" },
      items: ["Git", "Docker", "Linux", "LaTeX"],
    },
    {
      category: { ja: "言語", en: "Languages" },
      items: [
        { ja: "日本語（ネイティブ）", en: "Japanese (native)" },
        { ja: "英語", en: "English" },
      ],
    },
  ],
};
