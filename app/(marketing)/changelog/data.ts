export type ChangelogItem = {
  date: string;
  points: string[];
  image: string;
};

export const changelogData: ChangelogItem[] = [
  {
    date: "May 20, 2025",
    points: [
      "🎨 More themes – Expanded theme options for better customization, inspired by TweakCN",
      "⚙️ Upgraded to Tailwind v4 – Leverages native CSS variables for seamless styling from React.",
    ],
    image:
      "https://res.cloudinary.com/dctl5pihh/image/upload/v1748517670/behindui-v2_lvjcjx.png", // kamu simpan file di public/images/changelog/
  },
  {
    date: "Oct 01, 2024",
    points: ["🐣 Hello World!"],
    image:
      "https://github.com/user-attachments/assets/14f6c581-1281-4d6f-b11d-1babadd08734",
  },
];
