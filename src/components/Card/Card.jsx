import { Head } from '../Head/Head';
import data from '../../data.json';
import css from './Card.module.css';
import clsx from 'clsx';

export const Card = ({ isOnline }) =>
  data.map(({ id, url, name, emaile }) => (
    <div key={id} className={clsx(css.main, { [css.red]: isOnline, [css.blue]: !isOnline })}>
      <img src={url} alt="IMG" className={css.image} />
      <div>
        <h5>Card title:{name}</h5>
        {/* {Head({ className: 'card-text', name: 'test-text' })} */}
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p> */}
        <Head name="test-text" className="class">
          <div>Kuhkh;</div>
          <p>Hello</p>
        </Head>
        <a href="http">{emaile}</a>
      </div>
    </div>
  ));

// Bootstrap:
// const Card = () =>
//   data.map(({ id, url, name, emaile }) => (
//     <div key={id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//       <img src={url} className="card-img-top" alt="IMG" />
//       <div className="card-body">
//         <h5 className="card-title">Card title:{name}</h5>
//         {/* {Head({ className: 'card-text', name: 'test-text' })} */}
//         {/* <p className="card-text">
//         Some quick example text to build on the card title and make up the bulk of the card's
//         content.
//       </p> */}
//         <Head name="test-text" className="class">
//           <div>Kuhkh;</div>
//           <p>Hello</p>
//         </Head>
//         <a href="http" className="btn btn-primary">
//           {emaile}
//         </a>
//       </div>
//     </div>
//   ));
