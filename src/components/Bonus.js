import { useDispatch, useSelector } from 'react-redux';

import { increment } from '../slices/bonusSlice';

const Bonus = () => {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.bonus.points);

  return (
    <div>
      <h3 style={{color: 'red'}}>
        <b>Bonus Component</b>
      </h3>
      <h3>Total point : {points}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
    </div>
  );
};

export default Bonus;
