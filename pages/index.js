import Layout from '../components/Layout';
import Each from '../components/eachComponent';

const Index = () => {

    return <Layout>
        <h1>우리말 도우미</h1>
        <Each title={"외국어 찾기"} index={0}/>
      </Layout>;
}

export default Index;