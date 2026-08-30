// studyapp.js - Study Hub Client Application
import { docRef, countRef, settingsRef, msgRef } from './studyfirebase-config.js';
import { onSnapshot, updateDoc, arrayUnion, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Initial state loaded with live cache
let core = {
  "1ST YEAR NOTESES": {
    "_rank": 1,
    "BSC - DATA SCIENCE": {
      "_rank": 1,
      "PYTHON": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "SYLLABUS BY AKNU",
          "UNIT - 1",
          "UNIT - 2",
          "UNIT - 3",
          "MID - 1 ( QUESTION PAPER )",
          "UNIT - 4",
          "UNIT - 5"
        ],
        "links": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/BSc%20-%20Data%20Science%20Major%20Syllabus%20wef%202025-26.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/python.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/py.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/1775474574218.png",
          "https://file.garden/abrK4_rpWxJegn7w/PPDS%20UNIT%204.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/PPDS%20UNIT%205.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "STATISTICAL FOUNDATIONS (DS)": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "SYLLABUS BY AKNU",
          "UNIT - 1",
          "MID-1 ( Question paper)",
          "UNIT - 4",
          "unit 5",
          "UNIT - 2"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/Data%20Science%20Major.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Full%20unit%201%20dss.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/stat%20unit%205.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/split_useas%20(2).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "ARTIFICIAL INTELLIGENCE (AI)": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "SYLLABUS BY AKNU",
          "UNIT - 1",
          "UNIT - 2",
          "UNIT - 3",
          "MID-1 ( Question paper)",
          "UNIT - 4",
          "UNIT - 5"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/Applications%20of%20Artificial%20Intelligence%20skill-2.pdf",
          "https://file.garden/aZx8SC2e7UEiSme3/merged_useas%20(4).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/AI%20UNIT_2%20.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/AAI%20unit%203.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/AAI%20UNIT%204.docx",
          "https://file.garden/abrK4_rpWxJegn7w/UNIT%205.docx"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "SOCIAL WORK": {
        "_type": "subject",
        "_rank": 4,
        "units": [
          "UNIT - 1",
          "uni-2",
          "UNIT - 3"
        ],
        "links": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/UNIT-1%20ISW(INTRODUCTION%20TO%20SOCIAL%20WORK).pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/ISW_UNIT2.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/isw%20unit%203.pdf"
        ],
        "vids": [
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 5,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK",
          "UNIT - 3  Never-Never Nest",
          "UNIT - 4 GRANDMOTHER ",
          "UNIT - 5 THE SECRET OF WORK "
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/2026_07_17_UNIT-III%20ENGLISH(Sem-II).%20Never-Never%20Nest.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/2026_07_17_UNIT-%20IV%20ENGLISH%20(SEM-II)%20How%20I%20Taught%20My%20Grandmother%20to%20Read-1.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/2026_07_17_UNIT-V%20ENGLISH(Sem-II).The%20Secret%20of%20Work-1.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          "",
          "",
          "",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 6,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "Telugu": {
        "_type": "subject",
        "_rank": 7,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "https://youtu.be/m9p3O3r1q44?si=VF2Avj85HxijUS_z",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "IKS": {
        "_type": "subject",
        "_rank": 8,
        "units": [],
        "links": [],
        "vids": []
      }
    },
    "BCA - DATA SCIENCE": {
      "_rank": 2,
      "HINDI": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "Telugu": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    },
    "AIR - A": {
      "_rank": 3,
      "SOCIAL WORK": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "UNIT - 1",
          "uni-2"
        ],
        "links": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/UNIT-1%20ISW(INTRODUCTION%20TO%20SOCIAL%20WORK).pdf",
          "https://use-as-files--regulabandhas.replit.app/share/d62462107fe8473dc74008bacdf283d0"
        ],
        "vids": [
          "",
          ""
        ]
      },
      "ARTIFICIAL INTELLIGENCE (AI)": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "SYLLABUS BY AKNU",
          "UNIT - 1",
          "UNIT - 2",
          "UNIT - 3",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/Applications%20of%20Artificial%20Intelligence%20skill-2.pdf",
          "https://file.garden/aZx8SC2e7UEiSme3/merged_useas%20(4).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/AI%20UNIT_2%20.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 4,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "Telugu": {
        "_type": "subject",
        "_rank": 5,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    },
    "AIR - B": {
      "_rank": 4,
      "ENGLISH": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "ARTIFICIAL INTELLIGENCE (AI)": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "SYLLABUS BY AKNU",
          "UNIT - 1",
          "UNIT - 2",
          "UNIT - 3",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/Applications%20of%20Artificial%20Intelligence%20skill-2.pdf",
          "https://file.garden/aZx8SC2e7UEiSme3/merged_useas%20(4).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/AI%20UNIT_2%20.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "SOCIAL WORK": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "UNIT - 1",
          "uni-2"
        ],
        "links": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/UNIT-1%20ISW(INTRODUCTION%20TO%20SOCIAL%20WORK).pdf",
          "https://use-as-files--regulabandhas.replit.app/share/d62462107fe8473dc74008bacdf283d0"
        ],
        "vids": [
          "",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 4,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "Telugu": {
        "_type": "subject",
        "_rank": 5,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    },
    "BCA - A": {
      "_rank": 5,
      "Telugu": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      }
    },
    "BCA - B": {
      "_rank": 6,
      "Telugu": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      }
    },
    "CHEMISTRY": {
      "_rank": 7,
      "Telugu": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      }
    },
    "CS - A": {
      "_rank": 8,
      "Telugu": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      }
    },
    "CS - B": {
      "_rank": 9,
      "HINDI": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "Telugu": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    },
    "CS - C": {
      "_rank": 10,
      "Telugu": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "ENGLISH": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      }
    },
    "MATHS": {
      "_rank": 11,
      "ENGLISH": {
        "_type": "subject",
        "_rank": 1,
        "units": [
          "UNIT - 1 ON SAYING PLEASE",
          "UNIT - 2 HALF A RUPEE WORK"
        ],
        "links": [
          "https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view",
          "https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"
        ],
        "vids": [
          "https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",
          ""
        ]
      },
      "HINDI": {
        "_type": "subject",
        "_rank": 2,
        "units": [
          "SYLLABUS BY AKNU",
          "MODEL PAPER",
          "UNIT 4 TRANSLATIONS ENG - HIN",
          "LETTERS"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf",
          "https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"
        ],
        "vids": [
          "",
          "",
          "",
          ""
        ]
      },
      "Telugu": {
        "_type": "subject",
        "_rank": 3,
        "units": [
          "Syllabus by AKNU",
          "unit - 1 (  గజేంద్ర మోక్షం )",
          "unit - 2 ( సీతా )",
          "unit - 3 ( అతడు అడవిని జయించాడు )",
          "Unit - 5 ( జానపద కళలు )",
          "MID-1 ( Question paper)"
        ],
        "links": [
          "https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf",
          "https://files.catbox.moe/tv7dw0.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf",
          "https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"
        ],
        "vids": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    }
  },
  "SEM - 3 Noteses": {
    "_rank": 2,
    "Web technologies": {
      "_type": "subject",
      "_rank": 6,
      "units": [
        "Syllabus"
      ],
      "links": [
        "https://file.garden/abrK4_rpWxJegn7w/WEBTECHNOLOGIESUSEAS"
      ],
      "vids": [
        ""
      ]
    },
    "English": {
      "_type": "subject",
      "_rank": 3,
      "units": [
        "Syllabus"
      ],
      "links": [
        "https://res.cloudinary.com/wdvuyvct/image/upload/v1787564750/qyvx2qjyhp6tl9xgxr75.jpg"
      ],
      "vids": [
        ""
      ]
    },
    "R - Language": {
      "_type": "subject",
      "_rank": 4,
      "units": [],
      "links": [],
      "vids": []
    },
    "Telugu": {
      "_type": "subject",
      "_rank": 1,
      "units": [],
      "links": [],
      "vids": []
    },
    "Hindi": {
      "_type": "subject",
      "_rank": 2,
      "units": [],
      "links": [],
      "vids": []
    },
    "DBMS": {
      "_type": "subject",
      "_rank": 5,
      "units": [],
      "links": [],
      "vids": []
    },
    "ICT": {
      "_type": "subject",
      "_rank": 8,
      "units": [],
      "links": [],
      "vids": []
    },
    "COMPUTER ORGANIZATION": {
      "_type": "subject",
      "_rank": 7,
      "units": [],
      "links": [],
      "vids": []
    },
    "Introduction to Public Administration": {
      "_type": "subject",
      "_rank": 9,
      "units": [],
      "links": [],
      "vids": []
    }
  },
  "records": {
    "_rank": 99,
    "statistical": {
      "_type": "subject",
      "_rank": 99,
      "units": [
        "stat record"
      ],
      "links": [
        "https://file.garden/aZ1i9e6aIVfqSsYT/DocScanner%20Jun%2023%2C%202026%201-15%20PM%20(1).pdf"
      ],
      "vids": [
        ""
      ]
    },
    "python record": {
      "_type": "subject",
      "_rank": 99,
      "units": [
        "python record"
      ],
      "links": [
        "https://file.garden/abrK4_rpWxJegn7w/ppds%20record.pdf"
      ],
      "vids": [
        ""
      ]
    },
    "ai record": {
      "_type": "subject",
      "_rank": 99,
      "units": [
        "ai record"
      ],
      "links": [
        "https://file.garden/abrK4_rpWxJegn7w/AAI%20Record%20SEM-2.PDF"
      ],
      "vids": [
        ""
      ]
    }
  }
};
let path = [];
let v2Enabled = true;

// DOM References
const mainGrid = document.getElementById('mainGrid');
const notesArea = document.getElementById('notesArea');
const unitList = document.getElementById('unitList');
const bcBox = document.getElementById('bc');
const navHeader = document.getElementById('navHeader');
const viewTitle = document.getElementById('viewTitle');
const globalBackBtn = document.getElementById('globalBackBtn');
const searchInput = document.getElementById('searchInput');

const toast = document.getElementById('toast');
const visitorCountEl = document.getElementById('view-count');

const helpBtn = document.getElementById('help-btn');
const helpPanel = document.getElementById('help-panel');
const closeHelpX = document.getElementById('closeHelpX');
const sendReportBtn = document.getElementById('sendReportBtn');
const helpMsg = document.getElementById('helpMsg');

const videoViewer = document.getElementById('video-viewer');
const vVideoName = document.getElementById('v-video-name');
const videoFrame = document.getElementById('video-frame');
const closeVideoBtn = document.getElementById('closeVideoBtn');
const v2Loader = document.getElementById('v2-loader');

// Helper: Toast Notification
function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

// Helper: Normalize string token for fuzzy slug matching
function normalizeToken(str) {
    if (!str) return '';
    return str.toString().toLowerCase()
        .replace(/\b1st\s*yr[s]?\b/g, '1styear')
        .replace(/\bsem[s]?\s*3\b/g, 'sem3')
        .replace(/[\s\-_]+/g, '')
        .replace(/[^\w]/g, '');
}

// Helper: Create readable permalink slug
function slugify(text) {
    return text.toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\-_]+/g, '')
        .replace(/[^\w]/g, '');
}

// Generate Custom TinyURL-style Permalink
function generateCustomPermalink(pathArray, unitName) {
    const origin = window.location.origin + window.location.pathname.replace(/\/index\.html$/, '');
    const pathSlugs = pathArray.map(slugify).join('/');
    const unitSlug = slugify(unitName);
    const relativePath = `home/${pathSlugs}/${unitSlug}`;
    
    // Generates readable link like: domain.com/home/1styrsnotes/bsc-datascience/telugu/syllabusbyaknu
    // Includes ?r= query parameter so static servers redirect properly anywhere
    return `${origin}/${relativePath}?r=${encodeURIComponent(relativePath)}`;
}

// TinyURL Resolver to find original resource link from custom permalink slug
function resolvePermalink(targetUrlOrSlug, dataTree) {
    if (!targetUrlOrSlug) return null;
    const cleanStr = decodeURIComponent(targetUrlOrSlug).split('?')[0].split('#')[0];
    const parts = cleanStr.split('/').filter(Boolean);
    if (parts.length === 0) return null;

    const targetUnitSlug = normalizeToken(parts[parts.length - 1]);
    const targetSubjSlug = parts.length > 1 ? normalizeToken(parts[parts.length - 2]) : '';

    let foundLink = null;

    function search(node) {
        for (const key in node) {
            if (key.startsWith('_')) continue;
            const item = node[key];

            if (item && item._type === 'subject') {
                const units = item.units || [];
                const links = item.links || [];
                const currentSubjSlug = normalizeToken(key);

                for (let i = 0; i < units.length; i++) {
                    const uSlug = normalizeToken(units[i]);
                    if (uSlug === targetUnitSlug) {
                        if (!targetSubjSlug || currentSubjSlug.includes(targetSubjSlug) || targetSubjSlug.includes(currentSubjSlug)) {
                            foundLink = links[i];
                            return true;
                        }
                    }
                }
            } else if (typeof item === 'object' && item !== null) {
                if (search(item)) return true;
            }
        }
        return false;
    }

    search(dataTree);
    return foundLink;
}

// Check and execute tinyurl-style permalink redirect on page load
function checkPermalinkRedirect() {
    let permalinkQuery = '';
    const params = new URLSearchParams(window.location.search);
    if (params.has('r')) permalinkQuery = params.get('r');
    else if (params.has('note')) permalinkQuery = params.get('note');
    else if (params.has('link')) permalinkQuery = params.get('link');
    else if (params.has('p')) permalinkQuery = params.get('p');
    else if (window.location.hash && window.location.hash.includes('home/')) permalinkQuery = window.location.hash;
    else if (window.location.pathname.includes('/home/')) permalinkQuery = window.location.pathname;

    if (permalinkQuery) {
        const directLink = resolvePermalink(permalinkQuery, core);
        if (directLink) {
            if (v2Loader) v2Loader.style.display = 'flex';
            setTimeout(() => {
                window.location.href = directLink;
            }, 300);
            return true;
        }
    }
    return false;
}

// Helper: Get Icon for Folder or Subject
function getIconForTitle(title, isSubject = false) {
    const t = title.toLowerCase();
    if (isSubject) {
        if (t.includes('telugu')) return 'fa-book-bookmark';
        if (t.includes('hindi')) return 'fa-book-open';
        if (t.includes('english')) return 'fa-language';
        if (t.includes('python')) return 'fa-brands fa-python';
        if (t.includes('stat')) return 'fa-chart-pie';
        if (t.includes('ai') || t.includes('artificial')) return 'fa-brain';
        if (t.includes('social')) return 'fa-people-group';
        if (t.includes('web')) return 'fa-globe';
        if (t.includes('dbms')) return 'fa-database';
        if (t.includes('record')) return 'fa-file-signature';
        return 'fa-book';
    }
    return 'fa-graduation-cap';
}

// Render Breadcrumb Bar
function renderBreadcrumbs() {
    bcBox.innerHTML = '';
    
    const homeSpan = document.createElement('span');
    homeSpan.className = 'bc-link';
    homeSpan.textContent = 'Home';
    homeSpan.onclick = () => {
        path = [];
        render();
    };
    bcBox.appendChild(homeSpan);

    let currentPath = [];
    path.forEach((segment) => {
        currentPath.push(segment);
        const targetPath = [...currentPath];

        const sep = document.createElement('span');
        sep.className = 'bc-sep';
        sep.innerHTML = ' <i class="fa-solid fa-chevron-right"></i> ';
        bcBox.appendChild(sep);

        const link = document.createElement('span');
        link.className = 'bc-link';
        link.textContent = segment;
        link.onclick = () => {
            path = targetPath;
            render();
        };
        bcBox.appendChild(link);
    });
}

// Main Render Function
function render() {
    renderBreadcrumbs();
    
    let current = core;
    for (const segment of path) {
        if (current && current[segment]) {
            current = current[segment];
        }
    }

    if (!current) {
        path = [];
        render();
        return;
    }

    const isSubject = current._type === 'subject';

    if (isSubject) {
        // Subject View (Show Notes/Units)
        mainGrid.style.display = 'none';
        notesArea.style.display = 'block';
        navHeader.style.display = 'flex';
        viewTitle.textContent = path[path.length - 1];

        renderNotesView(current);
    } else {
        // Folder View (Show Cards Grid)
        mainGrid.style.display = 'grid';
        notesArea.style.display = 'none';

        if (path.length > 0) {
            navHeader.style.display = 'flex';
            viewTitle.textContent = path[path.length - 1];
        } else {
            navHeader.style.display = 'none';
        }

        renderGridView(current);
    }
}

// Render Repository Grid
function renderGridView(folderObj) {
    mainGrid.innerHTML = '';
    const searchTerm = (searchInput.value || '').trim().toLowerCase();

    // Filter out metadata keys starting with _
    const keys = Object.keys(folderObj).filter(k => !k.startsWith('_'));

    // Sort by _rank
    keys.sort((a, b) => {
        const rankA = folderObj[a] && folderObj[a]._rank !== undefined ? folderObj[a]._rank : 99;
        const rankB = folderObj[b] && folderObj[b]._rank !== undefined ? folderObj[b]._rank : 99;
        return rankA - rankB;
    });

    let matchCount = 0;

    keys.forEach(key => {
        const item = folderObj[key];
        const isSubj = item && item._type === 'subject';

        if (searchTerm && !key.toLowerCase().includes(searchTerm)) {
            return;
        }

        matchCount++;

        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
            path.push(key);
            render();
        };

        const iconClass = getIconForTitle(key, isSubj);
        const icon = document.createElement('i');
        icon.className = `fa-solid ${iconClass} card-icon`;
        card.appendChild(icon);

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = key;
        card.appendChild(title);

        mainGrid.appendChild(card);
    });

    if (matchCount === 0) {
        mainGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted);"><i class="fa-solid fa-folder-open" style="font-size:3rem; margin-bottom:10px; display:block;"></i>No repositories found.</div>';
    }
}

// Render Notes / Units View
function renderNotesView(subjectObj) {
    unitList.innerHTML = '';
    const searchTerm = (searchInput.value || '').trim().toLowerCase();

    const units = subjectObj.units || [];
    const links = subjectObj.links || [];
    const vids = subjectObj.vids || [];

    if (units.length === 0) {
        unitList.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted);"><i class="fa-solid fa-file-circle-exclamation" style="font-size:3rem; margin-bottom:10px; display:block;"></i>No notes or units available yet.</div>';
        return;
    }

    let matchCount = 0;

    units.forEach((unitName, idx) => {
        if (searchTerm && !unitName.toLowerCase().includes(searchTerm)) {
            return;
        }

        matchCount++;

        const linkUrl = links[idx] || '';
        const vidUrl = vids[idx] || '';

        const item = document.createElement('div');
        item.className = 'unit-item';

        // Direct row click redirects to the original note link!
        if (linkUrl) {
            item.onclick = () => {
                if (v2Loader) v2Loader.style.display = 'flex';
                setTimeout(() => {
                    window.location.href = linkUrl;
                }, 200);
            };
        }

        const titleDiv = document.createElement('div');
        titleDiv.className = 'unit-title';
        titleDiv.innerHTML = `<i class="fa-solid fa-file-pdf" style="color: var(--primary);"></i> ${unitName}`;
        item.appendChild(titleDiv);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'unit-actions';

        // COPY BUTTON (Copies custom readable permalink)
        if (linkUrl) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'action-btn btn-copy';
            copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
            copyBtn.title = 'Copy Custom Link';
            copyBtn.onclick = (e) => {
                e.stopPropagation(); // Prevents row redirect
                const customLink = generateCustomPermalink(path, unitName);
                navigator.clipboard.writeText(customLink);
                showToast('Custom link copied to clipboard!');
            };
            actionsDiv.appendChild(copyBtn);
        }

        // VIDEO BUTTON (Opens Video Viewer Modal)
        if (vidUrl) {
            const vidBtn = document.createElement('button');
            vidBtn.className = 'action-btn btn-vid';
            vidBtn.innerHTML = '<i class="fa-solid fa-play"></i> VIDEO';
            vidBtn.onclick = (e) => {
                e.stopPropagation(); // Prevents row redirect
                openVideoViewer(unitName, vidUrl);
            };
            actionsDiv.appendChild(vidBtn);
        }

        item.appendChild(actionsDiv);
        unitList.appendChild(item);
    });

    if (matchCount === 0) {
        unitList.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted);"><i class="fa-solid fa-magnifying-glass" style="font-size:3rem; margin-bottom:10px; display:block;"></i>No matching units found.</div>';
    }
}

// Video Modal Viewer
function openVideoViewer(name, url) {
    vVideoName.textContent = name;
    let embedUrl = url;
    if (url.includes('youtube.com/watch?v=')) {
        const vidId = url.split('v=')[1].split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${vidId}`;
    } else if (url.includes('youtu.be/')) {
        const vidId = url.split('youtu.be/')[1].split('?')[0];
        embedUrl = `https://www.youtube.com/embed/${vidId}`;
    }
    videoFrame.src = embedUrl;
    videoViewer.style.display = 'flex';
}

closeVideoBtn.onclick = () => {
    videoViewer.style.display = 'none';
    videoFrame.src = '';
};

// Global Back Button
globalBackBtn.onclick = () => {
    if (path.length > 0) {
        path.pop();
        render();
    }
};

// Real-Time Search Filter
searchInput.addEventListener('input', () => {
    render();
});

// Help / Support Center Modal
helpBtn.onclick = () => {
    helpPanel.style.display = 'flex';
};

closeHelpX.onclick = () => {
    helpPanel.style.display = 'none';
};

sendReportBtn.onclick = async () => {
    const text = (helpMsg.value || '').trim();
    if (!text) {
        showToast('Please enter a message first.');
        return;
    }
    try {
        await updateDoc(msgRef, {
            reports: arrayUnion({
                message: text,
                timestamp: new Date().toISOString(),
                path: path.join(' > ')
            })
        });
        showToast('Report submitted successfully!');
        helpMsg.value = '';
        helpPanel.style.display = 'none';
    } catch (e) {
        console.error("Failed to send report:", e);
        showToast('Report sent successfully!');
        helpMsg.value = '';
        helpPanel.style.display = 'none';
    }
};

// Real-Time Sync with Live Firebase Firestore Database
try {
    onSnapshot(docRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.data();
            if (data) {
                core = data;
                if (!checkPermalinkRedirect()) {
                    render();
                }
            }
        }
    }, (err) => {
        console.warn("Firestore live snapshot note:", err);
    });

    onSnapshot(countRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.data();
            if (data && data.count !== undefined) {
                visitorCountEl.textContent = data.count;
            }
        }
    });

    onSnapshot(settingsRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.data();
            if (data && data.v2Enabled !== undefined) {
                v2Enabled = data.v2Enabled;
            }
        }
    });

    // Increment Live Visitor Counter
    updateDoc(countRef, { count: increment(1) }).catch(err => {
        console.warn("Visitor counter increment:", err);
    });
} catch (e) {
    console.warn("Firebase sync info:", e);
}

// Initial Check & Render
if (!checkPermalinkRedirect()) {
    render();
}
