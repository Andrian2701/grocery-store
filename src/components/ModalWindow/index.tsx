import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/ModalWindow/ModalWindowSlice";

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const { openModal, content } = useSelector((state: any) => state.modalWindow);

  const handleCloseModal = () => dispatch(closeModal());

  return (
    <>
      <Modal open={openModal} onClose={handleCloseModal}>
        {content ? content : <div />}
      </Modal>
    </>
  );
};
