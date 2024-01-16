import FeatureGroup from 'components/pages/featuregroup/feature-group';
import Hero from 'components/pages/hero';
import getMetadata from 'utils/get-metadata';

const data = {
  description:
    'The XYZ platform is a tool that helps businesses save money and mitigate risks by giving them useful information from their subscription data',
  pathname: '/',
};

const Home = () => (
  <>
    <Hero />
    <FeatureGroup />
  </>
);

export default Home;

export const generateMetadata = async () => getMetadata(data);
