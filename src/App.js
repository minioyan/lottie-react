import './App.css';
import Lottie from 'react-lottie';
import rocketLaunchAnimation from './animation/rocket-launch.json';
import manWorkingAnimation from './animation/man-working.json';

export const App = () => {
  const rocketLaunchAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketLaunchAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const manWorkingAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: manWorkingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='App'>
      <Lottie options={rocketLaunchAnimationOptions} height={400} width={400} />
      <Lottie options={manWorkingAnimationOptions} height={400} width={400} />
    </div>
  );
};

export default App;
