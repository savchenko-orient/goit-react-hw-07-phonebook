import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilter, selectContacts, selectIsLoading, selectError
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';


const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log('useEffect: ');

    dispatch(fetchContacts)
  }, [dispatch]);

  const findContact = () => {
    return contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter);
    });
  };
  const foundContacts = findContact()
  const deleteHandler = id => { dispatch(deleteContact(id)) }

  return (
    <ul >
      {isLoading && !error && <p>Loading ...</p>}
      {foundContacts.map(({ id, name, number }) => (
        <li key={id} >
          <span >{name}: </span>
          <span >{number} </span>
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