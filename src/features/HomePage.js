import React from 'react';
import Header from '../components/Header';
import ProjectItem from '../components/ProjectItem';

function Home() {
  return (
    <div>
      <Header />
      <ProjectItem
        field={'hi'}
        title={'hi'}
        content={'hi'}
        percentContributed={'60%'}
        moneyContributed={100}
        aimContribute={150}
      />
    </div>
  );
}

export default Home;
