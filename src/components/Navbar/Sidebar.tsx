import "./Sidebar.css";
import { createSignal } from "solid-js";
import { For } from "solid-js";
const FolderIcon = ({ width = 24, height = 24, fill = "#000" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839ZM12.25 10C12.25 9.58579 12.5858 9.25 13 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z"
      fill={fill}
    />
  </svg>
);

const Sidebar = () => {
  const [expandedYear, setExpandedYear] = createSignal(null);
  const [expandedSubject, setExpandedSubject] = createSignal(null);

  const years = [
    {
      year: "Year 1",
      subjects: [
        {
          name: "Physics",
          link: "#physics",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Chemistry",
          link: "#Chemistry",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Maths I",
          link: "#Maths I",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Maths II",
          link: "#Maths II",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Programming for problem solving",
          link: "#Programming for problem solving",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Fundamnetals of Electronics Engineering",
          link: "#Fundamnetals of Electronics Engineering",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Fundamnetals of Mechanical Engineering",
          link: "#Fundamnetal s of Mechanical Engineering",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },

        {
          name: "Fundamnetals of Electrical Engineering",
          link: "#Fundamnetals of Electrical Engineering",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Enviromental science",
          link: "#Enviromental science",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        {
          name: "Soft Skills",
          link: "#Soft Skills",
          units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
        },
        // Add more subjects as needed
      ],
    },
    // Add more years as needed
  ];

  const toggleYear = (year: any) => {
    setExpandedYear(expandedYear() === year ? null : year);
    // Close subject if the current year is collapsed
    if (expandedYear() === year) {
      setExpandedSubject(null);
    }
  };

  const toggleSubject = (subject: any) => {
    setExpandedSubject(expandedSubject() === subject ? null : subject);
  };

  return (
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-9">
          <div class="list-group sidebar">
            {years.map((year, yearIndex) => (
              <div>
                <a
                  href={`#${year.year.toLowerCase().replace(" ", "-")}`}
                  class="list-group-item list-group-item-action d-flex align-items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleYear(year.year);
                  }}
                >
                  <FolderIcon />
                  <span class="ml-2">{year.year}</span>
                </a>
                {expandedYear() === year.year && (
                  <div class="pl-4">
                    {year.subjects.map((subject, subjectIndex) => (
                      <div>
                        <a
                          href={subject.link}
                          class="list-group-item list-group-item-action d-flex align-items-center"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSubject(subject.name);
                          }}
                        >
                          <FolderIcon width={20} height={20} />
                          <span class="ml-2">{subject.name}</span>
                        </a>
                        {expandedSubject() === subject.name && (
                          <div class="pl-4">
                            <For each={subject.units}>
                              {/* {subject.units.map((unit, unitIndex) => ( */}
                              {(unit) => (
                                <a
                                  href={`#${unit
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  class="list-group-item list-group-item-action d-flex align-items-center"
                                >
                                  <FolderIcon width={16} height={16} />
                                  <span class="ml-2">{unit}</span>
                                </a>
                              )}
                            </For>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;