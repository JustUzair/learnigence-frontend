import { UserActions } from "./UserActions";
import { UserCard } from "./UserCard";

export const VideoContent = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-5 px-3 py-2">
      <div className="users flex flex-col gap-y-5 lg:items-start items-center w-[100%] mx-auto">
        <UserCard isSpeaking={false} name={"Ridha"} />
        <UserCard isSpeaking={true} name={"Ms. Kaur"} />
        <div className="user-actions">
          <UserActions />
        </div>
      </div>
      <div className="lg:col-span-2 lg:flex-grow sm:flex-col md:flex-col">
        <iframe
          className="w-full h-full aspect-square lg:aspect-video"
          src="https://www.youtube.com/embed/DRZogmD647U?si=hbuZs0LpwVplCrx4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
