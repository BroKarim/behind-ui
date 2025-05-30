interface WindowHeaderProps {
  title: string;
}

function WindowHeader({ title }: WindowHeaderProps) {
  return (
    <div className="bg-background px-4 py-1 flex gap-2 items-center border-b">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
      </div>
      <div className="flex-1">
        <span className="text-gray-700 font-medium">{title}</span>
      </div>
    </div>
  );
}

export default WindowHeader;
