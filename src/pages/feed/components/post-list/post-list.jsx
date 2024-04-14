import { useQuery } from '@tanstack/react-query';

import { Member, Post } from '@/components/common';
import { Text } from '@/components/core';

import { getAllPosts } from '../../utils/api';

import { Skeleton } from './skeleton';

export const PostList = () => {
  // const postsList = useQuery({ queryKey: ['postsList'], queryFn: getAllPosts });

  const data = [
    {
      id: 57,
      text: 'Temeritas thalassinus tam considero urbanus tabernus velociter.',
      createdAt: '2024-03-26T15:31:09.931Z',
      author: {
        id: 10,
        name: 'Thomas Wiegand',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/48149804'
      },
      attachments: [
        {
          id: 96,
          url: 'https://picsum.photos/seed/z28Ed9a/640/480',
          type: 'image'
        },
        {
          id: 79,
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
          type: 'video'
        },
        {
          id: 63,
          url: 'https://picsum.photos/seed/J9StcOKP/640/480',
          type: 'image'
        }
      ]
    },
    {
      id: 60,
      text: 'Comprehendo amor cohaero vir decens turpis xiphias aegre repellendus totidem.',
      createdAt: '2024-03-26T14:49:17.642Z',
      author: {
        id: 4,
        name: 'Neal Goyette',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/43858527'
      },
      attachments: []
    },
    {
      id: 10,
      text: 'Velociter autem traho teres.',
      createdAt: '2024-03-26T12:45:54.941Z',
      author: {
        id: 4,
        name: 'Neal Goyette',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/43858527'
      },
      attachments: [
        {
          id: 14,
          url: 'https://picsum.photos/seed/L4nL7EDZOs/640/480',
          type: 'image'
        },
        {
          id: 80,
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
          type: 'video'
        },
        {
          id: 63,
          url: 'https://picsum.photos/seed/esGMGj/640/480',
          type: 'image'
        }
      ]
    },
    {
      id: 26,
      text: 'Candidus amplexus tunc commodo.',
      createdAt: '2024-03-26T11:49:42.594Z',
      author: {
        id: 1,
        name: 'Rudolph Mante',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/32852547'
      },
      attachments: []
    },
    {
      id: 40,
      text: 'Casso ante tubineus virga fugit amplexus copiose.',
      createdAt: '2024-03-26T11:21:25.405Z',
      author: {
        id: 2,
        name: 'Caroline Lakin',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/89765670'
      },
      attachments: [
        {
          id: 80,
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          type: 'video'
        },
        {
          id: 3,
          url: 'https://picsum.photos/seed/p0dA5Sih9/640/480',
          type: 'image'
        },
        {
          id: 62,
          url: 'https://picsum.photos/seed/hrrTXrv/640/480',
          type: 'image'
        }
      ]
    },
    {
      id: 21,
      text: 'Caput desolo stips.',
      createdAt: '2024-03-26T09:04:57.713Z',
      author: {
        id: 3,
        name: 'Daisy McKenzie',
        profilePictureUrl:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg'
      },
      attachments: [
        {
          id: 1,
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          type: 'video'
        },
        {
          id: 98,
          url: 'https://picsum.photos/seed/dxy3i/640/480',
          type: 'image'
        },
        {
          id: 57,
          url: 'https://picsum.photos/seed/XGUamdAmm/640/480',
          type: 'image'
        }
      ]
    },
    {
      id: 61,
      text: 'Vox infit aegre tametsi statua coma venustas harum.',
      createdAt: '2024-03-26T08:27:09.723Z',
      author: {
        id: 4,
        name: 'Neal Goyette',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/43858527'
      },
      attachments: [
        {
          id: 50,
          url: 'https://picsum.photos/seed/5I5wysgy/640/480',
          type: 'image'
        },
        {
          id: 24,
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
          type: 'video'
        },
        {
          id: 44,
          url: 'https://picsum.photos/seed/gyns7m4yPp/640/480',
          type: 'image'
        }
      ]
    },
    {
      id: 31,
      text: 'Averto vespillo cito sulum officia sunt umbra.',
      createdAt: '2024-03-26T05:02:34.833Z',
      author: {
        id: 7,
        name: 'Miriam Hackett',
        profilePictureUrl:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1035.jpg'
      },
      attachments: []
    },
    {
      id: 9,
      text: 'Vilicus urbanus adflicto aptus tabula coniuratio video cruentus.',
      createdAt: '2024-03-26T02:47:25.701Z',
      author: {
        id: 1,
        name: 'Rudolph Mante',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/32852547'
      },
      attachments: []
    },
    {
      id: 33,
      text: 'Commemoro at canonicus cruentus desipio tracto adamo.',
      createdAt: '2024-03-26T02:03:52.373Z',
      author: {
        id: 10,
        name: 'Thomas Wiegand',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/48149804'
      },
      attachments: [
        {
          id: 86,
          url: 'https://picsum.photos/seed/rjIwnTln/640/480',
          type: 'image'
        },
        {
          id: 94,
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          type: 'video'
        },
        {
          id: 20,
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
          type: 'video'
        }
      ]
    }
  ];

  return (
    <>
      {data.map(({ id, author, text, attachments }) => (
        <Post
          image={author.profilePictureUrl}
          key={id}
          name={author.name}
          description={text}
          attachments={attachments}
        />
      ))}
    </>
  );
};
