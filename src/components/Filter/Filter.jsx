import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const contactsCount = contacts.length;

  const changeFilter = e => {
    console.log('e.target.value: ', e.target.value);
    dispatch(filterContacts(e.target.value))
  };

  return (
    <form >
      <div>
        <p >Total contacts: <span >{contactsCount}</span></p>
      </div>
      <label >
        Find contacts by name
        <input
          type="text"
          name='filter'
          value={filterValue}
          onChange={changeFilter}
        />
      </label>
    </form>
  )
};



export default Filter;