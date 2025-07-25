import { Sparkles } from "lucide-react";

const VideoTubeLogo = () => (
  <div className="flex items-center gap-1">
    <div className="w-10 h-10 
      bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 
     rounded-lg flex items-center justify-center">
      <Sparkles className="w-8 h-8 text-white" />
      <span className="text-white text-md font-bold"></span>
    </div>
    <span className="font-bold text-xl text-gray-900">VideoTube</span>
  </div>
);

export default VideoTubeLogo;