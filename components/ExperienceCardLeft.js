import expStyle from '../styles/experiencePage.module.css';
import Image from 'next/image';

const ExperienceCardLeft = ({ image, company, role, duration, summary }) => (
  <div className={expStyle.container}>
    <div className={expStyle.banner}>
      <Image src={image} layout="fill" />
    </div>

    <div className={expStyle.info}>
      <div className={expStyle.row} style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <h3 className={expStyle.title}>{company}</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', justifyContent: 'space-between' }}>
        <p className={expStyle.creators} style={{ marginLeft: 0, marginRight: 20 }}>{role}</p>
        <p className={expStyle.date} style={{ marginLeft: 0, marginRight: 20 }}>{duration}</p>
      </div>
      <div>
        <ul>
          {summary.map(point => <li style={{ paddingBottom: 15 }} dangerouslySetInnerHTML={{ __html: point }} />)}
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceCardLeft;
