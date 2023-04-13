import { useDispatch, useSelector } from 'react-redux';

import { increment, incrementByAmount } from '../reducers/reward';

const Reward = () => {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.reward.points);

  return (
    <div>
      <h3 style={{color: 'red'}}>
        <b>Reward Component</b>
      </h3>
      <h3>Total point : {points}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(incrementByAmount(7))}>Increment By 7+</button>
    </div>
  );
};

export default Reward;
