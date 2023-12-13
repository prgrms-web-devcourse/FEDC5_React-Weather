import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { LocationType } from '../src/Types/Geolocation';

const { KAKAO_API_KEY, KAKAO_API_END_POINT } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { longitude, latitude } = req.body as LocationType;

  const { data: responseValue } = await axios.get(
    `${KAKAO_API_END_POINT}x=${longitude}&y=${latitude}`,
    {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`
      }
    }
  );

  return res.status(200).json(responseValue);
}
