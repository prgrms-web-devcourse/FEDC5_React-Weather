import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import { GetApiProps } from '../src/Types/Api';
/*
  초단기 예보
  단기 예보
*/

const { APIKEY, ENDPOINT } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const {
    service,
    numOfRows,
    pageNo,
    dataType,
    base_date,
    base_time,
    nx,
    ny
  }: GetApiProps = req.body;

  const { data: responseValue } = await axios({
    url: `${ENDPOINT}/${service}?serviceKey=${APIKEY}&dataType=${dataType}&numOfRows=${numOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`
  });

  res.status(200).json(responseValue);
}
