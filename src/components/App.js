import Layout from './Layout';
import Title from './Title';
import Generator from './Generator';
import Box from './Box';
import Result from './Result';
import Options from './Options';

const App = () => {
  return (
    <Layout>
      <Title title='PASSWORD GENERATOR' />
      <Generator>
        <Box>
          <Result />
        </Box>
        <Box>
          <Options />
        </Box>
      </Generator>
    </Layout>
  );
};

export default App;
