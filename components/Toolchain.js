import toolchainStyle from '../styles/toolchain.module.css';
import Tool from './Tool'

const Toolchain = ({ toolchainData }) => (
  <div className={toolchainStyle.gridWrapper}>
    {toolchainData.toolchain.map(tool => <Tool src={tool.src} name={tool.name} />)}
  </div>
);

export default Toolchain;
