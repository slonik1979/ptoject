import React from 'react';
import classes from './ContentInfo.module.css';
const ContentInfo = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://cdn.auckland.ac.nz/aem/content/auckland/en/news/2022/06/08/how-nz-can-live-up-to-clean-green-image/jcr:content/leftpar/imagecomponent/image.img.1024.medium.jpg/1654727864784.jpg" />
      </div>
      <div>Avatar + desc</div>
    </div>
  );
};

export default ContentInfo;
