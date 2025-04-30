const VideoPlayer = () => {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
      <video src="/video/video.mp4" controls className="w-full h-auto rounded-2xl">
        مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
      </video>
    </div>
  );
};

export default VideoPlayer;
