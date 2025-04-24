import Agents from '@/components/agents/agents';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';

const AgentsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Agents />
      <Footer />
    </>
  );
};

export default AgentsPage;
