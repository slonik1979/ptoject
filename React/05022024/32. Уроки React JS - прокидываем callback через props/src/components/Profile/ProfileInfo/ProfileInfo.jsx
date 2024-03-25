import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.content}>
        <div>
          <img src="https://media.istockphoto.com/id/1320495576/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B5-%D0%BD%D0%B5%D0%B1%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D0%B1%D1%8B-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%B2-%D0%B2%D0%B5%D1%87%D0%B5%D1%80%D0%BD%D0%B5%D0%B5-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F.jpg?s=2048x2048&w=is&k=20&c=_GFUD_otcZNEKMyYvRnA3Fx6ynPSDZmtfo1qfoT9gKI=" />
        </div>
        <div>avatar = desc</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
