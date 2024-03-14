import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Sertifikat.scss'

const Sertifikat = () => {
    const { id } = useParams();

    useEffect(() => {
        
        switch (id) {
            case '1':
                window.location.href = 'https://www.dicoding.com/certificates/1OP85R9YQPQK';
                break;
            case '2':
                window.location.href = 'https://www.dicoding.com/certificates/0LZ09OKG3Z65';
              break;
            case '3':
                window.location.href = 'https://drive.google.com/drive/folders/1Tmjr9wI043o8e_0uW6jrITpVRDhk08WN';
                break;
            default:
                window.location.href = '/';
                break;
        }
    }, [id]); 

    return (
      <div className='sertifikat-container'>
        <div className="loading-container">
          <div className="loading-text">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </div>
      </div>
    )
};

export default Sertifikat;

