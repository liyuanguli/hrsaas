import request from '@/utils/request'

/*
** 获取组织架构的数据
*/
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}