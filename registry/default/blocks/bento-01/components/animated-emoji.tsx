"use client";

import Image from "next/image";

const AnimatedEmoji = () => {
  return (
    <div className="flex h-full  w-full  items-center justify-center">
      <Image
        alt="Animated Emoji"
        height={150}
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Cat%20with%20Heart-Eyes.png"
        width={150}
      />
    </div>
  );
};

export default AnimatedEmoji;
