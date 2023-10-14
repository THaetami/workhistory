import '../styles/ModalComp.scss';
import { Dispatch, SetStateAction } from 'react';

interface ModalCompProps {
    openModal: boolean;
    closeModal: Dispatch<SetStateAction<boolean>>;
    deleteWork: () => void;
}

export default function ModalComp({ openModal, closeModal, deleteWork }: ModalCompProps) {

    const submitButton = () => {
        deleteWork();
        closeModal(false)
    }
    return(
        <> {
            openModal && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className={`modal-card delete-modal`}>
                            <div className="modal-card-delete__body">
                                <div className="close-wrap">
                                    <div onClick={() => closeModal(false)} className="close">&times;</div>
                                </div>
                                <div>Aduh, kok??</div>
                                <div className="wrap-button">
                                    <button onClick={submitButton} className="pointer button-custom">gpp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}