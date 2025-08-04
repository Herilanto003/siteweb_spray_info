const DotLoading = ({ size = "w-3 h-3", color = "bg-purple-500" }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`${size} ${color} rounded-full animate-pulse`}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default DotLoading;
