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
            link: "https://docs.google.com/document/d/1e_LXuvFgWcVSDECAiYCHj1G0ohxvWbwf/edit",
          },
          {
            name: "Module1",
            link: "https://docs.google.com/document/d/1noLB5pX1IThFbfgdBuqK-Se75Faid_w_Q32kF7PHU0Q/edit",
          },
        ],
      },
      {
        name: "unit2",
        folders: [
          {
            name: "MODULE-2",
            link: "https://docs.google.com/document/d/1IYoqF9_Cpux_IBzhooBcuuF8K2Txg0GD73-8pcuFrmU/edit",
          },
          {
            name: "unit 2 NMR",
            link: "https://docs.google.com/document/d/1sSdKu4zNxXvjAw8nWrMC4zZ5fb0n_9yq/edit",
          },
          {
            name: "unit 2 stereochemistry",
            link: "https://docs.google.com/document/d/14UYYCX5F5wd_mWsMht2npMOoDaBFdhfu/edit",
          },
        ],
      },
      {
        name: "unit3",
        folders: [
          {
            name: "Module 3",
            link: "https://docs.google.com/document/d/1_ORZWVeYksy9i9huDuG3T7pDjE_YD6M8x5fl7DFN3AA/edit",
          },
          {
            name: "unit 3 cement",
            link: "https://docs.google.com/document/d/1VRzdPBiqxh_ueiUW2u0yxqZqNX0pTC4E/edit",
          },
          {
            name: "unit 3 corrosion and  POP",
            link: "https://docs.google.com/document/d/1K6MeD707QwSvjwCircmBvaHxcTRTLZAo/edit",
          },
        ],
      },
      {
        name: "unit4",
        folders: [
          {
            name: "module 4",
            link: "https://docs.google.com/document/d/1QATQFu59DymjxL-3I3zA9SF_xUS1bKm0u1BG2iABo3I/edit",
          },
          {
            name: "unit 4 hardness ,alkalinity,biogas",
            link: "https://docs.google.com/document/d/10s_2sCpFR0dOaMEPxrnSSBhFX7-H_9Hd/edit",
          },
        ],
      },
      {
        name: "unit5",
        folders: [
          {
            name: "unit 5 polymer and organometallic compounds",
            link: "https://docs.google.com/document/d/1f5mJy_VH5atZSjondgTQPkykqpeLCDgI/edit",
          },
          {
            name: "Module 5",
            link: "https://docs.google.com/document/d/1HTwZenQorj7BCNfUH7Qj8AxqVOuEr1KU00graIqLI3s/edit",
          },
        ],
      },
      {
        name: "LAB",
        folders: [
          {
            name: "All Experiments (2)",
            link: "https://docs.google.com/document/d/1sOfLhVMSrluMJIPfpAi2Kb6vxquUo5dnHZVl8T7doMc/edit",
          },
          {
            name: "exp",
            link: "https://docs.google.com/document/d/1HkLdZAMmAH_UeateyzGdDTz4rhksO2sKFTlw4r2MNZg/edit",
          },
          {
            name: "LAB",
            link: "https://docs.google.com/document/d/1MUIzB9L0iYvCUeZNLEl9_9L5mZnNgZDc/edit",
          },
        ],
      },
      {
        name: "Chem PYQ",
        link: "https://docs.google.com/document/d/1wSTXo1ZGbmDpCWia9GfTiDT1i674g9j1dadZCkXH-hk/edit",
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
      { name: "unit1", folders: [{ name: "unit1", link:"https://docs.google.com/document/d/1d-cRddUFJ3S3EW21UQ0OIGtlF_Tsw5DBBm6pgBw72e0/edit" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  // {
  //   name: "EVS",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
  // {
  //   name: "Soft Skills",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
  // {
  //   name: "Mechanical",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
  // {
  //   name: "Electrical",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
  // {
  //   name: "Electronics",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
  // {
  //   name: "Maths I",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
  // {
  //   name: "Maths II",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
  // {
  //   name: "PPS",
  //   folders: [
  //     { name: "unit1", folders: [{ name: "notes" }] },
  //     { name: "unit2", folders: [{ name: "notes" }] },
  //     { name: "unit3", folders: [{ name: "notes" }] },
  //     { name: "unit4", folders: [{ name: "notes" }] },
  //     { name: "unit5", folders: [{ name: "notes" }] },
  //   ],
  // },
];

export default folders;
