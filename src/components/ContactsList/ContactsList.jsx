import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';


const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const findContact = (contacts) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };
  const foundContacts = findContact(contacts)
  const deleteHandler = id => { dispatch(deleteContact(id)) }

  return (
    <ul >
      {foundContacts.length > 0 && foundContacts.map(({ id, name, phone }) => (
        <li key={id} >
          <span >{name}: </span>
          <span >{phone} </span>
          <button
            type="button"
            onClick={() => deleteHandler(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>)
};

export default ContactsList;