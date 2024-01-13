import getMetadata from 'utils/get-metadata';

const Home = () => <section />;

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: '',
    description: '',
    pathname: '/',
  });
}
