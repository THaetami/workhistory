import { useEffect, useState } from 'react';
import '../styles/HeaderComp.scss';
import ModalComp from './ModalComp';

interface HeaderCompProps {
  buttonToggle: () => void;
  deleteAllWork: () => void;
  countWorkList: number;
}

export default function HeaderComp({ buttonToggle, deleteAllWork, countWorkList }: HeaderCompProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showDropdown, setDropdown] = useState(0);

  useEffect(() => {
    setDropdown(countWorkList);
  }, [countWorkList]);

  return (
    <>
      <div className="header">
        <div className="mr-2 header-title">Work Experience</div>
        <div className="wrap-setting">
          <div className="mr-2 setting-button">
            <button onClick={buttonToggle} className="button-custom">
              <span>ADD</span>
            </button>
          </div>
          <div className="setting-button ">
            <button aria-label="menu" onClick={showDropdown > 0 ? () => setIsOpen(!isOpen) : undefined} className="button-custom dropdown-header">
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20">
                <path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402z" />
              </svg>
            </button>
          </div>
          <div className="dropdown-container">
            {isOpen && showDropdown > 0 && (
                <ul className="dropdown-list">
                  <li className="dropdown-list-item">
                  <small onClick={() => setOpenModal(true)} >
                    No Experience
                  </small>
                  </li>
                </ul>
              )}
          </div>
        </div>
      </div>
      <ModalComp
        openModal={openModal}
        closeModal={setOpenModal}
        deleteWork={deleteAllWork}
      />
      
    </>
  )
}