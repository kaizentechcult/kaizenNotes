type Folder = {
  name: string;
  folders?: Folder[];
};

let folders: Folder[] = [
  {
    name: "Chemistry",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Physics",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "EVS",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Soft Skills",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Mechanical",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Electrical",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Electronics",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Maths I",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "Maths II",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
  {
    name: "PPS",
    folders: [
      { name: "unit1", folders: [{ name: "notes" }] },
      { name: "unit2", folders: [{ name: "notes" }] },
      { name: "unit3", folders: [{ name: "notes" }] },
      { name: "unit4", folders: [{ name: "notes" }] },
      { name: "unit5", folders: [{ name: "notes" }] },
    ],
  },
];

export default folders;
