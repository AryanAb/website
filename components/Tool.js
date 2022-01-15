import toolStyles from '../styles/toolchain.module.css'

const Tool = ({ src, name }) => (
  <div className={toolStyles.container}>
    <img src={src} alt={name} title={name} height={90} />
    <p className={toolStyles.name}>{name}</p>
  </div>
);

export default Tool;
