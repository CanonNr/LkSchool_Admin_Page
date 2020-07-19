import  request  from '@/utils/request';

export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

export async function queryCurrent(token:string) {
  return request<API.CurrentUser>('/account/info',{
    method: 'GET',
    data: token,
  });
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}

