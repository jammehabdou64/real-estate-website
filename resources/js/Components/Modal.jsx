import React, { useReducer, createContext, useContext } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

import {
  CLOSE_EDIT_MODAL,
  CLOSE_MODAL,
  OPEN_EDIT_MODAL,
  OPEN_MODAL,
} from "../constant/index";

const INITIAL_STATE = {
  isModalOpen: false,
  isEditModalOpen: false,
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case OPEN_EDIT_MODAL:
      return { ...state, isEditModalOpen: true };
    case CLOSE_EDIT_MODAL:
      return { ...state, isEditModalOpen: false };

    case "RESET":
      return {
        ...state,
        isModalOpen: false,
        isEditModalOpen: false,
      };
    default:
      return state;
  }
};

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const Modal = ({ open, onClose, title, description, children }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export { ModalProvider, useModal };

export default Modal;
