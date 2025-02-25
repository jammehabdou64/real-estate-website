import React, { useReducer, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import {
  CLOSE_EDIT_MODAL,
  CLOSE_EDIT_TABLE_MODAL,
  CLOSE_MODAL,
  CLOSE_SECTION_HEADER_MODAL,
  CLOSE_SECTION_MAIN_SECTION_MODAL,
  CLOSE_SECTION_MODAL,
  CLOSE_TABLE_MODAL,
  OPEN_EDIT_MODAL,
  OPEN_EDIT_TABLE_MODAL,
  OPEN_MODAL,
  OPEN_SECTION_HEADER_MODAL,
  OPEN_SECTION_MAIN_SECTION_MODAL,
  OPEN_SECTION_MODAL,
  OPEN_TABLE_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  OPEN_CTA_MODAL,
  CLOSE_CTA_MODAL,
} from "../constant/index";

// Define your initial state and reducer
const INITIAL_STATE = {
  isModalOpen: false,
  isEditModalOpen: false,
  isCTAModalOpen: false,
  isDeleteModalOpen: false,
  isSectionHeader: false,
  isSectionOpen: false,
  isMainSectionOpen: false,
  isSubSectionOpen: false,
  isTableModalOpen: false,
  isEditTableModelOpen: false,
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

    case OPEN_CTA_MODAL:
      return { ...state, isCTAModalOpen: true };
    case CLOSE_CTA_MODAL:
      return { ...state, isCTAModalOpen: false };

    case OPEN_SECTION_MODAL:
      return { ...state, isSectionOpen: true };
    case CLOSE_SECTION_MODAL:
      return { ...state, isSectionOpen: false };
    case OPEN_SECTION_HEADER_MODAL:
      return { ...state, isSectionHeader: true };
    case CLOSE_SECTION_HEADER_MODAL:
      return { ...state, isSectionHeader: false };
    case OPEN_TABLE_MODAL:
      return { ...state, isTableModalOpen: true };
    case CLOSE_TABLE_MODAL:
      return { ...state, isTableModalOpen: false };
    case OPEN_EDIT_TABLE_MODAL:
      return { ...state, isEditTableModelOpen: true };
    case CLOSE_EDIT_TABLE_MODAL:
      return { ...state, isEditTableModelOpen: false };
    case OPEN_SECTION_MAIN_SECTION_MODAL:
      return { ...state, isMainSectionOpen: true };
    case CLOSE_SECTION_MAIN_SECTION_MODAL:
      return { ...state, isMainSectionOpen: false };
    case OPEN_DELETE_MODAL:
      return { ...state, isDeleteModalOpen: true };
    case CLOSE_DELETE_MODAL:
      return { ...state, isDeleteModalOpen: false };

    case "RESET":
      return {
        ...state,
        isModalOpen: false,
        isEditModalOpen: false,
        isDeleteModalOpen: false,
        isSectionHeader: false,
        isSectionOpen: false,
        isMainSectionOpen: false,
        isSubSectionOpen: false,
        isTableModalOpen: false,
        isCTAModalOpen: false,
        isEditTableModelOpen: false,
      };
    default:
      return state;
  }
};

// Create Context
const ModalContext = createContext(null);

// Create a Provider component
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

// Modal Component
const Modal = ({
  maxWidth = "2xl",
  show = false,
  children,
  isDeleteModal = false,
}) => {
  const { dispatch } = useModal();

  const close = () => {
    dispatch({ type: "RESET" });
  };

  const maxWidthClasses = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
  };

  return ReactDOM.createPortal(
    <div
      className={
        show ? "fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" : "hidden"
      }
    >
      <div
        className="fixed inset-0 transform transition-all"
        onClick={close}
        role="presentation"
      >
        <div className="absolute inset-0 bg-gray-500 dark:bg-slate-700 opacity-75" />
      </div>
      <div
        className={`${!isDeleteModal && "shadow-xl"} mb-6  rounded-lg overflow-hidden transform transition-all sm:w-full sm:mx-auto ${maxWidthClasses[maxWidth]}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};
export { ModalProvider, useModal };
export default Modal;
