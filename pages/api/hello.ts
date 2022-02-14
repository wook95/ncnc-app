// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 추후에 참고할 수 있도록 파일 제거하지 않았음
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}
