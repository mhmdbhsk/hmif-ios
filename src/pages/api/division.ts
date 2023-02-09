import DivisionData from '@/configs/DivisionsData';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const data = DivisionData.find((item) => item.id === id);
  res.status(200).json(data);
}
