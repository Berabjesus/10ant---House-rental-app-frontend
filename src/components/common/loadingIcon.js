import { MagicSpinner } from 'react-spinners-kit';

const LoadingIcon = () => (
  <section className={`col-12 d-flex justify-content-center vh-100 pt-5 w-100 debug_border fade_in section`}>   
    <span className="d-flex flex-column align-items-center centered">
      <MagicSpinner size={150} color="#000" loading />
      <p className="h5 mt-3">Loading...</p>
    </span>   
  </section>
);

export default LoadingIcon;