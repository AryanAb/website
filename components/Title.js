import titleStyle from '../styles/title.module.css'

const Title = ({ str }) => {
  return (
    <h2 className={titleStyle.title}>{str}</h2>
  );
};

export default Title;
