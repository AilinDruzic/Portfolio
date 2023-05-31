import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SendIcon from "@mui/icons-material/Send";
import { fontSize } from "@mui/system";
import QRCode from "react-qr-code";

export default function Talk() {
  return (
    <section
      className=" w-full h-[500px] rounded-3xl shadow-xl
      text-3xl font-bold bg-slate-100 mb-20"
      id="Talk"
    >
      <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 pt-10 pl-16">
        Let's Talk!
      </h1>
      <div className=" flex flex-row space-x-4 pt-10 pl-20">
        <PhoneIphoneIcon style={{ color: "grey", fontSize: "30" }} />
        <p className="text-slate-600 text-sm mt-1">+46708260510</p>
      </div>

      <div className="flex flex-row space-x-4 pt-8 pl-20">
        <SendIcon style={{ color: "grey", fontSize: "30" }} />
        <p className="text-slate-600 text-sm mt-1">ailindruzic@gmail.com</p>
      </div>

      <div> här lägger du cv</div>

      <div className="pt-20 pl-20">
        <QRCode
          size={100}
          fgColor="grey"
          value="https://www.linkedin.com/in/ailin-druzic-967696253/"
        />
      </div>
    </section>
  );
}
