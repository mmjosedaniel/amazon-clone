import { Toast, ToastContainer } from 'react-bootstrap';
import { useGetShowToaster, useSetShowToaster } from '../../context/ProductsContext';

const Toaster = () => {
  const { show, message } = useGetShowToaster();
  const setShowToaster = useSetShowToaster();

  return (
    <ToastContainer position="top-center">
      <Toast
        bg="info"
        style={{ width: '70vw' }}
        onClose={() => setShowToaster({ show: false, message: '' })}
        show={show}
        delay={5000}
        autohide>
        <Toast.Header>
          <strong>Amazon inform</strong>
        </Toast.Header>

        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
