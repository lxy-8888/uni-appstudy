const fectData = (params) => {
	// 加载图标
	uni.showLoading({
	title: "加载中"
	});
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			success: (result) => {
				resolve(result);
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {
			// 隐藏加载图标
			uni.hideLoading();
			}
		});
	})
}
// 获取到分类信息
export const goodsListRequest = (params) => fectData(params);