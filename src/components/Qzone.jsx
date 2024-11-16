import swimming from"../assets/swimming.png";
import clas from"../assets/class.png";
import play from "../assets/playground.png";
const Qzone = () => {
    return (
        <div className="mt-4 bg-slate-50 p-3 flex flex-col space-y-2">
            <h1 className="font-semibold">Q-Zone</h1>
            <img src={swimming} alt="" srcset="" />
            <img src={clas} alt="" srcset="" />
            <img src={play} alt="" srcset="" />
        </div>
    );
};

export default Qzone;