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
// 获取到分类信息
export const categoryRequest = (params) => fectData(params);
