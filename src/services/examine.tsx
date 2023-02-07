import request from "./request";

export const getEntryExamines = (params) => {
  return request('/workflow/worksupportprocess/getSupportByNumber', {
    method: 'get',
    params,
  })
}

export const getToolbars = (params) => {
  return request('/workflow/worksupportprocess/getToolbarByNumber', {
    method: 'get',
    params,
  })
}