import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Project = () => {
  return (
    <ProjectItem
      field={'hi'}
      title={'hi'}
      content={'hi'}
      percentContributed={'60%'}
      moneyContributed={100}
      aimContribute={150}
    />
  );
};

export default Project;
