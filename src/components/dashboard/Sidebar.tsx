import Image from "next/image";
import styles from "./Sidebar.module.css";
import folders from "../../../utils/data";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
  year: string;
}

const Sidebar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        className={`${styles.button} ${isMenuOpen ? styles.rotate : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image src="/arrow.svg" alt="" className={styles.arrow} />
      </button>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <span className={styles.folder}>
              <Image src="/FolderIcon.svg" alt="" className={styles.icon} />
              <p className={styles.name}>
                {props.year.charAt(0).toUpperCase() + props.year.slice(1)}
              </p>
            </span>
            <ul className={styles.ul}>
              {folders.map((folder) => (
                <Folder key={folder.name} folder={folder} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

type Folder = {
  name: string;
  link?: string;
  folders?: Folder[];
};

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <li className={styles.li}>
      <span className={styles.folder}>
        {folder.folders ? (
          <>
            <button
              className={styles.button}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src="/ChevronRight.svg"
                alt=""
                className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
              />
              <Image src="/FolderIcon.svg" alt="" className={styles.icon} />
              <p className={styles.name}>{folder.name.slice(0, 16)}</p>
            </button>
          </>
        ) : (
          <div
            className={styles.link}
            onClick={() => {
              router.push(folder.link || "/");
              setIsOpen(false);
            }}
          >
            <Image src="/FileIcon.svg" alt="" className={styles.icon} />
            <p className={styles.name}>{folder.name.slice(0, 16)}</p>
          </div>
        )}
      </span>
      {isOpen && (
        <ul className={styles.ul}>
          {folder.folders?.map((folder) => (
            <Folder key={folder.name} folder={folder} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Sidebar;
