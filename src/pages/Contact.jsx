import { useParams } from 'react-router-dom';

function Contact() {
  const params = useParams();

  return <div>Contact {params.id}</div>;
}
export default Contact;
