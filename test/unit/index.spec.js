import {Thumb} from '../../lib/index'
describe('测试点赞功能', () => {
  let thumb = Thumb.of(1)
  it('初始化thumb类', () => {
    expect(thumb.num).toBe(1)
  })
  it('点赞+1',() => {
    thumb.addLikeNum()
    expect(thumb.num).toBe(2)
    thumb.addLikeNum()
    expect(thumb.num).toBe(3)
  })
  it('点赞-1',() => {
    thumb.subLikeNum()
    expect(thumb.num).toBe(2)
    thumb.subLikeNum()
    expect(thumb.num).toBe(1)
  })
})
