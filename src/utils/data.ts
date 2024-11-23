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
            link: "https://docs.google.com/document/d/1e_LXuvFgWcVSDECAiYCHj1G0ohxvWbwf/preview",
          },
          {
            name: "Module1",
            link: "https://docs.google.com/document/d/1noLB5pX1IThFbfgdBuqK-Se75Faid_w_Q32kF7PHU0Q/preview",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "MODULE-2",
            link: "https://docs.google.com/document/d/1IYoqF9_Cpux_IBzhooBcuuF8K2Txg0GD73-8pcuFrmU/preview",
          },
          {
            name: "unit 2 NMR",
            link: "https://docs.google.com/document/d/1sSdKu4zNxXvjAw8nWrMC4zZ5fb0n_9yq/preview",
          },
          {
            name: "unit 2 stereochemistry",
            link: "https://docs.google.com/document/d/14UYYCX5F5wd_mWsMht2npMOoDaBFdhfu/preview",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Module 3",
            link: "https://docs.google.com/document/d/1_ORZWVeYksy9i9huDuG3T7pDjE_YD6M8x5fl7DFN3AA/preview",
          },
          {
            name: "unit 3 cement",
            link: "https://docs.google.com/document/d/1VRzdPBiqxh_ueiUW2u0yxqZqNX0pTC4E/preview",
          },
          {
            name: "unit 3 corrosion and  POP",
            link: "https://docs.google.com/document/d/1K6MeD707QwSvjwCircmBvaHxcTRTLZAo/preview",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "module 4",
            link: "https://docs.google.com/document/d/1QATQFu59DymjxL-3I3zA9SF_xUS1bKm0u1BG2iABo3I/preview",
          },
          {
            name: "unit 4 hardness ,alkalinity,biogas",
            link: "https://docs.google.com/document/d/10s_2sCpFR0dOaMEPxrnSSBhFX7-H_9Hd/preview",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "unit 5 polymer and organometallic compounds",
            link: "https://docs.google.com/document/d/1f5mJy_VH5atZSjondgTQPkykqpeLCDgI/preview",
          },
          {
            name: "Module 5",
            link: "https://docs.google.com/document/d/1HTwZenQorj7BCNfUH7Qj8AxqVOuEr1KU00graIqLI3s/preview",
          },
        ],
      },
      {
        name: "LAB",
        folders: [
          {
            name: "All Experiments (2)",
            link: "https://docs.google.com/document/d/1sOfLhVMSrluMJIPfpAi2Kb6vxquUo5dnHZVl8T7doMc/preview",
          },
          {
            name: "LAB",
            link: "https://docs.google.com/document/d/1MUIzB9L0iYvCUeZNLEl9_9L5mZnNgZDc/preview",
          },
        ],
      },
      {
        name: "Chem PYQ",
        link: "https://docs.google.com/document/d/1wSTXo1ZGbmDpCWia9GfTiDT1i674g9j1dadZCkXH-hk/preview",
      },
      {
        name: "Chemistry All Unit MCQS_ 3 ",
        link: "https://drive.google.com/file/d/1ooqsrd_i_58KbMAbPptAW-RZOcDS3BDF/preview",
      },
    ],
  },
  {
    name: "Physics",
    folders: [
      // {
      //   name: "unit1",
      //   folders: [
      //     {
      //       name: "unit1",
      //       link: "https://docs.google.com/document/d/1d-cRddUFJ3S3EW21UQ0OIGtlF_Tsw5DBBm6pgBw72e0/preview",
      //     },
      //   ],
      // },
      {
        name: "unit2",
        folders: [
          {
            name: "maxwell equation",
            link: "https://docs.google.com/document/d/1_W3hvkzXbgyNgjxYYmn4GOCquXugnRbactGkMdbYSHU/preview",
          },
          // {
          //   name: "Unit 2",
          //   link: "https://docs.google.com/document/d/1Wr32CwUaHDJTsiS0ib07ZWVfj8BB9ddeeg29OGQW8Lw/preview",
          // },
        ],
      },

      {
        name: "unit4",
        folders: [
          {
            name: "Unit 4 LASER (Part 1)",
            link: "https://drive.google.com/file/d/1vBc2BzfosmMdEYQ6EeqWimphiiXg1MvM/preview",
          },
          {
            name: "Unit 4 FIBRE  (Part 2)",
            link: "https://drive.google.com/file/d/1YgCA2KE_h60kJVkEZtszRnTVRL9eQfMs/preview",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "Unit 5 Superconductor part 1",
            link: "https://drive.google.com/file/d/1dCuCb4fjZsfmpxRptsaykuvVZ1Y_a3Xv/preview",
          },
          {
            name: "Unit 5 Nanomaterials (part 2)",
            link: "https://drive.google.com/file/d/1nqyzBYdeELYA-qfrPY1sAph2DutuCC3f/preview",
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
        link: "https://drive.google.com/file/d/1chJo26ePZFA_3kTOT_hL8AWXEu4ypal0/preview",
      },
      {
        name: "unit2",
        link: "https://drive.google.com/file/d/10dTh7IB88aYkgol0aEMknjj14i0iWX-M/preview",
      },
      {
        name: "unit3 to 5",
        link: "https://drive.google.com/file/d/1zjKLQ415GQbmJ9sezBz-gP1xMSZBJt2b/preview",
      },
      {
        name: "EVS PYQ MERGED",
        link: "https://drive.google.com/file/d/1TzDNA-RLAVCwHZoaBCgBjQhRkxrghANC/preview",
      },
      {
        name: "Environment_And_Ecology Quantam",
        link: "https://drive.google.com/file/d/1HA6wqtsgK6AfGOQwvDNmM_QI-OPZpi5b/preview",
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
            link: "https://docs.google.com/presentation/d/1Sg_kpQsu5amUeJTWY5dDIuvm7FvEugNU/preview",
          },
          {
            name: "unit1 part 2",
            link: "https://docs.google.com/presentation/d/1yp0_CeKlqACjxYgL7tjrsdMRMJYkdO2J/preview",
          },
          {
            name: "Subject verb agreement",
            link: "https://drive.google.com/file/d/1R3z3NUu4l275ZafM95Mg9-G5Olc3sSMh/preview",
          },
          {
            name: "transformation of sentences",
            link: "https://drive.google.com/file/d/1XLljSrQBs1LPG79m1qHO9SL2S10hgIpE/preview",
          },
          {
            name: "unit1 notes",
            link: "https://docs.google.com/document/d/1DSCZzb8UPW1kIPuupYCmy-3q4cH-Bm5n/preview",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "BAS 205 Unit 2 Notes",
            link: "https://docs.google.com/document/d/1eUHhrqESxD7UtBNSxI0pMTYKBSyZCBgw/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "BAS 205_Unit 2_1 PART",
            link: "https://drive.google.com/file/d/14vXueZEpdZGpo-ZgInfbId0HKJkt91B4/view?usp=sharing",
          },
          {
            name: "BAS 205_Unit 2_1 PART ppt",
            link: "https://docs.google.com/presentation/d/1ShdxwsisADaF-hA4_Xq-7eUUqMX-2LKb/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "BAS 205_Unit 2_2 PART",
            link: "https://drive.google.com/file/d/1Zq2C0ZP1BPc_JcjrvG_-yaCuPsyUwstQ/preview",
          },
          {
            name: "BAS 205_Unit 2_2 PART ppt",
            link: "https://docs.google.com/presentation/d/19j2D4GCaTOBg7RMLX_O5Q9r70_Xv2Hgm/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "Note on Speaking style (Unit 2)",
            link: "https://docs.google.com/document/d/1BwiPWwd0NfCvdpPni8ob7jiLWivOq5dK/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "ted talks",
            link: "https://docs.google.com/document/d/1jygw5GZfN_6zmLddjh6A615XnSKd0i0_/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "BAS 105 Unit 3 Notes",
            link: "https://docs.google.com/document/d/17yR2Jx5hlVLcg5owObhOBEQaWrRmfXKf/preview",
          },
          {
            name: "BAS-105 Unit-3 Part-2",
            link: "https://drive.google.com/file/d/1xm3CYfuLeRrrH--hjYqH2CPy5F_wyMlo/preview?",
          },
          {
            name: "BAS-105_Unit-3 _Part-I",
            link: "https://docs.google.com/presentation/d/1Hy94yzJXZcy96LsOOkksPajtDG03YkZ-/preview#slide=id.p1",
          },
        ],
      },

      {
        name: "unit4",
        folders: [
          {
            name: "unit 4 notes",
            link: "https://docs.google.com/document/d/1sPBMpYN5uRTzDn6aCVqxPnrgY55xuROG/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "unit 4 notes part1",
            link: "https://docs.google.com/presentation/d/1bUtxUILSCzPxteYC3RtIiuVIv0sseQI0/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "unit 4 notes part2",
            link: "https://docs.google.com/presentation/d/1SX26M_bbbKtISTx0i178BOYfXaEo7aIm/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "Assignment Questions Unit-5 BAS 105",
            link: "https://docs.google.com/document/d/15fjkeW0c0ygL23kh4MYSeTaLenKk5_XW/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "part 2 additional ppt",
            link: "https://docs.google.com/presentation/d/1H80ebUEq2UDN-kMWHulrjSdpAVldzOyY/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "Notes _ BAS 105-Unit 5",
            link: "https://docs.google.com/document/d/1rLffLtBMUyPBLRh8Jg3onh--iKdClbWm/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "PPT _ BAS 105-Unit 5 Part 2",
            link: "https://docs.google.com/presentation/d/14wnF8dfZmFVG2lwb4K9-sDdB5wAu_AXM/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "PPT _ BAS 105-Unit 5 Part 1",
            link: "https://docs.google.com/presentation/d/1wtbysPQbJ2wWZkHPxduJ8g2MOJAD2HoO/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "soft_skill_quantum (4)",
        link: "https://drive.google.com/file/d/1e8FgwW8sfu1zft93ebw9FN_Wq39oL6ex/preview",
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
            link: "https://docs.google.com/document/u/4/d/10UbVtjf8f4eXAkTyY0Wo7FG6i92qglnA/preview",
          },
          {
            name: "Unit 1 part 2",
            link: "https://docs.google.com/presentation/d/1-HDtxqjVAV7m2A66jcx3wjXtXPwD5Rlm/preview",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "MCQ .pdf",
            link: "https://drive.google.com/file/d/1W6zkXCpQJrJ8vXiIVNju69GT2bX9uRXK/preview",
          },
          {
            name: "One Shot .pdf",
            link: "https://drive.google.com/file/d/1jbFIKLlftEPUUfLpVvN-Zmf7gh0jXjDz/preview",
          },
          {
            name: "Unit-2 FME (Type Form)",
            link: "https://drive.google.com/file/d/1qz1v4AvbXFNSSbz58kBFzb69HxDOpBmm/preview",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Quiz Unit 3 .docx",
            link: "https://docs.google.com/document/u/4/d/1Z1Y3dQ2ur13lizm3vn89MQpBk_qbJy2_/preview",
          },
          {
            name: "Quiz 3 FME .docx",
            link: "https://docs.google.com/document/d/1hM5ZJNQy4S9uZMWUYPu8vokMSA5gtOQU/preview",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "Unit 4 Mcq",
            link: "https://docs.google.com/document/d/1fAzjqCjsBoCVj_JMxYl-ZXyjPzbZP0UE/preview",
          },
          {
            name: "Unit 4 25 question quiz",
            link: "https://docs.google.com/document/d/1Qs6YKFpWE_tQMOQxiSIxM7kFqvDe_FqP/preview",
          },
        ],
      },
      {
        name: "FMEM Question Paper Set 2 .doc",
        link: "https://docs.google.com/document/d/1Vbj4IpluWiRrJ8mxxF1ml5e0T5N3sJjk/preview",
      },
      {
        name: "FMEM PUE",
        link: "https://docs.google.com/document/d/10hnEqlewdUPzzzBgm2wdfc_PKcm6UxWo/preview",
      },
      {
        name: "Mechanical Quantum .pdf",
        link: "https://drive.google.com/file/d/1zqx48NWdHDKIgDY-hqzWTXYr6I1jqlQE/preview",
      },
      {
        name: "Past Year .jpg",
        link: "https://drive.google.com/file/d/1WBVxD38gVacpJoa8bwRBVlnq19OwUuIA/preview",
      },
      {
        name: "Unit 1-5 MCQ .pdf",
        link: "https://drive.google.com/file/d/1STrsoMdjHiMuPT4s5Cbyiqx6HRiARdAb/preview",
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
            name: "",
            link: "https://drive.google.com/file/d/1_ntCMpG35Oy-5mYs97ggHw5VIXrMNVBx/preview",
          },
          {
            name: "",
            link: "",
          },
          {
            name: "",
            link: "https://drive.google.com/file/d/1idOmcb1Vg8I3XpOzhX_KFmWZGCZAkzb_/preview",
          },
          {
            name: "",
            link: "https://drive.google.com/file/d/1OLlewc8uTvqZVElaT_GGAwE3dCJ6Q4OW/preview",
          },
          {
            name: "",
            link: "https://drive.google.com/file/d/1JnJRcDNqcyiPDlKmXEDJiZoQh2D5mnjW/preview",
          },
          {
            name: "",
            link: "https://drive.google.com/file/d/1kXoF3ogNXvnbfyY5BXuFwtmIRJYv7z-5/preview",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "3-phase circuits",
            link: "https://drive.google.com/file/d/1i1-aL_heDAVw1bPwrIGhroqqlzpKh9f-/preview",
          },
          {
            name: "ac fundamentals",
            link: "https://drive.google.com/file/d/1oAJKMPKB-ioa2c-qyJC4KgKrgeP183SB/preview",
          },
          {
            name: "concepts of Phasors",
            link: "https://docs.google.com/presentation/d/1LNnLXIoxD8R-e8xPnzu0xRaf1YUjPJQ4/edit?usp=drive_link&ouid=103874573092903889362&rtpof=true&sd=true",
          },
          {
            name: "part-A",
            link: "https://drive.google.com/file/d/1Q3TNxRufL9iVKlXbLyaxedkePs7nzQSe/preview",
          },
          {
            name: "part-B",
            link: "https://drive.google.com/file/d/101M_Dkp87IETQHLxLpOaRLoUkZvPdtrx/preview",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Additional Content on Transfarmer",
            link: "https://drive.google.com/file/d/1itOZ56mSUItQyynA7tobRt8L3XxIW0m7/preview",
          },
          {
            name: "Auto Transfarmer",
            link: "https://drive.google.com/file/d/1auI2J-ixxKIPJ1fPld-SOGOp0arYoji9/preview",
          },
          {
            name: "Notes of Magnetic Materials",
            link: "https://drive.google.com/drive/folders/1hnjmKzvh2kMlNXExr5AcGqOjxqsn-OF2?usp=drive_link",
          },
          {
            name: "",
            link: "https://drive.google.com/drive/folders/1hnjmKzvh2kMlNXExr5AcGqOjxqsn-OF2?usp=drive_link",
          },
          {
            name: "",
            link: "https://drive.google.com/drive/folders/1hnjmKzvh2kMlNXExr5AcGqOjxqsn-OF2?usp=drive_link",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "unit4",
            link: "https://drive.google.com/drive/folders/1lLVRSLf-2LWcLUlcnQHpnL7Qq4ZXB861?usp=drive_link",
          },
        ],
      },
      {
        name: "Unit 3",
        folders: [
          {
            name: "electrical pyqs",
            link: "https://drive.google.com/file/d/1z6_VoXGV_VPzuveu7tN80E8f4z8byZhM/preview",
          },
          {
            name: "Electrical Syllabus",
            link: "https://drive.google.com/file/d/1DBwY0cZcIAKks4FsVJmDQr61nbCCRh_D/preview",
          },
          {
            name: "Electrical _BEE_Latest_2022_2023_Quantum Series",
            link: "https://drive.google.com/file/d/1_WAxdFP3Nf0PN4W9dF-8i1BnMIVRc4fI/preview",
          },
        ],
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
            name: "Part 1",
            link: "https://drive.google.com/file/d/1YNgXDHyO5F1zy9DJxTnFnT8cdqxULEw9/preview",
          },
          {
            name: "Part 2 (Rectifier)",
            link: "https://drive.google.com/file/d/1yOOADtbGUgIV1kPboukKzLErq9vBKzp9/preview",
          },
          {
            name: "Part 3(Clipper )",
            link: "https://drive.google.com/file/d/1w5CusAbG42gWX8eqy_vXC0npnnSyiC5O/preview",
          },
          {
            name: "Part 4(Clamper)",
            link: "https://drive.google.com/file/d/1RoPNDEdnykqCRppITVuImHAos_FH8HZV/preview",
          },
          {
            name: "Part 5(Various Diodes)",
            link: "https://drive.google.com/file/d/1IU_gW4W22FDaIGhsKfmpjbDTBEOng4W1/preview",
          },
          {
            name: "Part 6 Series And Paralel Diodes",
            link: "https://drive.google.com/file/d/1EOcnrZN8x5PdSWUIfrJ2bjdzAau3tE7Q/preview",
          },
          {
            name: "Part 7()",
            link: "https://drive.google.com/file/d/1yOOADtbGUgIV1kPboukKzLErq9vBKzp9/preview",
          },
        ],
      },
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
            link: "https://drive.google.com/file/d/1n-VTmNO4AixZY3xMsL7uAMwuAjcxeLRS/preview",
          },
          {
            name: "Normal Form and its application to rank",
            link: "https://drive.google.com/file/d/1az0o1HAbiGy9FTo8ias4MCGFLa1pGkuO/view",
          },
          {
            name: "RANK QUESTION",
            link: "https://drive.google.com/file/d/1Gg12QbZN29l8OBooZAwJ9HR4I-pvyGtj/preview",
          },
          {
            name: "LI and LD",
            link: "https://drive.google.com/file/d/15jIUUW3hb4mhpC_kd_AmtUDE2awXeqnq/preview",
          },
          {
            name: "Module 1(Matrices)",
            link: "https://drive.google.com/file/d/1Me-1vOcYJMDatH9HIiMz_qAYDWb4BLX9/preview",
          },
          {
            name: "EIGEN VALUE",
            link: "https://drive.google.com/file/d/1SyTWnNfa7z5agWjJ3OgYUzZoBahGDqE_/preview",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "continuity, differentiability",
            link: "https://drive.google.com/file/d/1OwioPimOuAALQC9fuxRjXA5dLaLMDfbc/preview",
          },
          {
            name: "differential calculas 1",
            link: "https://drive.google.com/file/d/1YL_4bCChFRu4rSWp06n0uYMcHmoqkdol/preview",
          },
        ],
      },
      // {
      //   name: "QUANTUM MATHS",
      //   folders: [
      //     {
      //       name: "previewion2022-23",
      //       link: "https://drive.google.com/drive/folders/1ST3hq33L36tSCYLJelpz4xOMoaiuQvYL",
      //     },
      //   ],
      // },
      // { name: "unit4", folders: [{ name: "notes" }] },
      // { name: "unit5", folders: [{ name: "notes" }] },
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
            link: "https://drive.google.com/file/d/1KTeUlKaw7Hr-nc4okbkRCg7vmaUES6eo/preview",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1ujrA1ZFqumVeLFHWE026iG1hmFGRIVdw/preview",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "Laplace Concept",
            link: "https://drive.google.com/file/d/1_BJpDYnJYhatV_TvZT5v2YL4gyQ4Mv72/preview",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1QBSDjEz3sbxhu1khoCePuJVkNiJBZqQM/preview",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Sequence and series",
            link: "https://drive.google.com/file/d/19bb-CTIE26E8yHbDLXHSls5bYjmzOhsw/preview",
          },
          {
            name: "Sequence and series concepts",
            link: "https://drive.google.com/file/d/1cBlTZJzFbmpJXcDlAcqNTalZppFXVX0V/preview",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1cBlTZJzFbmpJXcDlAcqNTalZppFXVX0V/preview",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "Unit4",
            link: "https://drive.google.com/file/d/1QyQp9i-JVs5XMuKHFPkDI-A8Hv_930Tr/preview",
          },
          {
            name: "Unit4 concepts",
            link: "https://drive.google.com/file/d/1dVgv0zyqnb4dXUXcd9uE1fwYmYYpFAdL/preview",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1GJh3hRPb9WGC7bvog_HdFO1ZwA_GFeZN/preview",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "unit-5",
            link: "https://drive.google.com/file/d/1wtBgHMz3atohCQIyHB7JqU-AptAiGroV/preview",
          },
          {
            name: "unit-5 concepts",
            link: "https://drive.google.com/file/d/1snYon3DkBH1NAszQHpXfvslFUywrTP8F/preview",
          },
          {
            name: "Question Bank",
            link: "https://drive.google.com/file/d/1TyJgUBT0XHpDkmMseCrQTvUmT7MEBXLi/preview",
          },
        ],
      },
      {
        name: "Syllabus",
        folders: [
          {
            name: "Quantum",
            link: "https://drive.google.com/file/d/1FL7cPh7fQjLUkaLrzuNh_n9sODeWJor_/preview",
          },
          {
            name: "Sylabus",
            link: "https://drive.google.com/file/d/1Clz5OLwapVbdyo4JEaEoYHcU4eoNiIvQ/preview",
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
            link: "https://docs.google.com/document/d/1-rbzwohLCoIhmTLo6FLwd-OXRJdXdO8lzQJNdWIX3t8/preview",
          },
          {
            name: "PPS Unit 1 Notes PDF",
            link: "https://drive.google.com/file/d/1pF6Y_g42RlG5WziAvXHR1tGErw6oR1MR/preview",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "PPS Unit 2 Notes",
            link: "https://drive.google.com/file/d/18N0sfWW1r52ZYpiEGTkYdDMdjbxPRodG/preview",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "PPS Unit 3 Notes",
            link: "https://drive.google.com/file/d/1NTCEYzR9QN0vX2sGOnxx3z68MnvPFg9U/preview",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "PPS Unit 4 Notes PDF",
            link: "https://drive.google.com/file/d/1iS_OnNG7aD2Ftx_PL-3IGC165C_M29gW/preview",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "PPS Unit 5",
            link: "https://drive.google.com/file/d/13b7CFcujQ1yJ55izBirIlpKTl-WElNA9/preview",
          },
        ],
      },
      {
        name: "PPS Latest Quantum Series",
        link: "https://drive.google.com/file/d/18N0sfWW1r52ZYpiEGTkYdDMdjbxPRodG/preview",
      },
      {
        name: "PPS PYQ Merged",
        link: "https://drive.google.com/file/d/1P_McLKarrTHYvySsJk1HXWuxwstb65yB/preview",
      },
    ],
  },
  {
    name: "Engineering Drawing",
    folders: [
      {
        name: "Ortho Projection Neer .ppt",
        link: "https://docs.google.com/presentation/d/1p6qZdqgImKFFFs8Atc_7W0PJE0qLjf_F/preview#slide=id.p1",
      },
      {
        name: "Point Line .pdf",
        link: "https://drive.google.com/file/d/1CVF4SIYnaUBXFtBJNdSHakhTqZ3RvgA0/preview",
      },
      {
        name: "Point Line .ppsx",
        link: "https://drive.google.com/file/d/1E8uHrO2OcLr9_VcUyJHshbvHe2hDu1QK/preview",
      },
      {
        name: "Projection of Planes_revised .pdf",
        link: "https://drive.google.com/file/d/1MJYElC-ksOzDAMjVJkHSuFQ__Ow1WdR1/preview",
      },
      {
        name: "What is Engineering Drawing .pptx",
        link: "https://docs.google.com/presentation/u/4/d/13Yb2tIjnVRyrxy568XSGXokXI2iGYaOs/preview?usp=drive_web&ouid=101780945977141676347&rtpof=true",
      },
    ],
  },
];

export default folders;
