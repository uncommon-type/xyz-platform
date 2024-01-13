import getMetadata from 'utils/get-metadata';

const data = {
  description:
    'The XYZ platform is a tool that helps businesses save money and mitigate risks by giving them useful information from their subscription data',
  pathname: '/',
};

const Home = () => <div>home</div>;

export default Home;

export const generateMetadata = async () => getMetadata(data);
