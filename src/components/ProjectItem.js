import { Box } from '@mui/system';
import React from 'react';
import '../css/ProjectItem.css';
import projectItem from '../Assets/image/projectItem.png';
import playVideo from '../Assets/image/playVideo.png';
import shareIcon from '../Assets/image/shareicon.svg';
import heartIcon from '../Assets/image/heartIcon.svg';
import { Button } from '@mui/material';

const ProjectItem = (
  video,
  field,
  title,
  content,
  percentContributed,
  moneyContributed,
  aimContribute
) => {
  return (
    <div className='container'>
      <Box color='white' p={1} className='Box'>
        <div>
          <div className='imgBlock'>
            <img src={projectItem} alt='projectItem' className='imgProject' />
            <img src={playVideo} alt='playVideo' className='imgDisplay' />
          </div>
          <div className='containerInfor'>
            <div className='line1'>
              <span className='textField'>{field}</span>
              <img src={shareIcon} alt='shareIcon' className='shareIcon' />
            </div>
            <div className='introduce'>
              <p className='textTitle'>{title}</p>
              <p className='textContent'>{content}</p>
            </div>
            <div className='line2'>
              <span className='textContribute'>Quyên góp</span>
              <span className='percentContribute'>{percentContributed}</span>
            </div>
            <div className='ruler'>
              <div
                style={{ width: `${percentContributed}` }}
                className='rulerMeasure'
              />
            </div>
            <div className='line3'>
              <span className='textContributed'>
                đã góp được: {moneyContributed}
              </span>
              <span className='aimContribute'>mục tiêu: {aimContribute}</span>
            </div>
            <div className='line4'>
              <Button variant='contained' className='buttonContribute'>
                Đóng góp
              </Button>
              <img src={heartIcon} alt='heartIcon' className='heartIcon' />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ProjectItem;
