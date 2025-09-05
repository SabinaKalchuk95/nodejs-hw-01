import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    const contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
    console.log(`Removed last contact. Total: ${contacts.length}`);
    };

removeLastContact();
