// 🛡️ 本文件由 XingHuiSama 控制台自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    "title": "百合",
    "description": "百合是我最爱看的恋爱作品。说不上为什么，或许因为它的遥不可及与美好吧。",
    "cover": "https://bu.dusays.com/2026/07/20/6a5e37080ff07.png",
    "id": "album_1784559499557",
    "photos": [
      {
        "url": "https://bu.dusays.com/2026/07/20/6a5e370bcadc1.png"
      },
      {
        "url": "https://bu.dusays.com/2026/07/20/6a5e370ba9afc.png"
      },
      {
        "url": "https://bu.dusays.com/2026/07/20/6a5e370b3384c.png"
      }
    ],
    "date": "2026-07-20"
  }
];