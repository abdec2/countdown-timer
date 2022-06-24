import "./App.css";
import Countdown, { zeroPad } from "react-countdown";

function App() {
  const mintDate = new Date("2022-06-25T00:00:00");

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex items-center">
      <div className="bg-black bg-opacity-40 rounded-lg m-[10px] min-w-[100px] py-5 text-center border border-white">
        <div className="text-white text-[2rem] mb-[10px]">{zeroPad(days)}</div>
        <div className="uppercase text-white">Days</div>
      </div>
      <div className="bg-black bg-opacity-40 rounded-lg m-[10px] min-w-[100px] py-5 text-center border border-white">
        <div className="text-white text-[2rem] mb-[10px]">{zeroPad(hours)}</div>
        <div className="uppercase text-white">Hours</div>
      </div>
      <div className="bg-black bg-opacity-40 rounded-lg m-[10px] min-w-[100px] py-5 text-center border border-white">
        <div className="text-white text-[2rem] mb-[10px]">{zeroPad(minutes)}</div>
        <div className="uppercase text-white">Mins</div>
      </div>
      <div className="bg-black bg-opacity-40 rounded-lg m-[10px] min-w-[100px] py-5 text-center border border-white">
        <div className="text-white text-[2rem] mb-[10px]">{zeroPad(seconds)}</div>
        <div className="uppercase text-white">Secs</div>
      </div>
     
    </div>
  );

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <Countdown
          date={Date.now() + mintDate.getTime() - new Date().getTime()}
          renderer={renderer}
        />
      </div>
    </div>
  );
}

export default App;
