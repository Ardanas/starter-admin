import request from '../request'

export function getMaps(canvasId) {
  return request.get('/story/map/getMaps', { params: { canvasId } })
}
