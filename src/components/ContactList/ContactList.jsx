import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {    
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.list}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={css.card}>
                        <Contact
                            handleDelete={handleDelete}
                            contact = {contact}
                        />
                   </li>
               )
           })}
        </ul>
    )
};

export default ContactList;
