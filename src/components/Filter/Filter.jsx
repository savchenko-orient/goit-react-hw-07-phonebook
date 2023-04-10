import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/filter/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsCount = contacts.length;

  const changeFilter = e => {
    dispatch(setFilterContacts(e.target.value.toLowerCase()))
  };

  return (
    <form>
      <div>
        <p >Total contacts: <span >{contactsCount}</span></p>
      </div>
      <label >
        Find contacts by name
        <input
          type="text"
          name='filter'
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </form>
  )
};

export default Filter;