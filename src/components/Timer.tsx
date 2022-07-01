import './Timer.css';

function Timer(props : any) {
  let miliSeconds = parseFloat(props.time) / 10;
  let seconds = Math.floor(miliSeconds / 100);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  return (  
    <div className="timer">
      <span className="item">{("0" + hours % 60).slice(-2)}</span>
      <span className="item">{("0" + minutes % 60).slice(-2)}</span>
      <span className="item">{("0" + seconds % 60).slice(-2)}</span>
      <span className="item mili">{("0" + miliSeconds % 100).slice(-2)}</span>
    </div>  
  )
}

export default Timer;