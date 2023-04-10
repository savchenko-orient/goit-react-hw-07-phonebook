import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';


const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const findContact = () => {
    return contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter);
    });
  };
  const foundContacts = findContact()

  return (
    <ul >
      {foundContacts.map(({ id, name, number }) => (
        <li key={id} >
          <span >{name}: </span>
          <span >{number} </span>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>)
};

ContactsList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func
}

export default ContactsList;