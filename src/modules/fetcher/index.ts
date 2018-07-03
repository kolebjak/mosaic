import { FetchGalleryResponse, PostImageResponse } from '../../types';

export const fetcher = async <T>(url: string, method: 'GET' | 'POST', headers = {}, body: {} | null = null): Promise<T> => {
  const raw = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID c525fc8bfedf07e',
      ...headers
    },
  });
  return raw.json();
};

const apiPath = 'https://api.imgur.com/3';

export const fetchGallery: (page: number) =>
  Promise<FetchGalleryResponse> = async (page: number) =>
  (await fetcher<FetchGalleryResponse>(`${apiPath}/gallery/r/aww/time/all/${page}`, 'GET'));

export const postImage: (base64Image: string) =>
  Promise<PostImageResponse> = async (base64Image: string) =>
  (await fetcher<PostImageResponse>(`${apiPath}/image`, 'POST', {}, { image: base64Image, type: 'jpg' }));
