import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';


export default function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default: return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      phone,
    };

    const isHaveDublicateName = contacts.find(
      contact => contact.name === name
    );

    if (isHaveDublicateName) {
      alert(`${name} is already in contacts`)
      return;
    }

    dispatch(addContact(data));
    setName('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label >
          Number
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">
          Add contacts
        </button>
      </form>
    </div>
  )
};