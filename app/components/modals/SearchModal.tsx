"use client";

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";

const SearchModal = () => {
  const searchModal = useSearchModal();
  return (
    <Modal
      isOpen={searchModal.isOpen}
      title='Filters'
      actionLabel='Search'
      onSubmit={searchModal.onOpen}
      onClose={searchModal.onClose}
    />
  );
};

export default SearchModal;
