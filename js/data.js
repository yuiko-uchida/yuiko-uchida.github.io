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
      ja: "北海道大学 大学院情報科学院 メディアネットワークコース",
      en: "Graduate School of Information Science and Technology, Hokkaido University",
    },
    position: {
      ja: "修士課程",
      en: "Master's Student",
    },
    email: "iko733752@gmail.com",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.co.jp/citations?user=pyVn20EAAAAJ" },
      { label: "Twitter", url: "https://x.com/yuiko_uchida_" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/yuiko-uchida-1098b4375" },
      { label: "OpenReview", url: "https://openreview.net/profile?id=~Yuiko_Uchida1" },
    ],
    // 顔写真を使う場合は images/profile.jpg などに置いてパスを指定。空文字ならイニシャル表示。
    photo: "",
  },

  about: {
    ja: "3Dシーン生成の評価に関する研究を行っています。物体検出モデルの知見を活用し、生成された3Dシーンのオブジェクトレベルの忠実性を捉える評価指標の構築に取り組んでいます。",
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
      date: "2026-02",
      text: {
        ja: "情報メディア学会技術報告での発表が確定しました。",
        en: "A presentation at the ITE Technical Report meeting has been accepted.",
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
    /* --- 国際学会 --- */
    international: [
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title: "Objectness Similarity: Capturing Object-Level Fidelity in 3D Scene Evaluation",
        venue: {
          ja: "arXiv: 2509.09143（ICCV 2025 UniLight Workshop 採択）",
          en: "arXiv: 2509.09143 (accepted at ICCV 2025 UniLight Workshop)",
        },
        year: 2025,
        links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.09143" }],
      },
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title: "An evaluation metric for single image-to-3D models based on object detection perspective",
        venue: "Proceedings of the SIGGRAPH Asia 2024 Technical Communications, pages 1–4",
        year: 2024,
        links: [],   // 例: [{ label: "DOI", url: "https://doi.org/..." }]
      },
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title: "An evaluation metric for single image-to-3D models based on a class confidence score of object detection models",
        venue: "Proceedings of the 2024 IEEE 13th Global Conference on Consumer Electronics (GCCE), pages 1163–1164",
        year: 2024,
        links: [],
      },
    ],

    /* --- 国内学会 --- */
    domestic: [
      {
        authors: {
          ja: "内田 結子, 藤後 廉, 前田 圭介, 小川 貴弘, 長谷山 美紀",
          en: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        },
        title: {
          ja: "Open-Vocabulary 物体検出モデルを導入したオブジェクト中心の3Dシーン評価指標に関する検討",
          en: "Open-Vocabulary 物体検出モデルを導入したオブジェクト中心の3Dシーン評価指標に関する検討 (in Japanese)",
        },
        venue: {
          ja: "情報メディア学会技術報告, pages xx–xx（発表確定）",
          en: "ITE Technical Report, pages xx–xx (to be presented)",
        },
        year: 2026,
        links: [],
      },
      {
        authors: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, Miki Haseyama",
        title: "An Object-Focused Metric for 3D Scene Evaluation Based on Features of an Object Detection Model",
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
          ja: "物体検出モデルの信頼度スコアに基づくSingle Image-to-3Dモデルの評価指標に関する検討",
          en: "物体検出モデルの信頼度スコアに基づくSingle Image-to-3Dモデルの評価指標に関する検討 (in Japanese)",
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
      title: "The 2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize",
      note: {
        ja: "令和6年度 電気・情報関係学会北海道支部連合大会における講演発表に関して授与",
        en: "For the presentation at the 2024 Hokkaido Chapters Joint Convention of the Institutes of Electrical and Information Engineers",
      },
    },
  ],

  /* --- 資格・免許 --- */
  certifications: [
    {
      period: { ja: "2025年7月", en: "Jul. 2025" },
      title: {
        ja: "ネットワークスペシャリスト試験（独立行政法人情報処理推進機構）",
        en: "Network Specialist Examination (IPA, Japan)",
      },
      note: "",
    },
    {
      period: { ja: "2023年12月", en: "Dec. 2023" },
      title: {
        ja: "応用情報技術者試験（独立行政法人情報処理推進機構）",
        en: "Applied Information Technology Engineer Examination (IPA, Japan)",
      },
      note: "",
    },
    {
      period: { ja: "2022年12月", en: "Dec. 2022" },
      title: {
        ja: "第一種普通自動車免許",
        en: "Driver's License (Class 1)",
      },
      note: "",
    },
  ],

  /* --- 職歴・インターンシップ --- */
  experience: [
    {
      period: { ja: "2024年9月 – 現在", en: "Sep. 2024 – Present" },
      title: {
        ja: "株式会社DexAI 機械学習エンジニア（長期インターン）",
        en: "Machine Learning Engineer (Long-term Intern), DexAI Inc.",
      },
      note: {
        ja: "深層モデルを用いた社内ライブラリの実装、深層学習論文のサーベイと性能評価、大規模言語モデルを用いた検索拡張生成 (RAG) アプリケーションの性能調査・性能向上、教材制作等の幅広い業務を担当",
        en: "Broad responsibilities including implementation of internal deep-learning libraries, surveys and benchmarking of deep-learning papers, evaluation and improvement of retrieval-augmented generation (RAG) applications with large language models, and creation of training materials",
      },
      tech: {
        ja: "Python, PyTorch, Blender Python API (bpy), LangChain, Dify, RAGFlow, Browser Use, OpenAI API, ONNX, Docker / Docker Compose, NVIDIA Jetson, Git / GitHub, Temporal Action Segmentationモデル, Line Segmentationモデル, OCRモデル, PostgreSQL, MySQL, Mermaid, HTML / CSS / JavaScript, 画像生成モデル, 伝統的な画像解析 (Error Level Analysis, HOG, SVM)",
        en: "Python, PyTorch, Blender Python API (bpy), LangChain, Dify, RAGFlow, Browser Use, OpenAI API, ONNX, Docker / Docker Compose, NVIDIA Jetson, Git / GitHub, temporal action segmentation models, line segmentation models, OCR models, PostgreSQL, MySQL, Mermaid, HTML / CSS / JavaScript, image generation models, classical image analysis (Error Level Analysis, HOG, SVM)",
      },
    },
    {
      period: { ja: "2025年8月 – 9月（2週間）", en: "Aug. – Sep. 2025 (2 weeks)" },
      title: {
        ja: "株式会社日立製作所 夏季インターン",
        en: "Summer Intern, Hitachi, Ltd.",
      },
      note: {
        ja: "生成AIを用いた現場労働者のサポートシステムに関する研究（中央研究所 研究開発グループ 知能ビジョン研究部）",
        en: "Research on generative-AI-based support systems for field workers (Intelligent Vision Research Department, R&D Group, Central Research Laboratory)",
      },
      tech: "Python, PyTorch, AutoGen, OpenAI API, CLIP, DINOv2",
    },
    {
      period: { ja: "2025年9月", en: "Sep. 2025" },
      title: {
        ja: "株式会社本田技術研究所 夏季インターン",
        en: "Summer Intern, Honda R&D Co., Ltd.",
      },
      note: {
        ja: "強化学習による自動運転システムの研究開発（先進技術研究所 知能化・安全研究ドメイン）",
        en: "R&D on autonomous driving systems using reinforcement learning (Innovative Research Excellence, Intelligence & Safety Research Domain)",
      },
      tech: {
        ja: "Python, 強化学習 (A3C)",
        en: "Python, Reinforcement Learning (A3C)",
      },
    },
  ],

  /* --- 学歴 --- */
  education: [
    {
      period: { ja: "2025年4月 – 現在", en: "Apr. 2025 – Present" },
      title: {
        ja: "北海道大学 大学院情報科学院 メディアネットワークコース",
        en: "Graduate School of Information Science and Technology, Hokkaido University",
      },
      note: "",
    },
    {
      period: { ja: "2021年4月 – 2025年3月", en: "Apr. 2021 – Mar. 2025" },
      title: {
        ja: "北海道大学 工学部 情報エレクトロニクス学科 メディアネットワークコース",
        en: "Media and Network Course, Department of Electronics and Information Engineering, School of Engineering, Hokkaido University",
      },
      note: "",
    },
    {
      period: { ja: "2018年4月 – 2021年3月", en: "Apr. 2018 – Mar. 2021" },
      title: {
        ja: "北海道札幌南高等学校",
        en: "Sapporo Minami High School",
      },
      note: "",
    },
  ],

  /* --- スキル (インターン等で使用した技術から作成。自由に編集してください) --- */
  skills: [
    {
      category: { ja: "プログラミング", en: "Programming" },
      items: ["Python", "PyTorch", "SQL (PostgreSQL / MySQL)", "HTML / CSS / JavaScript"],
    },
    {
      category: { ja: "ツール・フレームワーク", en: "Tools & Frameworks" },
      items: ["Docker / Docker Compose", "Git / GitHub", "LangChain", "OpenAI API", "ONNX", "Blender Python API (bpy)", "NVIDIA Jetson"],
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
