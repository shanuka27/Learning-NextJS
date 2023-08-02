import Layout from '../../components/Layout.js'
import { useRouter } from 'next/router'
import contacts from '../api/contacts.js'


export default function Contact() {
    const router = useRouter();
    const { contactId } = router.query;
    const Contact = contacts.find(contact => contact.id === contactId); 
    // const [first, last] = Contact?.name.split(" ")

    return (
        <>
            <a href='#' onClick={() => router.back()}>Back</a>
            <Layout>
                <h1> Contact { Contact && Contact.name } </h1>
                <p> { Contact && Contact.country } </p>
                {/* <h2>Contact: {last.toUppCase()}, {first}</h2> */}
            </Layout>
        </>
    );
}

// import Layout from '../../components/Layout.js'
// import { useRouter } from 'next/router'
// import contacts from '../api/contacts.js'

// export default function Contact() {
//     const router = useRouter();
//     const { contactId } = router.query;
//     const Contact = contactId ? contacts.find(contact => contact.id === contactId) : null;
//     const [first, last] = (Contact?.name || '').split(" ");

//     return (
//         <>
//             <a href='#' onClick={() => router.back()}>Back</a>
//             <Layout>
//                 <h1> Contact {Contact?.name} </h1>
//                 <p> {Contact?.country} </p>
//                 <h2>Contact: {last},{first}</h2>
//             </Layout>
//         </>
//     );
// }
