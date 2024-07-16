import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SetAddress } from "../AddressBar/SetAddress";
import { LogOut, EditAccountForm } from "./components";
import { closeModal } from "../../store/features/ModalWindow/ModalWindowSlice";

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalContent } = useSelector(
    (state: any) => state.modalWindow
  );

  const renderContent = () => {
    switch (modalContent) {
      case "Logout":
        return <LogOut />;
      case "EditAccount":
        return <EditAccountForm />;
      case "SetAddress":
        return <SetAddress />;
      default:
        return null;
    }
  };

  return (
    <>
      <Modal open={isModalOpen} onClose={() => dispatch(closeModal())}>
        <>{renderContent()}</>
      </Modal>
    </>
  );
};
