type Folder = {
  name: string;
  link?: string;
  folders?: Folder[];
};

let folders: Folder[] = [
  {
    name: "Chemistry",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "UNIT 1 Green Chemistry",
            link: "https://docs.google.com/document/d/1e_LXuvFgWcVSDECAiYCHj1G0ohxvWbwf/view",
          },
          {
            name: "Module1",
            link: "https://docs.google.com/document/d/1noLB5pX1IThFbfgdBuqK-Se75Faid_w_Q32kF7PHU0Q/view",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "MODULE-2",
            link: "https://docs.google.com/document/d/1IYoqF9_Cpux_IBzhooBcuuF8K2Txg0GD73-8pcuFrmU/view",
          },
          {
            name: "unit 2 NMR",
            link: "https://docs.google.com/document/d/1sSdKu4zNxXvjAw8nWrMC4zZ5fb0n_9yq/view",
          },
          {
            name: "unit 2 stereochemistry",
            link: "https://docs.google.com/document/d/14UYYCX5F5wd_mWsMht2npMOoDaBFdhfu/view",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Module 3",
            link: "https://docs.google.com/document/d/1_ORZWVeYksy9i9huDuG3T7pDjE_YD6M8x5fl7DFN3AA/view",
          },
          {
            name: "unit 3 cement",
            link: "https://docs.google.com/document/d/1VRzdPBiqxh_ueiUW2u0yxqZqNX0pTC4E/view",
          },
          {
            name: "unit 3 corrosion and  POP",
            link: "https://docs.google.com/document/d/1K6MeD707QwSvjwCircmBvaHxcTRTLZAo/view",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "module 4",
            link: "https://docs.google.com/document/d/1QATQFu59DymjxL-3I3zA9SF_xUS1bKm0u1BG2iABo3I/view",
          },
          {
            name: "unit 4 hardness ,alkalinity,biogas",
            link: "https://docs.google.com/document/d/10s_2sCpFR0dOaMEPxrnSSBhFX7-H_9Hd/view",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "unit 5 polymer and organometallic compounds",
            link: "https://docs.google.com/document/d/1f5mJy_VH5atZSjondgTQPkykqpeLCDgI/view",
          },
          {
            name: "Module 5",
            link: "https://docs.google.com/document/d/1HTwZenQorj7BCNfUH7Qj8AxqVOuEr1KU00graIqLI3s/view",
          },
        ],
      },
      {
        name: "LAB",
        folders: [
          {
            name: "All Experiments (2)",
            link: "https://docs.google.com/document/d/1sOfLhVMSrluMJIPfpAi2Kb6vxquUo5dnHZVl8T7doMc/view",
          },
          {
            name: "exp",
            link: "https://docs.google.com/document/d/1HkLdZAMmAH_UeateyzGdDTz4rhksO2sKFTlw4r2MNZg/view",
          },
          {
            name: "LAB",
            link: "https://docs.google.com/document/d/1MUIzB9L0iYvCUeZNLEl9_9L5mZnNgZDc/view",
          },
        ],
      },
      {
        name: "Chem PYQ",
        link: "https://docs.google.com/document/d/1wSTXo1ZGbmDpCWia9GfTiDT1i674g9j1dadZCkXH-hk/view",
      },
      {
        name: "Chemistry All Unit MCQS_ 3 ",
        link: "https://drive.google.com/file/d/1ooqsrd_i_58KbMAbPptAW-RZOcDS3BDF/view?usp=drive_link",
      },
    ],
  },
  {
    name: "Physics",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "unit1",
            link: "https://docs.google.com/document/d/1d-cRddUFJ3S3EW21UQ0OIGtlF_Tsw5DBBm6pgBw72e0/view",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "maxwell equation",
            link: "https://docs.google.com/document/d/1_W3hvkzXbgyNgjxYYmn4GOCquXugnRbactGkMdbYSHU/view",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Unit 2",
            link: "https://docs.google.com/document/d/1Wr32CwUaHDJTsiS0ib07ZWVfj8BB9ddeeg29OGQW8Lw/view",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "Unit 4 LASER (Part 1)",
            link: "https://drive.google.com/open?id=1vBc2BzfosmMdEYQ6EeqWimphiiXg1MvM&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "Unit 4 FIBRE  (Part 2)",
            link: "https://drive.google.com/open?id=1YgCA2KE_h60kJVkEZtszRnTVRL9eQfMs&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "Unit 5 Superconductor part 1",
            link: "https://drive.google.com/open?id=1dCuCb4fjZsfmpxRptsaykuvVZ1Y_a3Xv&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "Unit 5 Nanomaterials (part 2)",
            link: "https://drive.google.com/open?id=1nqyzBYdeELYA-qfrPY1sAph2DutuCC3f&usp=drive_copy",
          },
        ],
      },
    ],
  },
  {
    name: "EVS",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "unit1",
            link: "https://drive.google.com/open?id=1chJo26ePZFA_3kTOT_hL8AWXEu4ypal0&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "unit2",
            link: "https://drive.google.com/open?id=10dTh7IB88aYkgol0aEMknjj14i0iWX-M&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit3-5",
        folders: [
          {
            name: "",
            link: "https://drive.google.com/open?id=1zjKLQ415GQbmJ9sezBz-gP1xMSZBJt2b&usp=drive_copy",
          },
        ],
      },
      {
        name: "EVS PYQ MERGED",
        folders: [
          {
            name: "EVS PYQ MERGED",
            link: "https://drive.google.com/open?id=1TzDNA-RLAVCwHZoaBCgBjQhRkxrghANC&usp=drive_copy",
          },
        ],
      },
      {
        name: "Environment_And_Ecology Quantam",
        folders: [
          {
            name: "Environment_And_Ecology Quantam",
            link: "https://drive.google.com/open?id=1HA6wqtsgK6AfGOQwvDNmM_QI-OPZpi5b&usp=drive_copy",
          },
        ],
      },
      // { name: "unit4", folders: [{ name: "notes" }] },
      // { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Soft Skills",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "unit1 part 1",
            link: "https://docs.google.com/presentation/d/1Sg_kpQsu5amUeJTWY5dDIuvm7FvEugNU/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
          {
            name: "unit1 part 2",
            link: "https://docs.google.com/presentation/d/1yp0_CeKlqACjxYgL7tjrsdMRMJYkdO2J/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
          {
            name: "Subject verb agreement",
            link: "https://drive.google.com/file/d/1R3z3NUu4l275ZafM95Mg9-G5Olc3sSMh/view?usp=drive_link",
          },
          {
            name: "transformation of sentences",
            link: "https://drive.google.com/file/d/1XLljSrQBs1LPG79m1qHO9SL2S10hgIpE/view?usp=drive_link",
          },
          {
            name: "unit1 notes",
            link: "https://docs.google.com/document/d/1DSCZzb8UPW1kIPuupYCmy-3q4cH-Bm5n/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "BAS 205 Unit 2 Notes",
            link: "https://docs.google.com/document/d/1eUHhrqESxD7UtBNSxI0pMTYKBSyZCBgw/view",
          },
          {
            name: "BAS 205_Unit 2_1 PART",
            link: "https://docs.google.com/document/d/1UeeQBvy4YH7wQwBZe7j9y3btgI02cWMGToicKQNP08Y/view",
          },
          {
            name: "BAS 205_Unit 2_1 PART ppt",
            link: "https://docs.google.com/presentation/d/1ShdxwsisADaF-hA4_Xq-7eUUqMX-2LKb/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
          {
            name: "BAS 205_Unit 2_2 PART",
            link: "https://docs.google.com/document/d/1oTSThIc2T_9q0nNkTyCmoH02nRWHD1ROVdTtTF5xc5g/view",
          },
          {
            name: "BAS 205_Unit 2_2 PART ppt",
            link: "https://docs.google.com/presentation/d/19j2D4GCaTOBg7RMLX_O5Q9r70_Xv2Hgm/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
          {
            name: "Note on Speaking style (Unit 2)",
            link: "https://docs.google.com/document/d/1BwiPWwd0NfCvdpPni8ob7jiLWivOq5dK/view",
          },
          {
            name: "ted talks",
            link: "https://docs.google.com/document/d/1jygw5GZfN_6zmLddjh6A615XnSKd0i0_/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "BAS 105 Unit 3 Notes",
            link: "https://docs.google.com/document/d/17yR2Jx5hlVLcg5owObhOBEQaWrRmfXKf/view",
          },
          {
            name: "BAS-105 Unit-3 Part-2",
            link: "https://drive.google.com/file/d/1xm3CYfuLeRrrH--hjYqH2CPy5F_wyMlo/view?",
          },
          {
            name: "BAS-105_Unit-3 _Part-I",
            link: "https://docs.google.com/presentation/d/1Hy94yzJXZcy96LsOOkksPajtDG03YkZ-/view#slide=id.p1",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "unit 4 notes",
            link: "https://docs.google.com/document/d/1sPBMpYN5uRTzDn6aCVqxPnrgY55xuROG/view?usp=drive_link&ouid=109532524461500303727&rtpof=true&sd=true",
          },
          {
            name: "unit 4 notes part1",
            link: "https://docs.google.com/presentation/d/1bUtxUILSCzPxteYC3RtIiuVIv0sseQI0/view?usp=drive_link&ouid=109532524461500303727&rtpof=true&sd=true",
          },
          { name: "unit 4 notes part2",
            link: "https://docs.google.com/presentation/d/1SX26M_bbbKtISTx0i178BOYfXaEo7aIm/view?usp=drive_link&ouid=109532524461500303727&rtpof=true&sd=true" },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "Assigbment Questions Unit-5 BAS 105",
            link: "https://docs.google.com/document/d/15fjkeW0c0ygL23kh4MYSeTaLenKk5_XW/view",
          },
          {
            name: "part 2 additional ppt",
            link: "https://docs.google.com/presentation/d/1H80ebUEq2UDN-kMWHulrjSdpAVldzOyY/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
          {
            name: "Notes _ BAS 105-Unit 5",
            link: "https://docs.google.com/document/d/1rLffLtBMUyPBLRh8Jg3onh--iKdClbWm/view",
          },
          {
            name: "PPT _ BAS 105-Unit 5 Part 2",
            link: "https://docs.google.com/presentation/d/1wtbysPQbJ2wWZkHPxduJ8g2MOJAD2HoO/view?usp=drive_link&ouid=104372189570502350510&rtpof=true&sd=true",
          },
          {
            name: "PPT _ BAS 105-Unit 5 Part 1",
            link: "https://docs.google.com/presentation/d/1wtbysPQbJ2wWZkHPxduJ8g2MOJAD2HoO/view#slide=id.p1",
          }
          
        ],
      },
      {
        name: "soft_skill_quantum (4)",
        link: "https://drive.google.com/file/d/1e8FgwW8sfu1zft93ebw9FN_Wq39oL6ex/view",
      },
    ],
  },
  {
    name: "Mechanical",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "Quiz Unit 1",
            link: "https://docs.google.com/document/u/4/d/10UbVtjf8f4eXAkTyY0Wo7FG6i92qglnA/view",
          },
          {
            name: "Unit 1 part 2",
            link: "https://docs.google.com/presentation/d/1-HDtxqjVAV7m2A66jcx3wjXtXPwD5Rlm/view",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "MCQ .pdf",
            link: "https://drive.google.com/file/d/1W6zkXCpQJrJ8vXiIVNju69GT2bX9uRXK/view?usp=sharing",
          },
          {
            name: "One Shot .pdf",
            link: "https://drive.google.com/file/d/1jbFIKLlftEPUUfLpVvN-Zmf7gh0jXjDz/view?usp=sharing",
          },
          {
            name: "Unit-2 FME (Type Form)",
            link: "https://drive.google.com/file/d/1qz1v4AvbXFNSSbz58kBFzb69HxDOpBmm/view?usp=sharing",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Quiz Unit 3 .docx",
            link: "https://docs.google.com/document/u/4/d/1Z1Y3dQ2ur13lizm3vn89MQpBk_qbJy2_/view",
          },
          {
            name: "Quiz 3 FME .docx",
            link: "https://docs.google.com/document/d/1hM5ZJNQy4S9uZMWUYPu8vokMSA5gtOQU/view",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "Unit 4 Mcq",
            link: "https://docs.google.com/document/d/1fAzjqCjsBoCVj_JMxYl-ZXyjPzbZP0UE/view",
          },
          {
            name: "Unit 4 25 question quiz",
            link: "https://docs.google.com/document/d/1Qs6YKFpWE_tQMOQxiSIxM7kFqvDe_FqP/view",
          },
        ],
      },
      {
        name: "FMEM Question Paper Set 2 .doc",
        link: "https://docs.google.com/document/d/1Vbj4IpluWiRrJ8mxxF1ml5e0T5N3sJjk/view",
      },
      {
        name: "FMEM PUE",
        link: "https://docs.google.com/document/d/10hnEqlewdUPzzzBgm2wdfc_PKcm6UxWo/view",
      },
      {
        name: "Mechanical Quantum .pdf",
        link: "https://drive.google.com/file/d/1zqx48NWdHDKIgDY-hqzWTXYr6I1jqlQE/view?usp=sharing",
      },
      {
        name: "Past Year .jpg",
        link: "https://drive.google.com/file/d/1WBVxD38gVacpJoa8bwRBVlnq19OwUuIA/view?usp=sharing",
      },
      {
        name: "Unit 1-5 MCQ .pdf",
        link: "https://drive.google.com/file/d/1STrsoMdjHiMuPT4s5Cbyiqx6HRiARdAb/view?usp=sharing",
      },
    ],
  },
  {
    name: "Electrical",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "unit 1 ",
            link: "https://drive.google.com/open?id=1-Zpt3IXaNCbB0G-n2wO5D7y_7PxcWj19&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "unit 2",
            link: "https://drive.google.com/open?id=12OyKSX34K5USxpeYfg_mWvp4ZL4KGd60&usp=drive_copy ",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "unit 3",
            link: "https://drive.google.com/open?id=1hnjmKzvh2kMlNXExr5AcGqOjxqsn-OF2&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "unit4",
            link: "https://drive.google.com/open?id=1lLVRSLf-2LWcLUlcnQHpnL7Qq4ZXB861&usp=drive_copy",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "unit5",
            link: "https://drive.google.com/open?id=1wfx6ycZMF89zu2STotunH35qp-U01kLA&usp=drive_copy",
          },
        ],
      },
      {
        name: "electrical pyqs",
        link: "https://drive.google.com/open?id=1z6_VoXGV_VPzuveu7tN80E8f4z8byZhM&usp=drive_copy",
      },
      {
        name: "Electrical Syllabus",
        link: "https://drive.google.com/open?id=1DBwY0cZcIAKks4FsVJmDQr61nbCCRh_D&usp=drive_copy",
      },
      {
        name: "Electrical _BEE_Latest_2022_2023_Quantum Series",
        link: "https://drive.google.com/open?id=1_WAxdFP3Nf0PN4W9dF-8i1BnMIVRc4fI&usp=drive_copy",
      },
    ],
  },
  {
    name: "Electronics",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "MCQ Unit 1 KEC101T_201T",
            link: "https://docs.google.com/document/d/1bcfqwcD2Jkm4XlXFJIC2qrxrkhH-dAxose1zdMcd38s/view",
          },
          {
            name: "MCQ Unit 1 KEC101T_201T",
            link: "https://docs.google.com/document/d/1bcfqwcD2Jkm4XlXFJIC2qrxrkhH-dAxose1zdMcd38s/view",
          },
        ],
      },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Maths I",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "assignment 1 maths",
            link: "https://drive.google.com/drive/folders/1O1BAuUsERr2hOkIeLeL5nY0xLS9E2QT",
          },
          {
            name: "Normal Form and its application to rank",
            link: "https://drive.google.com/drive/folders/1O1BAuUsERr2hOkIeLeL5nY0xLS9E2QT",
          },
          {
            name: "RANK QUESTION",
            link: "https://drive.google.com/drive/folders/1O1BAuUsERr2hOkIeLeL5nY0xLS9E2QT",
          },
          {
            name: "model paper",
            link: "https://drive.google.com/drive/folders/1O1BAuUsERr2hOkIeLeL5nY0xLS9E2QT",
          },
          {
            name: "LI and LD",
            link: "https://drive.google.com/drive/folders/1O1BAuUsERr2hOkIeLeL5nY0xLS9E2QT",
          },
          {
            name: "Module 1(Matrices)",
            link: "https://drive.google.com/drive/folders/1O1BAuUsERr2hOkIeLeL5nY0xLS9E2QT",
          },
          {
            name: "EIGEN VALUE",
            link: "https://drive.google.com/drive/folders/1O1BAuUsERr2hOkIeLeL5nY0xLS9E2QT",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "continuity, differentiability",
            link: "https://drive.google.com/drive/folders/12J16U7h1D-XO8srPv8HRIJgkS0O7CVrB",
          },
          {
            name: "differential calculas 1",
            link: "https://drive.google.com/drive/folders/12J16U7h1D-XO8srPv8HRIJgkS0O7CVrB",
          },
        ],
      },
      {
        name: "QUANTUM MATHS",
        folders: [
          {
            name: "viewion2022-23",
            link: "https://drive.google.com/drive/folders/1ST3hq33L36tSCYLJelpz4xOMoaiuQvYL",
          },
        ],
      },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Maths II",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "differential equations",
            link: "https://drive.google.com/file/d/1KTeUlKaw7Hr-nc4okbkRCg7vmaUES6eo/view?usp=drive_link/view",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1ujrA1ZFqumVeLFHWE026iG1hmFGRIVdw/view?usp=drive_link",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "Laplace Concept",
            link: "https://drive.google.com/file/d/1_BJpDYnJYhatV_TvZT5v2YL4gyQ4Mv72/view?usp=drive_link",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1QBSDjEz3sbxhu1khoCePuJVkNiJBZqQM/view?usp=drive_link",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Sequence and series",
            link: "https://drive.google.com/file/d/19bb-CTIE26E8yHbDLXHSls5bYjmzOhsw/view?usp=drive_link",
          },
          {
            name: "Sequence and series concepts",
            link: "https://drive.google.com/file/d/1cBlTZJzFbmpJXcDlAcqNTalZppFXVX0V/view?usp=drive_link",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1cBlTZJzFbmpJXcDlAcqNTalZppFXVX0V/view?usp=drive_link",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "Unit4",
            link: "https://drive.google.com/file/d/1QyQp9i-JVs5XMuKHFPkDI-A8Hv_930Tr/view?usp=drive_link",
          },
          {
            name: "Unit4 concepts",
            link: "https://drive.google.com/file/d/1dVgv0zyqnb4dXUXcd9uE1fwYmYYpFAdL/view?usp=drive_link",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1GJh3hRPb9WGC7bvog_HdFO1ZwA_GFeZN/view?usp=drive_link",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "unit-5",
            link: "https://drive.google.com/file/d/1wtBgHMz3atohCQIyHB7JqU-AptAiGroV/view?usp=drive_link",
          },
          {
            name: "unit-5 concepts",
            link: "https://drive.google.com/file/d/1snYon3DkBH1NAszQHpXfvslFUywrTP8F/view?usp=drive_link",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1TyJgUBT0XHpDkmMseCrQTvUmT7MEBXLi/view?usp=drive_link",
          },
        ],
      },
      {
        name: "Syllabus",
        folders: [
          {
            name: "Quantum",
            link: "https://drive.google.com/file/d/1FL7cPh7fQjLUkaLrzuNh_n9sODeWJor_/view?usp=drive_link",
          },
          {
            name: "Sylabus",
            link: "https://drive.google.com/file/d/1Clz5OLwapVbdyo4JEaEoYHcU4eoNiIvQ/view?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    name: "PPS",
    folders: [
      {
        name: "unit1",
        folders: [
          {
            name: "PPS Unit 1 Notes",
            link: "https://docs.google.com/document/d/1-rbzwohLCoIhmTLo6FLwd-OXRJdXdO8lzQJNdWIX3t8/view",
          },
          {
            name: "PPS Unit 1 Notes PDF",
            link: "https://drive.google.com/file/d/1pF6Y_g42RlG5WziAvXHR1tGErw6oR1MR/view?usp=sharing",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "PPS Unit 2 Notes",
            link: "https://drive.google.com/file/d/18N0sfWW1r52ZYpiEGTkYdDMdjbxPRodG/view?usp=sharing",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "PPS Unit 3 Notes",
            link: "https://drive.google.com/file/d/1NTCEYzR9QN0vX2sGOnxx3z68MnvPFg9U/view?usp=sharing",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "PPS Unit 4 Notes PDF",
            link: "https://drive.google.com/file/d/1iS_OnNG7aD2Ftx_PL-3IGC165C_M29gW/view?usp=sharing",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "PPS Unit 5",
            link: "https://drive.google.com/file/d/13b7CFcujQ1yJ55izBirIlpKTl-WElNA9/view?usp=sharing",
          },
        ],
      },
      {
        name: "PPS Latest Quantum Series",
        link: "https://drive.google.com/file/d/18N0sfWW1r52ZYpiEGTkYdDMdjbxPRodG/view?usp=sharing",
      },
      {
        name: "PPS PYQ Merged",
        link: "https://drive.google.com/file/d/1P_McLKarrTHYvySsJk1HXWuxwstb65yB/view?usp=sharing",
      },
    ],
  },
  {
    name: "Engineering Drawing",
    folders: [
      {
        name: "Ortho Projection Neer .ppt",
        link: "https://docs.google.com/presentation/d/1p6qZdqgImKFFFs8Atc_7W0PJE0qLjf_F/view#slide=id.p1",
      },
      {
        name: "Point Line .pdf",
        link: "https://drive.google.com/file/d/1CVF4SIYnaUBXFtBJNdSHakhTqZ3RvgA0/view?usp=sharing",
      },
      {
        name: "Point Line .ppsx",
        link: "https://drive.google.com/file/d/1E8uHrO2OcLr9_VcUyJHshbvHe2hDu1QK/view?usp=sharing",
      },
      {
        name: "Projection of Planes_revised .pdf",
        link: "https://drive.google.com/file/d/1MJYElC-ksOzDAMjVJkHSuFQ__Ow1WdR1/view?usp=sharing",
      },
      {
        name: "What is Engineering Drawing .pptx",
        link: "https://docs.google.com/presentation/u/4/d/13Yb2tIjnVRyrxy568XSGXokXI2iGYaOs/view?usp=drive_web&ouid=101780945977141676347&rtpof=true",
      },
    ],
  },
];

export default folders;
