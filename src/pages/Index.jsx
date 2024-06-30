import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [asciiOutput, setAsciiOutput] = useState("");

  const handleVideoUpload = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const processVideo = async () => {
    if (!videoFile) {
      alert("Please upload a video file first.");
      return;
    }

    // Placeholder for video processing logic
    // This is where you would process the video and convert it to ASCII
    // For now, we'll just set a dummy ASCII output
    setAsciiOutput("ASCII representation of the video will be displayed here.");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Video to ASCII Converter</h1>
      <Input type="file" accept="video/*" onChange={handleVideoUpload} />
      <Button onClick={processVideo}>Convert to ASCII</Button>
      <Textarea value={asciiOutput} readOnly className="w-full h-64 mt-4" />
    </div>
  );
};

export default Index;