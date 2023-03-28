import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { transformNumber } from 'components/App';
import { deleteContacts } from 'app/slice';

export const ContactItem = ({ ...props }) => {
  const { name, number, elementId } = props;
  const dispatch = useDispatch();

  const deletContact = () => {
    dispatch(deleteContacts(elementId));
  };

  return (
    <li>
      <div className="contact-wrap">
        {name}: {transformNumber(number)}
        <button className="delete-contact" onClick={deletContact}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  elementId: PropTypes.string,
};
