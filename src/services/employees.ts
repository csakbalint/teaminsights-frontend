import { RequestQueryBuilder } from '@nestjsx/crud-request';
import { defaults } from 'lodash';
import axios from 'utils/axios';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
  currentLevel?: string;
  lastReviewedAt: string;
  levels: [
    {
      id: string;
      levelId: string;
      reviewId: string | null;
      title: string;
    },
  ];
}

interface GetManyParams {
  query?: string;
  page?: number;
  per_page?: number;
}

interface GetManyResponse<Entity> {
  data: Entity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export async function getEmployees({
  query,
  ...params
}: GetManyParams = {}): Promise<GetManyResponse<Employee>> {
  let search = {};
  if (query) {
    const qb = RequestQueryBuilder.create();
    search = qb.search({
      $or: [
        {
          firstName: {
            $contL: query,
          },
        },
        {
          lastName: {
            $contL: query,
          },
        },
      ],
    }).queryObject;
  }
  return (
    await axios.get('/employees', {
      params: defaults({}, search, params, { page: 1, per_page: 10 }),
    })
  ).data;
}
