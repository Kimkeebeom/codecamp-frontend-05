import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
      setCount((prev) => (prev + 1));  // 이전값을 가져와서 이전값에 현재 값을 더해줘!
      setCount((prev) => (prev + 1));
      setCount((prev) => (prev + 1));
      setCount((prev) => (prev + 1));
      setCount((prev) => (prev + 1));
      setCount((prev) => (prev + 1));
      setCount((prev) => (prev + 1));
      setCount((prev) => (prev + 1));
      setCount((prev) => (prev + 1));
      

};
  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCountUp}>카운트 올리기 !!!!!!!!!</button>
    </div>
  );
}
