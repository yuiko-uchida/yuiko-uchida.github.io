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
      ja: "修士課程2年",
      en: "Second-year Master's Student",
    },
    email: "uchida@lmd.ist.hokudai.ac.jp",
    links: [
      {
        label: "Google Scholar",
        url: "https://scholar.google.co.jp/citations?user=pyVn20EAAAAJ",
      },
      { label: "Twitter", url: "https://x.com/yuiko_uchida_" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/yuiko-uchida-1098b4375",
      },
      // {
      //   label: "OpenReview",
      //   url: "https://openreview.net/profile?id=~Yuiko_Uchida1",
      // },
    ],
    // 顔写真を使う場合は images/profile.jpg などに置いてパスを指定。空文字ならイニシャル表示。
    photo: "images/profile.jpeg",
  },

  about: {
    ja: "3Dシーンの評価に関する研究を行っています。再構成・生成された3Dシーンの品質をオブジェクト単位で捉える評価指標の構築や、ロボット操作などの下流タスクの観点からの評価に取り組んでいます。",
    en: "My research focuses on the evaluation of 3D scenes. I develop object-level quality metrics for reconstructed and generated 3D scenes, and study how scene quality affects downstream tasks such as robotic manipulation.",
  },

  interests: [
    { ja: "コンピュータビジョン", en: "Computer Vision" },
    { ja: "評価指標", en: "Evaluation Metrics" },
    { ja: "3Dシーン再構成・生成", en: "3D Scene Reconstruction & Generation" },
    { ja: "ロボットビジョン", en: "Robot Vision" },
  ],

  news: [
    {
      date: "2026-09",
      text: {
        ja: "Visual Computing 2026 にてポスター発表を行いました。",
        en: "Presented at Visual Computing 2026.",
      },
    },
    {
      date: "2026-08",
      text: {
        ja: "IEEE Access に主著論文「Rethinking 3-D Scene Evaluation from an Object-Centric Perspective」が採択されました。",
        en: "My first-authored paper \u201cRethinking 3-D Scene Evaluation from an Object-Centric Perspective\u201d has been accepted to IEEE Access.",
      },
    },
    {
      date: "2026-08",
      text: {
        ja: "画像の認識・理解シンポジウム (MIRU) 2026 にてポスター発表を行いました。",
        en: "Presented at the Meeting on Image Recognition and Understanding (MIRU) 2026.",
      },
    },
    {
      date: "2026-02",
      text: {
        ja: "映像情報メディア学会技術報告にて口頭発表を行いました。",
        en: "Presented at the ITE Technical Report meeting.",
      },
    },
    {
      date: "2025-10",
      text: {
        ja: "ICCV 2025 UniLight Workshop にて口頭・ポスター発表を行いました。",
        en: "Gave an oral and poster presentation at an ICCV 2025 UniLight Workshop.",
      },
    },
    {
      date: "2025-02",
      text: {
        ja: "The 2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize を受賞しました。",
        en: "Received The 2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize.",
      },
    },
    {
      date: "2024-12",
      text: {
        ja: "SIGGRAPH Asia 2024 Technical Communications にて口頭発表を行いました。",
        en: "Gave an oral presentation at SIGGRAPH Asia 2024 Technical Communications.",
      },
    },
  ],

  publications: {
    /* --- 論文誌 --- */
    journal: [
      {
        authors:
          "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title:
          "Rethinking 3-D Scene Evaluation From an Object-Centric Perspective",
        venue: {
          ja: "IEEE Access, vol. 14, pp. 139965–139978",
          en: "IEEE Access, vol. 14, pp. 139965–139978",
        },
        year: 2026,
        links: [
          { label: "DOI", url: "https://doi.org/10.1109/ACCESS.2026.3727601" },
        ],
      },
    ],

    /* --- 国際会議 --- */
    international: [
      {
        authors:
          "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title:
          "Objectness Similarity: Capturing Object-Level Fidelity in 3D Scene Evaluation",
        venue: {
          ja: "IEEE/CVF International Conference on Computer Vision (ICCV) Workshops（口頭・ポスター発表）",
          en: "IEEE/CVF International Conference on Computer Vision (ICCV) Workshops (Oral and Poster)",
        },
        year: 2025,
        links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.09143" }],
      },
      {
        authors:
          "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title:
          "An Evaluation Metric for Single Image-to-3D Models Based on Object Detection Perspective",
        venue: {
          ja: "SIGGRAPH Asia 2024 Technical Communications（口頭発表）",
          en: "SIGGRAPH Asia 2024 Technical Communications (Oral)",
        },
        year: 2024,
        links: [
          { label: "DOI", url: "https://doi.org/10.1145/3681758.3697992" },
        ],
      },
      {
        authors:
          "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title:
          "An Evaluation Metric for Single Image-to-3D Models Based on a Class Confidence Score of Object Detection Models",
        venue: {
          ja: "Proc. 2024 IEEE 13th Global Conference on Consumer Electronics (GCCE), pp. 1163–1164（ポスター発表）",
          en: "Proc. 2024 IEEE 13th Global Conference on Consumer Electronics (GCCE), pp. 1163–1164 (Poster)",
        },
        year: 2024,
        links: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/GCCE62371.2024.10761036",
          },
        ],
      },
    ],

    /* --- 国内学会・シンポジウム --- */
    domestic: [
      {
        authors: {
          ja: "内田 結子, 藤後 廉, 前田 圭介, 小川 貴弘, 長谷山 美紀",
          en: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        },
        title: {
          ja: "ロボット把持姿勢推定に対する3D再構成シーン評価指標の有効性の検証",
          en: "Validating 3D Scene Reconstruction Metrics for Robotic Grasp Pose Estimation (in Japanese)",
        },
        venue: {
          ja: "Visual Computing (VC)",
          en: "Visual Computing (VC)",
        },
        year: 2026,
        links: [],
      },
      {
        authors: {
          ja: "内田 結子, 藤後 廉, 前田 圭介, 小川 貴弘, 長谷山 美紀",
          en: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        },
        title: {
          ja: "3D再構成シーンの品質劣化がロボットの把持姿勢推定に与える影響—人間中心の評価指標と把持姿勢誤差の相関分析—",
          en: "Impact of Quality Degradation in Reconstructed 3D Scenes on Robotic Grasp Pose Estimation: A Correlation Analysis between Human-Centric Metrics and Grasp Pose Errors (in Japanese)",
        },
        venue: {
          ja: "画像の認識・理解シンポジウム (MIRU)",
          en: "Meeting on Image Recognition and Understanding (MIRU)",
        },
        year: 2026,
        links: [],
      },
      {
        authors: {
          ja: "内田 結子, 藤後 廉, 前田 圭介, 小川 貴弘, 長谷山 美紀",
          en: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        },
        title: {
          ja: "Open-Vocabulary物体検出モデルを導入したオブジェクト中心の3Dシーン評価指標に関する検討",
          en: "A Note on an Object-Centric Metric for 3D Scenes Based on Open-Vocabulary Object Detection Models (in Japanese)",
        },
        venue: {
          ja: "映像情報メディア学会技術報告, vol. 50, no. 5, pp. 384–388",
          en: "ITE Technical Report, vol. 50, no. 5, pp. 384–388",
        },
        year: 2026,
        links: [],
      },
      {
        authors:
          "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        title:
          "An Object-Focused Metric for 3D Scene Evaluation Based on Features of an Object Detection Model",
        venue: {
          ja: "画像の認識・理解シンポジウム (MIRU)",
          en: "Meeting on Image Recognition and Understanding (MIRU)",
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
          en: "A Note on an Evaluation Metric for Single Image-to-3D Models Based on Confidence Scores of Object Detection Models (in Japanese)",
        },
        venue: {
          ja: "令和6年度 電気・情報関係学会北海道支部連合大会, pp. 91–92",
          en: "2024 Hokkaido Chapters Joint Convention of the Institutes of Electrical and Information Engineers, pp. 91–92",
        },
        year: 2024,
        links: [],
      },
    ],

    /* --- その他（研究会など） --- */
    other: [
      {
        authors: {
          ja: "内田 結子, 藤後 廉, 前田 圭介, 小川 貴弘, 長谷山 美紀",
          en: "Yuiko Uchida, Ren Togo, Keisuke Maeda, Takahiro Ogawa, and Miki Haseyama",
        },
        title: {
          ja: "動的シーン再構成におけるオブジェクト単位の品質評価と低品質オブジェクトの選択的修復に関する検討",
          en: "A Note on Object-Level Quality Assessment and Selective Refinement of Low-Quality Objects in 4D Scene Reconstruction (in Japanese)",
        },
        venue: {
          ja: "スマートインフォメディアシステム研究会 (SIS研究会)（発表予定）",
          en: "IEICE Technical Committee on Smart Info-Media Systems (SIS) (to be presented)",
        },
        year: 2026,
        links: [],
      },
    ],
  },

  awards: [
    {
      year: 2025,
      title:
        "The 2024 IEEE Sapporo Section Student Paper Contest Encouraging Prize",
      note: {
        ja: "令和6年度 電気・情報関係学会北海道支部連合大会における講演発表に関して授与（2025年2月）",
        en: "Awarded in February 2025 for the presentation at the 2024 Hokkaido Chapters Joint Convention of the Institutes of Electrical and Information Engineers",
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
        en: "Machine Learning Engineer (Long-term Intern), DexAI Co., Ltd.",
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
      period: {
        ja: "2025年8月 – 9月（2週間）",
        en: "Aug. – Sep. 2025 (2 weeks)",
      },
      title: {
        ja: "株式会社日立製作所 夏季インターン",
        en: "Summer Intern, Hitachi, Ltd.",
      },
      note: {
        ja: "生成AIを用いた現場労働者のサポートシステムに関する研究（中央研究所 研究開発グループ 知能ビジョン研究部）",
        en: "Research on generative-AI-based support systems for field workers",
      },
      tech: "Python, PyTorch, AutoGen, OpenAI API, CLIP, DINOv2",
    },
    {
      period: { ja: "2025年9月（1週間）", en: "Sep. 2025 (1 week)" },
      title: {
        ja: "株式会社本田技術研究所 夏季インターン",
        en: "Summer Intern, Honda R&D Co., Ltd.",
      },
      note: {
        ja: "強化学習による自動運転システムの研究開発（先進技術研究所 知能化・安全研究ドメイン）",
        en: "R&D on autonomous driving systems using reinforcement learning",
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
  // skills: [
  //   {
  //     category: { ja: "プログラミング", en: "Programming" },
  //     items: [
  //       "Python",
  //       "PyTorch",
  //       "SQL (PostgreSQL / MySQL)",
  //       "HTML / CSS / JavaScript",
  //     ],
  //   },
  //   {
  //     category: { ja: "ツール・フレームワーク", en: "Tools & Frameworks" },
  //     items: [
  //       "Docker / Docker Compose",
  //       "Git / GitHub",
  //       "LangChain",
  //       "OpenAI API",
  //       "ONNX",
  //       "Blender Python API (bpy)",
  //       "NVIDIA Jetson",
  //     ],
  //   },
  //   {
  //     category: { ja: "言語", en: "Languages" },
  //     items: [
  //       { ja: "日本語（ネイティブ）", en: "Japanese (native)" },
  //       { ja: "英語", en: "English" },
  //     ],
  //   },
  // ],
};
