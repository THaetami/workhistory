import '../styles/ModalComp.scss';
import { Dispatch, SetStateAction } from 'react';

interface ModalCompProps {
    openModal: boolean;
    closeModal: Dispatch<SetStateAction<boolean>>;
    deleteWork: () => void;
    location?: string;
    setLocation?: Dispatch<SetStateAction<string>>;
}

export default function ModalComp({ openModal, closeModal, deleteWork, location, setLocation }: ModalCompProps) {

    const submitButton = () => {
        deleteWork();
        closeModal(false)
    }

    const clearLocation = () => {
        if (setLocation) { 
            setLocation('');
        }
        closeModal(false);
    };

    return(
        <> {
            openModal && (
                <div id="myModal" className="modal">
                    <div className={`modal-content ${location ? 'mt-detail' : 'mt-delete'}`}>
                        <div className={`modal-card ${location ? 'detail-modal' : 'delete-modal'}`}>
                            <div className="modal-card-delete__body">
                                <div className="close-wrap">
                                    <div onClick={clearLocation} className="close">&times;</div>
                                </div>
                                {location ? (
                                    <> 
                                        <div className="detail-modal__wrap">
                                            <div className="detail-modal__title"></div>    
                                            <iframe
                                                title="location-th-notary"
                                                src={location}
                                                style={{ border: 0, width: '100%', height: '100vh' }} 
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className=" h-screen"
                                            ></iframe>
                                        </div>
                                        <div className="wrap-button">
                                            <button onClick={clearLocation} className="pointer button-custom">close</button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>Aduh, kok??</div>
                                        <div className="wrap-button">
                                            <button onClick={submitButton} className="pointer button-custom">gpp</button>
                                        </div>
                                    </>
                                    
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}