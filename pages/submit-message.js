import Link from 'next/link';
import { H1, P } from '../elements';

const SubmitMessagePage = () => {
  return (
    <div>
      <H1>Thank you for submitting your query.</H1>
      <P>I will be in touch.</P>
      <Link href="/">Back to Home</Link>
    </div>
  );
};
export default SubmitMessagePage;
