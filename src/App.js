import React, { useEffect, useState } from 'react';

import Form from './components/form/Form';
import EditRecordModal from './components/modals/EditRecordModal';
import Table from './components/table/Table';

import './App.scss';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactItems = localStorage.getItem('contacts');
    return contactItems !== null ? JSON.parse(contactItems) : [];
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({});

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (editedContact) => {
    setContacts(
      contacts.map((el) => {
        if (el.id === editedContact.id) {
          return { ...editedContact };
        }
        return el;
      }),
    );
    handleCloseModal();
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleOpenModal = (contact) => {
    setEditedContact({ ...contact });
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setEditedContact({});
    setModalIsOpen(false);
  };

  return (
    <div className="app">
      <div id="modal">
        <EditRecordModal
          modalIsOpen={modalIsOpen}
          closeModal={handleCloseModal}
          editedContact={editedContact}
          editContact={editContact}
        />
      </div>
      <div className="app__wrapper">
        <header className="app__header">
          <h1>React Phone Book</h1>
        </header>
        <main className="app__main main">
          <section className="main__form">
            <Form updateContact={addContact} />
          </section>
          <section className="main__table">
            {contacts.length ? (
              <Table
                records={contacts}
                openEditModal={handleOpenModal}
                deleteRecord={deleteContact}
              />
            ) : (
              <span className="main__no-contacts">No contacts.</span>
            )}
          </section>
        </main>
        <footer className="app__footer">
          <span>&copy; 2022</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
