/**
 * 封装一个公共的请求方法
 */
const fectData = (params) => {
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			success: (result) => {
				
				resolve(result);
			},
			fail: (err) => {
				reject(err)
			}
		});
	})
}
// 轮播图的请求
export const bannerRequest = (params) => fectData(params);
