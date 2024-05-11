import Socials from "../components/socials.js";
import "../common.css";

export default function Page() {
    return (
        <div className="window flex-column flex-center-h flex-center-v">
            <div className="flex-column flex-center-h flex-center-v soft-box">
                <h1 className="header padding-20">Get to know me</h1>
                <Socials/>
            </div>
        </div>
    );
  }