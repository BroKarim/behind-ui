"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface Author {
  name: string;
  link: string;
  avatar: string;
}
interface PostDetailProps {
  lastUpdate: string;
  builtWith: string[];
  tags: string[];
  author: Author;
}

const PostDetail: React.FC<PostDetailProps> = ({
  lastUpdate,
  builtWith,
  tags,
  author,
}) => {
  return (
    <div className="flex w-full flex-col items-start justify-start space-y-4 text-gray-400 md:mt-4 md:flex-row md:gap-20 md:space-y-1 md:px-4">
      <div className="space-y-4 md:space-y-1">
        <div className="flex w-full flex-col gap-2">
          Last Update:
          <p className="text-white lg:pl-4">{lastUpdate}</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          Built With:
          <p className="text-white lg:pl-4">{builtWith.join(", ")}</p>
        </div>
      </div>
      <div className="space-y-4 md:space-y-1">
        <div className="flex flex-col">
          Tags:
          <div className="md:w-full lg:pl-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          Author:
          <a
            href={author.link}
            className="flex flex-row items-center text-white transition-colors lg:pl-4"
          >
            <Avatar>
              <AvatarImage
                src={author.avatar}
                className="h-8 w-8"
                alt={author.name}
              />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            {author.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
