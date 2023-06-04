export default function ContactRow({ contact }) {
    return (
      <tr className = "contact-row">
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }