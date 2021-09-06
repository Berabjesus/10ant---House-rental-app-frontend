import { MagicSpinner } from 'react-spinners-kit';

const LoadingIcon = () => (
  <span className="d-flex flex-column align-items-center centered">
    <MagicSpinner size={150} color="#000" loading />
    <p className="h5 mt-3">Loading...</p>
  </span>
);

export default LoadingIcon;